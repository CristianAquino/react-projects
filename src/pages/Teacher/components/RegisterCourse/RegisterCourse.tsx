"use client";
import { SEO } from "@app/components";
import { useState } from "react";
import { REGISTER_COURSE } from "../../helpers";
import { useFetchAndLoad, useValidateForm } from "../../hooks";
import { CreateCourseSchema, PostCreateCourseType } from "../../models";
import { post_course_create } from "../../services";
import { useCourseStorage } from "../../store";
import { InputButtons, Label, LabelError } from "../Login/styled-components";
import { Title } from "../Profile/styled-components";
import { FormCourse, Option, Select } from "./styled-components";

export type RegisterCourseProps = {
  // types...
};

const RegisterCourse = ({}: RegisterCourseProps) => {
  const [form, setForm] = useState<PostCreateCourseType>(REGISTER_COURSE);
  const [degree, setDegree] = useState<number[]>([1, 2, 3, 4, 5, 6]);
  const setAddCourse = useCourseStorage((state) => state.setAddCourse);
  const { loading, callEndpoint } = useFetchAndLoad();
  const { errors, flag } = useValidateForm({
    schema: CreateCourseSchema,
    data: form,
  });
  async function postData() {
    const resp = await callEndpoint(post_course_create({ data: form }));
    if (resp.status < 300) {
      setAddCourse(resp.data);
      setForm(REGISTER_COURSE);
    }
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postData();
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    if (e.target.value === "primaria") {
      setDegree([1, 2, 3, 4, 5, 6]);
    } else if (e.target.value === "secundaria") {
      setDegree([1, 2, 3, 4, 5]);
    }
    if (e.target.name === "section") {
      return setForm({ ...form, section: e.target.value.toUpperCase() });
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SEO
        title={"Dashboard | Teacher - Register Course"}
        description={"course registration"}
      />
      <Title>register course</Title>
      <FormCourse onSubmit={handleSubmit} onChange={handleChange}>
        <Label aria-label="enter the name of the course">
          <span>name course:</span>
          <input type="text" name="name" value={form.name} autoFocus />
        </Label>
        {errors?.name && (
          <div>
            {errors.name.map((error) => (
              <LabelError key={error}>{error}</LabelError>
            ))}
          </div>
        )}
        <Label aria-label="select course level">
          <span>level:</span>
          <Select name="level" value={form.level}>
            <Option value="primaria">primaria</Option>
            <Option value="secundaria">secundaria</Option>
          </Select>
        </Label>
        {errors?.level && (
          <div>
            {errors.level.map((error) => (
              <LabelError key={error}>{error}</LabelError>
            ))}
          </div>
        )}
        <Label aria-label="select course level">
          <span>degree:</span>
          <Select name="degree" value={form.degree}>
            {degree.map((e) => (
              <Option key={e} value={e}>
                {e}
              </Option>
            ))}
          </Select>
        </Label>
        {errors?.degree && (
          <div>
            {errors.degree.map((error) => (
              <LabelError key={error}>{error}</LabelError>
            ))}
          </div>
        )}
        <Label aria-label="enter the section of the course">
          <span>section:</span>
          <input type="text" name="section" value={form.section} />
        </Label>
        {errors?.section && (
          <div>
            {errors.section.map((error) => (
              <LabelError key={error}>{error}</LabelError>
            ))}
          </div>
        )}
        <InputButtons>
          {loading ? (
            <button style={{ backgroundColor: "#0d4dff" }} disabled>
              loading...
            </button>
          ) : (
            <input type="submit" value="Register" disabled={flag} />
          )}
        </InputButtons>
      </FormCourse>
    </>
  );
};

export default RegisterCourse;
