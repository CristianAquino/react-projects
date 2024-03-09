"use client";
import { useState } from "react";
import { REGISTER_TEACHER } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { CreateTeacherType } from "../../models";
import { post_register } from "../../services";
export type RegisterProps = {
  // types...
};

const Register = ({}: RegisterProps) => {
  const [form, setForm] = useState<CreateTeacherType>(REGISTER_TEACHER);
  const { loading, callEndpoint } = useFetchAndLoad();
  async function postData() {
    await callEndpoint(post_register(form));
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
        <label aria-label="insert your first name">
          First Name:
          <input type="text" name="first_name" value={form.first_name} />
        </label>
        <label aria-label="insert your second name">
          Second Name:
          <input type="text" name="second_name" value={form.second_name} />
        </label>
        <label aria-label="insert your email">
          Email:
          <input type="email" name="email" value={form.email} />
        </label>
        <label aria-label="insert your password">
          Password:
          <input type="password" name="password" value={form.password} />
        </label>
        <input type="submit" value="Register" />
      </form>
      {loading && "loading"}
    </>
  );
};

export default Register;
