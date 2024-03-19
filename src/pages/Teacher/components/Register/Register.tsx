"use client";
import { useState } from "react";
import { REGISTER_TEACHER } from "../../helpers";
import { useFetchAndLoad, useValidateForm } from "../../hooks";
import { CreateTeacherSchema, CreateTeacherType } from "../../models";
import { post_register } from "../../services";
import {
  Form,
  InputButtons,
  Label,
  LabelError,
  LoadingForm,
} from "../Login/styled-components";

export type RegisterProps = {
  // types...
  children: React.ReactNode;
};

const Register = ({ children }: RegisterProps) => {
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
    <Form onSubmit={handleSubmit} onChange={handleChange}>
      <Label aria-label="insert your name">
        <span>Name:</span>
        <input type="text" name="name" value={form.name} autoFocus />
      </Label>
      <div>
        {errors?.name &&
          errors.name.map((error) => (
            <LabelError key={error}>{error}</LabelError>
          ))}
      </div>
      <Label aria-label="insert your first name">
        <span>first name:</span>
        <input type="text" name="first_name" value={form.first_name} />
      </Label>
      <div>
        {errors?.first_name &&
          errors.first_name.map((error) => (
            <LabelError key={error}>{error}</LabelError>
          ))}
      </div>
      <Label aria-label="insert your second name">
        <span>second name:</span>
        <input type="text" name="second_name" value={form.second_name} />
      </Label>
      <div>
        {errors?.second_name &&
          errors.second_name.map((error) => (
            <LabelError key={error}>{error}</LabelError>
          ))}
      </div>
      <Label aria-label="insert your email">
        <span>email:</span>
        <input type="email" name="email" value={form.email} />
      </Label>
      <div>
        {errors?.email &&
          errors.email.map((error) => (
            <LabelError key={error}>{error}</LabelError>
          ))}
      </div>
      <Label aria-label="insert your password">
        <span>password:</span>
        <input type="password" name="password" value={form.password} />
      </Label>
      <div>
        {errors?.password &&
          errors.password.map((error) => (
            <LabelError key={error}>{error}</LabelError>
          ))}
      </div>
      <InputButtons>
        <input type="submit" value="Register" disabled={flag} />
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

export default Register;
