"use client";

import { getLocalStorage } from "@app/helpers";
import { useRef, useState } from "react";
import { useFetchAndLoad, useValidateForm } from "../../hooks";
import { BaseTeacherDataSchema, PutTeacherType } from "../../models";
import { put_teacher_me } from "../../services";
import { Label } from "../Login/styled-components";
import { Container, Title } from "../Profile/styled-components";
import {
  FormCourse,
  InputButtonsCourse,
  LabelErrorCourse,
} from "../RegisterCourse/styled-components";

export type UpdateProfileProps = {
  // types...
};

const UpdateProfile = ({}: UpdateProfileProps) => {
  const user = getLocalStorage({ key: "user" });
  const UpRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<PutTeacherType>(user);
  const { callEndpoint } = useFetchAndLoad();
  const { errors, flag } = useValidateForm({
    schema: BaseTeacherDataSchema,
    data: form,
  });

  async function postData() {
    await callEndpoint(put_teacher_me({ data: form }));
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postData();
  };
  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Title>update data teacher</Title>
      <FormCourse onSubmit={handleSubmit} onChange={handleChange}>
        <Label aria-label="add a new name">
          <span>name:</span>
          <input type="text" name="name" value={form.name} autoFocus />
        </Label>
        <div>
          {errors?.name &&
            errors.name.map((error) => (
              <LabelErrorCourse key={error}>{error}</LabelErrorCourse>
            ))}
        </div>
        <Label aria-label="update your first name">
          <span>first name:</span>
          <input type="text" name="first_name" value={form.first_name} />
        </Label>
        <div>
          {errors?.first_name &&
            errors.first_name.map((error) => (
              <LabelErrorCourse key={error}>{error}</LabelErrorCourse>
            ))}
        </div>
        <Label aria-label="update your second name">
          <span>second name:</span>
          <input type="text" name="second_name" value={form.second_name} />
        </Label>
        <div>
          {errors?.second_name &&
            errors.second_name.map((error) => (
              <LabelErrorCourse key={error}>{error}</LabelErrorCourse>
            ))}
        </div>
        <Label
          aria-label="update your profile picture"
          onClick={() => UpRef.current?.click()}
        >
          <span>image profile:</span>
          <span>select file</span>
        </Label>
        <input ref={UpRef} type="file" name="file" hidden />
        <InputButtonsCourse>
          <input type="submit" value="Register" disabled={flag} />
        </InputButtonsCourse>
      </FormCourse>
    </Container>
  );
};

export default UpdateProfile;
