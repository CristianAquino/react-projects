"use client";

import { useState } from "react";
import { REGISTER_COURSE } from "../../helpers";
import { useFetchAndLoad, useValidateForm } from "../../hooks";
import { CreateCourseSchema } from "../../models";
import { CreateCourseType } from "../../models/course.model";
import { get_course_one_id, post_course_create } from "../../services";

export type CourseProps = {
  // types...
};

const Course = ({}: CourseProps) => {
  const [form, setForm] = useState<CreateCourseType>(REGISTER_COURSE);
  const [course, setCourse] = useState<CreateCourseType[]>([]);
  const [degree, setDegree] = useState<number[]>([1, 2, 3, 4, 5, 6]);
  const { errors } = useValidateForm({
    schema: CreateCourseSchema,
    data: form,
  });
  const { callEndpoint } = useFetchAndLoad();

  console.log(form);

  async function postData() {
    await callEndpoint(post_course_create({ data: form }));
  }

  async function getCourseData() {
    const { data } = await callEndpoint(
      get_course_one_id({ id: "ab1cd9fa-8dda-4aa8-a9dd-d7904bce95b3" })
    );
    if (data) {
      setCourse(data);
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
    <div>
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
        <input
          type="submit"
          value="Register"
          disabled={errors ? true : false}
        />
      </form>
      <button onClick={() => getCourseData()}>get</button>
      <pre>{JSON.stringify(course, null, 2)}</pre>
    </div>
  );
};

export default Course;
