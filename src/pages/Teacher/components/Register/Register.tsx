"use client";
import { useState } from "react";
import { REGISTER_TEACHER } from "../../helpers";
import { useFetchAndLoad, useValidateForm } from "../../hooks";
import { CreateTeacherSchema, CreateTeacherType } from "../../models";
import { post_register } from "../../services";
export type RegisterProps = {
  // types...
};

const Register = ({}: RegisterProps) => {
  const [form, setForm] = useState<CreateTeacherType>(REGISTER_TEACHER);
  const { loading, callEndpoint } = useFetchAndLoad();
  const { errors, flag } = useValidateForm({
    schema: CreateTeacherSchema,
    data: form,
  });

  async function postData() {
    await callEndpoint(post_register({ data: form }));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postData();
  };
  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label aria-label="insert your name">
          Name:
          <input type="text" name="name" value={form.name} autoFocus />
        </label>
        {errors?.name && errors.name.map((error) => <p key={error}>{error}</p>)}
        <label aria-label="insert your first name">
          First Name:
          <input type="text" name="first_name" value={form.first_name} />
        </label>
        {errors?.first_name &&
          errors.first_name.map((error) => <p key={error}>{error}</p>)}
        <label aria-label="insert your second name">
          Second Name:
          <input type="text" name="second_name" value={form.second_name} />
        </label>
        {errors?.second_name &&
          errors.second_name.map((error) => <p key={error}>{error}</p>)}
        <label aria-label="insert your email">
          Email:
          <input type="email" name="email" value={form.email} />
        </label>
        {errors?.email &&
          errors.email.map((error) => <p key={error}>{error}</p>)}
        <label aria-label="insert your password">
          Password:
          <input type="password" name="password" value={form.password} />
        </label>
        {errors?.password &&
          errors.password.map((error) => <p key={error}>{error}</p>)}
        <input type="submit" value="Register" disabled={flag} />
      </form>
      {loading && <p>loading...</p>}
    </>
  );
};

export default Register;
