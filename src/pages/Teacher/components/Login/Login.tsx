"use client";

import { setCookie } from "@app/helpers";
import { useState } from "react";
import { LOGIN_TEACHER } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { LoginTeacherType } from "../../models";
import { post_login } from "../../services";
import { useNavigate } from "react-router-dom";
import { PRIVATE_ROUTE, PROYECTS_ROUTE } from "@app/routes";

export type LoginProps = {
  // types...
};

const Login = ({}: LoginProps) => {
  const [form, setForm] = useState<LoginTeacherType>(LOGIN_TEACHER);
  const { loading, callEndpoint } = useFetchAndLoad();
  const navigate = useNavigate();

  async function postData() {
    const { data } = await callEndpoint(post_login({ data: form }));
    if (data) {
      setCookie<string>({ key: "_token", value: data.token, time: 15 });
      navigate(PROYECTS_ROUTE.TEACHER + PRIVATE_ROUTE.DASHBOARD);
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
      {loading && <p>loading...</p>}
    </>
  );
};

export default Login;
