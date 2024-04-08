"use client";

import { SEO } from "@app/components";
import { useState } from "react";
import { useFetchAndLoad, useValidateForm } from "../../hooks";
import { BaseTeacherDataSchema, PutUpdateTeacherType } from "../../models";
import { put_teacher_me } from "../../services";
import { useTeacherStorage } from "../../store";
import { InputButtons, Label, LabelError } from "../Login/styled-components";
import { Container, Title } from "../Profile/styled-components";
import { FormCourse } from "../RegisterCourse/styled-components";

export type UpdateProfileProps = {
  // types...
};

const UpdateProfile = ({}: UpdateProfileProps) => {
  const { id, email, thumbnail, ...data } = useTeacherStorage(
    (state) => state.user
  );
  const setUpdateTeacher = useTeacherStorage((state) => state.setUpdateTeacher);
  const [form, setForm] = useState<PutUpdateTeacherType>(data);
  const { loading, callEndpoint } = useFetchAndLoad();
  const { errors, flag } = useValidateForm({
    schema: BaseTeacherDataSchema,
    data: form,
  });

  async function postData() {
    const resp = await callEndpoint(put_teacher_me({ data: form }));
    if (resp.status < 300) {
      setUpdateTeacher(form);
    } else {
      setUpdateTeacher(data);
    }
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postData();
  };
  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <SEO
        title={"Dashboard | Teacher - Update Profile"}
        description={"teacher information update"}
      />
      <Title>update data teacher</Title>
      <FormCourse onSubmit={handleSubmit} onChange={handleChange}>
        <Label aria-label="add a new name">
          <span>name:</span>
          <input type="text" name="name" value={form.name} autoFocus />
        </Label>
        {errors?.name && (
          <div>
            {errors.name.map((error) => (
              <LabelError key={error}>{error}</LabelError>
            ))}
          </div>
        )}
        <Label aria-label="update your first name">
          <span>first name:</span>
          <input type="text" name="first_name" value={form.first_name} />
        </Label>
        {errors?.first_name && (
          <div>
            {errors.first_name.map((error) => (
              <LabelError key={error}>{error}</LabelError>
            ))}
          </div>
        )}
        <Label aria-label="update your second name">
          <span>second name:</span>
          <input type="text" name="second_name" value={form.second_name} />
        </Label>
        {errors?.second_name && (
          <div>
            {errors.second_name.map((error) => (
              <LabelError key={error}>{error}</LabelError>
            ))}
          </div>
        )}
        <InputButtons>
          {loading ? (
            <button style={{ backgroundColor: "#0d4dff" }} disabled>
              loading...
            </button>
          ) : (
            <input type="submit" value="Update Data" disabled={flag} />
          )}
        </InputButtons>
      </FormCourse>
    </Container>
  );
};

export default UpdateProfile;
