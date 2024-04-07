"use client";

import { useRef, useState } from "react";
import { UPDATE_COURSE } from "../../helpers";
import { useFetchAndLoad, useValidateForm } from "../../hooks";
import {
  CourseType,
  CreateCourseSchema,
  CreateStudentType,
  GetListCourseType,
  InitialAttendanceType,
  InitialCalificationType,
  MeStudentType,
} from "../../models";
import { useCourseStorage } from "../../store";
import {
  InputButtons,
  LabelError,
  Label as LabelU,
  LoadingForm,
} from "../Login/styled-components";
import { Modal } from "../Modal";
import { Container, Data, Label, Title } from "../Profile/styled-components";
import {
  FormCourse,
  Option,
  Select,
} from "../RegisterCourse/styled-components";
import {
  LabelTD,
  LinkData,
  Table,
  Td,
  TdInput,
  Th,
  Tr,
} from "./styled-components";

export type TableDataProps = {
  // types...
  children: React.ReactNode;
};

export type TableDataStudentProps = {
  // types...
  datos: CreateStudentType;
};

// container table
const TableData = ({ children }: TableDataProps) => {
  return <Table>{children}</Table>;
};

export const TableDataStudent = ({ datos }: TableDataStudentProps) => {
  const head = ["#", "first name", "second name", "names"];
  return (
    <TableData>
      <thead>
        <Tr>
          {head.map((item, index) => (
            <Th key={index}>{item}</Th>
          ))}
        </Tr>
      </thead>
      <tbody>
        {datos.length > 0 ? (
          datos.map((student, index) => (
            <Tr key={index}>
              <Td>{index + 1}</Td>
              <Td>{student.first_name}</Td>
              <Td>{student.second_name}</Td>
              <Td>{student.name}</Td>
            </Tr>
          ))
        ) : (
          <p>No courses</p>
        )}
      </tbody>
    </TableData>
  );
};

export type TableDataStudentInfoProps = {
  // types...
  datos: MeStudentType[];
  url: string;
};

export const TableDataStudentInfo = ({
  datos,
  url,
}: TableDataStudentInfoProps) => {
  const head = ["#", "first name", "second name", "names"];
  return (
    <TableData>
      <thead>
        <Tr>
          {head.map((item, index) => (
            <Th key={index}>{item}</Th>
          ))}
        </Tr>
      </thead>
      <tbody>
        {datos.length > 0 ? (
          datos.map((student, index) => (
            <Tr key={student.id}>
              <Td>{index + 1}</Td>
              <Td>
                <LinkData to={`${url}/${student.id}`}>
                  {student.first_name}
                </LinkData>
              </Td>
              <Td>
                <LinkData to={`${url}/${student.id}`}>
                  {student.second_name}
                </LinkData>
              </Td>
              <Td>
                <LinkData to={`${url}/${student.id}`}>{student.name}</LinkData>
              </Td>
            </Tr>
          ))
        ) : (
          <p>No courses</p>
        )}
      </tbody>
    </TableData>
  );
};

export type TableDataCourseProps = {
  datos: GetListCourseType;
  url: string;
};
export const TableDataCourse = ({ datos, url }: TableDataCourseProps) => {
  const head = ["#", "name", "level", "degree", "section"];
  return (
    <TableData>
      <thead>
        <Tr>
          {head.map((item, index) => (
            <Th key={index}>{item}</Th>
          ))}
        </Tr>
      </thead>
      <tbody>
        {datos.length > 0 ? (
          datos.map((course, index) => (
            <Tr key={course.id}>
              <Td>{index + 1}</Td>
              <Td>
                <LinkData to={`${url}/${course.id}`}>{course.name}</LinkData>
              </Td>
              <Td>
                <LinkData to={`${url}/${course.id}`}>{course.level}</LinkData>
              </Td>
              <Td>
                <LinkData to={`${url}/${course.id}`}>{course.degree}</LinkData>
              </Td>
              <Td>
                <LinkData to={`${url}/${course.id}`}>{course.section}</LinkData>
              </Td>
            </Tr>
          ))
        ) : (
          <p>No courses</p>
        )}
      </tbody>
    </TableData>
  );
};

export type TableDataCourseUploadProps = {
  datos: GetListCourseType;
  setCourse: (dato: CourseType) => void;
};
export const TableDataCourseUpload = ({
  datos,
  setCourse,
}: TableDataCourseUploadProps) => {
  const head = ["#", "name", "level", "degree", "section"];
  return (
    <TableData>
      <thead>
        <Tr>
          {head.map((item, index) => (
            <Th key={index}>{item}</Th>
          ))}
        </Tr>
      </thead>
      <tbody>
        {datos.length > 0 ? (
          datos.map((course, index) => (
            <Tr key={course.id}>
              <Td>{index + 1}</Td>
              <Td onClick={() => setCourse(course)}>{course.name}</Td>
              <Td onClick={() => setCourse(course)}>{course.level}</Td>
              <Td onClick={() => setCourse(course)}>{course.degree}</Td>
              <Td onClick={() => setCourse(course)}>{course.section}</Td>
            </Tr>
          ))
        ) : (
          <p>No courses</p>
        )}
      </tbody>
    </TableData>
  );
};

export const TableDataCourseUpdate = ({ datos, url }: TableDataCourseProps) => {
  const head = ["#", "name", "level", "degree", "section", "actions"];
  const { callEndpoint, loading } = useFetchAndLoad();
  const modalDeleteRef = useRef<HTMLDialogElement>(null);
  const modalUpdateRef = useRef<HTMLDialogElement>(null);
  const { setDeleteCourse, setUpdateCourse } = useCourseStorage((state) => ({
    setDeleteCourse: state.setDeleteCourse,
    setUpdateCourse: state.setUpdateCourse,
  }));
  const [modalCourse, setModalCourse] = useState<CourseType>(UPDATE_COURSE);
  const [degree, setDegree] = useState<number[]>([1, 2, 3, 4, 5, 6]);
  const { errors, flag } = useValidateForm({
    schema: CreateCourseSchema,
    data: modalCourse,
  });

  function handleDeleteOpen(data: any) {
    modalDeleteRef.current?.showModal();
    setModalCourse(data);
  }
  function handleDeleteClose() {
    modalDeleteRef.current?.close();
  }
  async function handleDelete() {
    // await callEndpoint(delete_course_id({ id: modalCourse.id }));
    setDeleteCourse(modalCourse.id);
  }

  function handleUpdateOpen(data: CourseType) {
    modalUpdateRef.current?.showModal();
    setModalCourse(data);
  }
  function handleUpdateClose() {
    modalUpdateRef.current?.close();
  }
  async function handleUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // await callEndpoint(
    //   put_course_id({ data: modalCourse, id: modalCourse.id })
    // );
    setUpdateCourse(modalCourse);
  }
  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    if (e.target.value === "primaria") {
      setDegree([1, 2, 3, 4, 5, 6]);
    } else if (e.target.value === "secundaria") {
      setDegree([1, 2, 3, 4, 5]);
    }
    if (e.target.name === "section") {
      return setModalCourse({
        ...modalCourse,
        section: e.target.value.toUpperCase(),
      });
    }
    setModalCourse({ ...modalCourse, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* modal delete */}
      <Modal ref={modalDeleteRef}>
        <Title>course info to delete</Title>
        <Data>
          <Label>
            <span>course name: </span>
            <span>{modalCourse.name}</span>
          </Label>
          <Label>
            <span>level: </span>
            <span>{modalCourse.level}</span>
          </Label>
          <Label>
            <span>degree: </span>
            <span>{modalCourse.degree}</span>
          </Label>
          <Label>
            <span>section: </span>
            <span>{modalCourse.section}</span>
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
            <button onClick={handleDeleteClose} type="button">
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
      {/* modal update */}
      <Modal ref={modalUpdateRef}>
        <Title>course info to update</Title>
        <Container style={{ inlineSize: "64%" }}>
          <FormCourse onSubmit={handleUpdate} onChange={handleChange}>
            <LabelU aria-label="enter the name of the course">
              <span>name course:</span>
              <input
                type="text"
                name="name"
                value={modalCourse.name}
                autoFocus
              />
            </LabelU>
            {errors?.name && (
              <div>
                {errors.name.map((error) => (
                  <LabelError key={error}>{error}</LabelError>
                ))}
              </div>
            )}
            <LabelU aria-label="select course level">
              <span>level:</span>
              <Select name="level" value={modalCourse.level}>
                <Option value="primaria">primaria</Option>
                <Option value="secundaria">secundaria</Option>
              </Select>
            </LabelU>
            {errors?.level && (
              <div>
                {errors.level.map((error) => (
                  <LabelError key={error}>{error}</LabelError>
                ))}
              </div>
            )}
            <LabelU aria-label="select course level">
              <span>degree:</span>
              <Select name="degree" value={modalCourse.degree}>
                {degree.map((e) => (
                  <Option key={e} value={e}>
                    {e}
                  </Option>
                ))}
              </Select>
            </LabelU>
            {errors?.degree && (
              <div>
                {errors.degree.map((error) => (
                  <LabelError key={error}>{error}</LabelError>
                ))}
              </div>
            )}
            <LabelU aria-label="enter the section of the course">
              <span>section:</span>
              <input type="text" name="section" value={modalCourse.section} />
            </LabelU>
            {errors?.section && (
              <div>
                {errors.section.map((error) => (
                  <LabelError key={error}>{error}</LabelError>
                ))}
              </div>
            )}
            <LabelError style={{ marginBlockStart: ".5rem" }}>
              Are you sure you want to update this course?
            </LabelError>
            <InputButtons>
              <input type="submit" value="Confirm" disabled={flag} />
              <button
                onClick={handleUpdateClose}
                type="button"
                formMethod="dialog"
              >
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
      <TableData>
        <thead>
          <Tr>
            {head.map((item, index) => (
              <Th key={index}>{item}</Th>
            ))}
          </Tr>
        </thead>
        <tbody>
          {datos.length > 0 ? (
            datos.map((course, index) => (
              <Tr key={course.id}>
                <Td>{index + 1}</Td>
                <Td>
                  <LinkData to={`${url}/${course.id}`}>{course.name}</LinkData>
                </Td>
                <Td>
                  <LinkData to={`${url}/${course.id}`}>{course.level}</LinkData>
                </Td>
                <Td>
                  <LinkData to={`${url}/${course.id}`}>
                    {course.degree}
                  </LinkData>
                </Td>
                <Td>
                  <LinkData to={`${url}/${course.id}`}>
                    {course.section}
                  </LinkData>
                </Td>
                <Td
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1rem",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "#0d4dff",
                      border: "none",
                      padding: ".25rem .5rem",
                      borderRadius: ".5rem",
                      textTransform: "capitalize",
                      cursor: "pointer",
                    }}
                    onClick={() => handleUpdateOpen(course)}
                  >
                    update
                  </button>
                  <button
                    style={{
                      backgroundColor: "#ea0000",
                      border: "none",
                      padding: ".25rem .5rem",
                      borderRadius: ".5rem",
                      textTransform: "capitalize",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDeleteOpen(course)}
                  >
                    delete
                  </button>
                </Td>
              </Tr>
            ))
          ) : (
            <p>No courses</p>
          )}
        </tbody>
      </TableData>
    </>
  );
};

export type TableTakeAttendanceStudentType = {
  datos: InitialAttendanceType;
  setAttendance: (st: any) => void;
};

export const TableTakeAttendanceStudent = ({
  datos,
  setAttendance,
}: TableTakeAttendanceStudentType) => {
  const head = [
    "#",
    "first name",
    "second name",
    "name",
    "asistio",
    "falto",
    "tarde",
  ];
  return (
    <TableData>
      <thead>
        <Tr>
          {head.map((item, index) => (
            <Th key={index}>{item}</Th>
          ))}
        </Tr>
      </thead>
      <tbody>
        {datos.length > 0 ? (
          datos.map((student, index) => (
            <Tr key={student.id}>
              <Td>{index + 1}</Td>
              <Td>{student.first_name}</Td>
              <Td>{student.second_name}</Td>
              <Td>{student.name}</Td>
              <LabelTD val={2}>
                <label>
                  <input
                    type="radio"
                    name={`att${student.id}`}
                    checked={student.att === 2}
                    onChange={() => setAttendance({ ...student, att: 2 })}
                  />
                </label>
              </LabelTD>
              <LabelTD val={0}>
                <label>
                  <input
                    type="radio"
                    name={`att${student.id}`}
                    checked={student.att === 0}
                    onChange={() => setAttendance({ ...student, att: 0 })}
                  />
                </label>
              </LabelTD>
              <LabelTD val={1}>
                <label>
                  <input
                    type="radio"
                    name={`att${student.id}`}
                    checked={student.att === 1}
                    onChange={() => setAttendance({ ...student, att: 1 })}
                  />
                </label>
              </LabelTD>
            </Tr>
          ))
        ) : (
          <p>No courses</p>
        )}
      </tbody>
    </TableData>
  );
};

export type TableSaveCalificationStudentType = {
  datos: InitialCalificationType;
  setAttendance: (st: any) => void;
};
export const TableSaveCalificationStudent = ({
  datos,
  setAttendance,
}: TableSaveCalificationStudentType) => {
  const head = ["#", "first name", "second name", "name", "PT", "PP", "PE"];
  return (
    <TableData>
      <thead>
        <Tr>
          {head.map((item, index) => (
            <Th key={index}>{item}</Th>
          ))}
        </Tr>
      </thead>
      <tbody>
        {datos.length > 0 ? (
          datos.map((student, index) => (
            <Tr key={student.id}>
              <Td>{index + 1}</Td>
              <Td>{student.first_name}</Td>
              <Td>{student.second_name}</Td>
              <Td>{student.name}</Td>
              <TdInput
                style={{
                  backgroundColor: `${
                    /^([0-9]|0[0-9]|1[0-9]|20|"")$/gi.test(student.pt + "")
                      ? "transparent"
                      : "red"
                  }`,
                }}
              >
                <LabelU
                  style={{
                    justifyContent: "center",
                    fontSize: "initial",
                  }}
                >
                  <input
                    style={{
                      marginInlineStart: "0",
                    }}
                    type="text"
                    name={`pt${student.id}`}
                    value={student.pt}
                    onChange={(e) =>
                      setAttendance({ ...student, pt: e.target.value })
                    }
                  />
                </LabelU>
              </TdInput>
              <TdInput
                style={{
                  backgroundColor: `${
                    /^([0-9]|0[0-9]|1[0-9]|20|"")$/gi.test(student.pp + "")
                      ? "transparent"
                      : "red"
                  }`,
                }}
              >
                <LabelU
                  style={{ justifyContent: "center", fontSize: "initial" }}
                >
                  <input
                    style={{ marginInlineStart: "0" }}
                    type="text"
                    name={`pp${student.id}`}
                    value={student.pp}
                    onChange={(e) =>
                      setAttendance({ ...student, pp: e.target.value })
                    }
                  />
                </LabelU>
              </TdInput>
              <TdInput
                style={{
                  backgroundColor: `${
                    /^([0-9]|0[0-9]|1[0-9]|20|"")$/gi.test(student.pe + "")
                      ? "transparent"
                      : "red"
                  }`,
                }}
              >
                <LabelU
                  style={{ justifyContent: "center", fontSize: "initial" }}
                >
                  <input
                    style={{ marginInlineStart: "0" }}
                    type="text"
                    name={`pe${student.id}`}
                    value={student.pe}
                    onChange={(e) =>
                      setAttendance({ ...student, pe: e.target.value })
                    }
                  />
                </LabelU>
              </TdInput>
            </Tr>
          ))
        ) : (
          <p>No courses</p>
        )}
      </tbody>
    </TableData>
  );
};

export default TableData;
