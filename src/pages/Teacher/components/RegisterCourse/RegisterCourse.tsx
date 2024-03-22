"use client";
import React, { useState } from "react";
import { REGISTER_COURSE } from "../../helpers";
import { useFetchAndLoad, useValidateForm } from "../../hooks";
import { CreateCourseSchema, CreateCourseType } from "../../models";
import { post_course_create } from "../../services";
import { Label } from "../Login/styled-components";
import { Container, Title } from "../Profile/styled-components";
import {
  FormCourse,
  InputButtonsCourse,
  LabelErrorCourse,
  Option,
  Select,
} from "./styled-components";

export type RegisterCourseProps = {
  // types...
};

const RegisterCourse = ({}: RegisterCourseProps) => {
  const [form, setForm] = useState<CreateCourseType>(REGISTER_COURSE);
  const [degree, setDegree] = useState<number[]>([1, 2, 3, 4, 5, 6]);
  const { callEndpoint } = useFetchAndLoad();
  const { errors, flag } = useValidateForm({
    schema: CreateCourseSchema,
    data: form,
  });

  async function postData() {
    await callEndpoint(post_course_create({ data: form }));
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postData();
  };

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    if (e.target.name === "degree") {
      return setForm({ ...form, degree: parseInt(e.target.value) });
    }
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
    <Container>
      <Title>register course</Title>
      <FormCourse onSubmit={handleSubmit} onChange={handleChange}>
        <Label aria-label="enter the name of the course">
          <span>name course:</span>
          <input type="text" name="name" value={form.name} autoFocus />
        </Label>
        <div>
          {errors?.name &&
            errors.name.map((error) => (
              <LabelErrorCourse key={error}>{error}</LabelErrorCourse>
            ))}
        </div>
        <Label aria-label="select course level">
          <span>level:</span>
          <Select name="level" defaultValue={form.level}>
            <Option value="primaria">primaria</Option>
            <Option value="secundaria">secundaria</Option>
          </Select>
        </Label>
        <div>
          {errors?.level &&
            errors.level.map((error) => (
              <LabelErrorCourse key={error}>{error}</LabelErrorCourse>
            ))}
        </div>
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
        <div>
          {errors?.degree &&
            errors.degree.map((error) => (
              <LabelErrorCourse key={error}>{error}</LabelErrorCourse>
            ))}
        </div>
        <Label aria-label="enter the section of the course">
          <span>section:</span>
          <input type="text" name="section" value={form.section} />
        </Label>
        <div>
          {errors?.section &&
            errors.section.map((error) => (
              <LabelErrorCourse key={error}>{error}</LabelErrorCourse>
            ))}
        </div>
        <InputButtonsCourse>
          <input type="submit" value="Register" disabled={flag} />
        </InputButtonsCourse>
      </FormCourse>
    </Container>
  );
};

export default RegisterCourse;
