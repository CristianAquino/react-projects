"use client";
import React, { useState } from "react";
import { REGISTER_COURSE } from "../../helpers";
import { useFetchAndLoad, useValidateForm } from "../../hooks";
import { CreateCourseSchema, CreateCourseType } from "../../models";
import { post_course_create } from "../../services";

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
    <div>
      <h2>Register Course</h2>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label aria-label="enter the name of the course">
          Name course:
          <input type="text" name="name" value={form.name} autoFocus />
        </label>
        {errors?.name && errors.name.map((error) => <p key={error}>{error}</p>)}
        <label aria-label="select course level">
          Level:
          <select name="level" defaultValue={form.level}>
            <option value="primaria">primaria</option>
            <option value="secundaria">secundaria</option>
          </select>
        </label>
        {errors?.level &&
          errors.level.map((error) => <p key={error}>{error}</p>)}
        <label aria-label="select course level">
          Degree:
          <select name="degree" defaultValue={form.degree}>
            {degree.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </label>
        {errors?.degree &&
          errors.degree.map((error) => <p key={error}>{error}</p>)}
        <label aria-label="enter the section of the course">
          Section:
          <input type="text" name="section" value={form.section} />
        </label>
        {errors?.section &&
          errors.section.map((error) => <p key={error}>{error}</p>)}
        <input type="submit" value="Register" disabled={flag} />
      </form>
    </div>
  );
};

export default RegisterCourse;
