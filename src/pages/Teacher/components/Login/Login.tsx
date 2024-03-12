"use client";

import { setLocalStorage } from "@app/helpers";
import { useState } from "react";
import { LOGIN_TEACHER } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { LoginTeacherType } from "../../models";
import { post_login } from "../../services";

export type LoginProps = {
  // types...
};

const Login = ({}: LoginProps) => {
  const [form, setForm] = useState<LoginTeacherType>(LOGIN_TEACHER);
  const { loading, callEndpoint } = useFetchAndLoad();
  async function postData() {
    const { data } = await callEndpoint(post_login({ data: form }));
    if (data) {
      setLocalStorage({ key: "token", value: data });
    }
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
        <label aria-label="insert your email">
          Email:
          <input type="email" name="email" value={form.email} />
        </label>
        <label aria-label="insert your password">
          Password:
          <input type="password" name="password" value={form.password} />
        </label>
        <input type="submit" value="Login" />
      </form>
      {loading && "loading"}
    </>
  );
};

export default Login;
