"use client";

import { setCookie } from "@app/helpers";
import { PRIVATE_ROUTE, PROYECTS_ROUTE } from "@app/routes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_TEACHER } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { LoginTeacherType } from "../../models";
import { post_login } from "../../services";
import { Form, InputButtons, Label, LoadingForm } from "./styled-components";

export type LoginProps = {
  // types...
  children: React.ReactNode;
};

const Login = ({ children }: LoginProps) => {
  const [form, setForm] = useState<LoginTeacherType>(LOGIN_TEACHER);
  const { loading, callEndpoint } = useFetchAndLoad();
  const navigate = useNavigate();

  async function postData() {
    const { data } = await callEndpoint(post_login({ data: form }));
    if (data) {
      setCookie<string>({ key: "_token", value: data.token, time: 15 });
      navigate(PROYECTS_ROUTE.TEACHER + PRIVATE_ROUTE.DASHBOARD);
      setForm(LOGIN_TEACHER);
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
    <Form onSubmit={handleSubmit} onChange={handleChange}>
      <Label aria-label="insert your email">
        <span>email:</span>
        <input type="text" name="email" value={form.email} />
      </Label>
      <Label aria-label="insert your password">
        <span>password:</span>
        <input type="password" name="password" value={form.password} />
      </Label>
      <InputButtons>
        <input type="submit" value="Login" />
        {children}
      </InputButtons>
      {loading && (
        <LoadingForm>
          <p>loading...</p>
        </LoadingForm>
      )}
    </Form>
  );
};

export default Login;
