"use client";

import { useEffect, useState } from "react";
import { TableData } from "..";
import { ME_TEACHER } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { ProfileTeacherType } from "../../models";
import { get_teacher_me } from "../../services";
import { Container, ImageProfile, Label, Title } from "./styled-components";

export type ProfileProps = {
  // types...
};

const Profile = ({}: ProfileProps) => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [{ user, course }, setAccount] =
    useState<ProfileTeacherType>(ME_TEACHER);

  useEffect(() => {
    async function getMe() {
      const { data } = await callEndpoint(get_teacher_me());
      if (data) {
        setAccount(data);
      }
    }
    getMe();
    return () => {
      setAccount(ME_TEACHER);
    };
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <Title>Teacher</Title>
      <div style={{ inlineSize: "100%", display: "flex", gap: "1rem" }}>
        <div style={{ inlineSize: "40%" }}>
          <ImageProfile src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png" />
        </div>
        <div style={{ inlineSize: "60%" }}>
          <Label>
            <span>names </span>: <span>{user.name}</span>
          </Label>
          <Label>
            <span>first name </span>: <span>{user.first_name}</span>
          </Label>
          <Label>
            <span>last name </span>: <span>{user.second_name}</span>
          </Label>
          <Label>
            <span>email </span>: <span>{user.email}</span>
          </Label>
        </div>
      </div>
      <Title>Courses</Title>
      <TableData datos={course} type="course" />
    </Container>
  );
};

export default Profile;
