"use client";

import { SEO } from "@app/components";
import { forwardRef, useEffect, useRef, useState } from "react";
import { Modal, SearchInTable } from "..";
import { UPDATE_COURSE } from "../../helpers";
import { useFetchAndLoad, useValidateForm } from "../../hooks";
import { CourseType, CreateCourseSchema } from "../../models";
import { delete_course_id, get_course_list } from "../../services";
import { useCourseStorage } from "../../store";
import {
  InputButtons,
  LabelError,
  Label as LabelU,
  LoadingForm,
} from "../Login/styled-components";
import { Container, Data, Label, Title } from "../Profile/styled-components";
import {
  FormCourse,
  Option,
  Select,
} from "../RegisterCourse/styled-components";
import { TableDataEditCourse } from "../TableData/TableData";

export type ActionsInCoursesProps = {
  // types...
};

const ActionsInCourses = ({}: ActionsInCoursesProps) => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [search, setSearch] = useState("");
  const courses = useCourseStorage((state) => state.courses);

  const deleteRef = useRef<HTMLDialogElement>(null);
  const updateRef = useRef<HTMLDialogElement>(null);
  const { setCourses, setDeleteCourse, setUpdateCourse } = useCourseStorage(
    (state) => ({
      setCourses: state.setCourses,
      setDeleteCourse: state.setDeleteCourse,
      setUpdateCourse: state.setUpdateCourse,
    })
  );
  const [course, setcourse] = useState<CourseType>(UPDATE_COURSE);
  const [degree, setDegree] = useState<number[]>([1, 2, 3, 4, 5, 6]);
  const { errors, flag } = useValidateForm({
    schema: CreateCourseSchema,
    data: course,
  });

  function handleDeleteOpen(data: CourseType) {
    deleteRef.current?.showModal();
    setcourse(data);
  }
  function handleDeleteClose() {
    deleteRef.current?.close();
    setcourse(UPDATE_COURSE);
  }
  async function handleDelete() {
    const resp = await callEndpoint(delete_course_id({ id: course.id }));
    if (resp.status < 300) {
      setDeleteCourse(course.id);
      deleteRef.current?.close();
    } else {
      setcourse(course);
    }
  }

  function handleUpdateOpen(data: CourseType) {
    updateRef.current?.showModal();
    setcourse(data);
  }
  function handleUpdateClose() {
    updateRef.current?.close();
    setcourse(UPDATE_COURSE);
  }
  async function handleUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // await callEndpoint(
    //   put_course_id({ data: course, id: course.id })
    // );
    setUpdateCourse(course);
  }
  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    if (e.target.value === "primaria") {
      setDegree([1, 2, 3, 4, 5, 6]);
    } else if (e.target.value === "secundaria") {
      setDegree([1, 2, 3, 4, 5]);
    }
    if (e.target.name === "section") {
      return setcourse({
        ...course,
        section: e.target.value.toUpperCase(),
      });
    }
    setcourse({ ...course, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    async function get_list_course() {
      if (courses.length == 0) {
        const { data } = await callEndpoint(get_course_list());
        if (data) {
          setCourses(data.courses);
        }
      }
    }
    get_list_course();
  }, []);

  return (
    <>
      <SEO
        title={"Dashboard | Teacher - Actions in Courses"}
        description={"edit and/or delete a course"}
      />
      <ModalUpdateCourse
        data={course}
        errors={errors}
        flag={flag}
        handleChange={handleChange}
        handleClose={handleUpdateClose}
        loading={loading}
        ref={updateRef}
        handleUpdate={handleUpdate}
        degree={degree}
      />
      <ModalDeleteCourse
        data={course}
        loading={loading}
        handleClose={handleDeleteClose}
        handleDelete={handleDelete}
        ref={deleteRef}
      />
      <Title>list of courses</Title>
      <SearchInTable
        title={
          "Select or search for a course for which you want to edit your information"
        }
        search={search}
        onchange={setSearch}
        ariaLabel="insert the name of the course to search"
      />
      <TableDataEditCourse
        url={"/teacher/dashboard/course/info"}
        handleUpdateOpen={handleUpdateOpen}
        handleDeleteOpen={handleDeleteOpen}
        datos={courses.filter((e: any) => {
          if (search == "") return courses;
          return e.name.toLowerCase().includes(search.toLowerCase());
        })}
      />
    </>
  );
};

type ModalUpdateCourseProps = {
  data: CourseType;
  errors: any;
  flag: boolean;
  loading: boolean;
  degree: number[];
  handleUpdate: (e: any) => void;
  handleChange: (e: any) => void;
  handleClose: () => void;
};
const ModalUpdateCourse = forwardRef(
  (
    {
      data,
      errors,
      flag,
      loading,
      degree,
      handleUpdate,
      handleChange,
      handleClose,
    }: ModalUpdateCourseProps,
    ref
  ) => {
    return (
      <Modal ref={ref}>
        <Title>course info to update</Title>
        <Container style={{ inlineSize: "64%" }}>
          <FormCourse onSubmit={handleUpdate} onChange={handleChange}>
            <LabelU aria-label="enter the name of the course">
              <span>name course:</span>
              <input type="text" name="name" value={data.name} autoFocus />
            </LabelU>
            {errors?.name && (
              <div>
                {errors.name.map((error: any) => (
                  <LabelError key={error}>{error}</LabelError>
                ))}
              </div>
            )}
            <LabelU aria-label="select course level">
              <span>level:</span>
              <Select name="level" value={data.level}>
                <Option value="primaria">primaria</Option>
                <Option value="secundaria">secundaria</Option>
              </Select>
            </LabelU>
            {errors?.level && (
              <div>
                {errors.level.map((error: any) => (
                  <LabelError key={error}>{error}</LabelError>
                ))}
              </div>
            )}
            <LabelU aria-label="select course level">
              <span>degree:</span>
              <Select name="degree" value={data.degree}>
                {degree.map((e) => (
                  <Option key={e} value={e}>
                    {e}
                  </Option>
                ))}
              </Select>
            </LabelU>
            {errors?.degree && (
              <div>
                {errors.degree.map((error: any) => (
                  <LabelError key={error}>{error}</LabelError>
                ))}
              </div>
            )}
            <LabelU aria-label="enter the section of the course">
              <span>section:</span>
              <input type="text" name="section" value={data.section} />
            </LabelU>
            {errors?.section && (
              <div>
                {errors.section.map((error: any) => (
                  <LabelError key={error}>{error}</LabelError>
                ))}
              </div>
            )}
            <LabelError style={{ marginBlockStart: ".5rem" }}>
              Are you sure you want to update this course?
            </LabelError>
            <InputButtons>
              <input type="submit" value="Update Data" disabled={flag} />
              <button onClick={handleClose} type="button" formMethod="dialog">
                cancel
              </button>
            </InputButtons>
          </FormCourse>
          {loading && (
            <LoadingForm>
              <p>loading...</p>
            </LoadingForm>
          )}
        </Container>
      </Modal>
    );
  }
);

type ModalDeleteCourseProps = {
  data: CourseType;
  loading: boolean;
  handleDelete: (e: any) => void;
  handleClose: () => void;
};
const ModalDeleteCourse = forwardRef(
  (
    { data, loading, handleClose, handleDelete }: ModalDeleteCourseProps,
    ref
  ) => {
    return (
      <Modal ref={ref}>
        <Title>course info to delete</Title>
        <Data>
          <Label>
            <span>course name: </span>
            <span>{data.name}</span>
          </Label>
          <Label>
            <span>level: </span>
            <span>{data.level}</span>
          </Label>
          <Label>
            <span>degree: </span>
            <span>{data.degree}</span>
          </Label>
          <Label>
            <span>section: </span>
            <span>{data.section}</span>
          </Label>
          <LabelError style={{ marginBlockStart: ".5rem" }}>
            Are you sure you want to delete this course?
          </LabelError>
          <InputButtons>
            <button
              onClick={handleDelete}
              style={{ backgroundColor: "#1567ff" }}
            >
              confirm
            </button>
            <button onClick={handleClose} type="button">
              cancel
            </button>
          </InputButtons>
          {loading && (
            <LoadingForm>
              <p>loading...</p>
            </LoadingForm>
          )}
        </Data>
      </Modal>
    );
  }
);

export default ActionsInCourses;
