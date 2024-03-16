"use client";

import { useEffect, useState } from "react";
import { TableData } from "..";
import { ME_TEACHER } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { ProfileTeacherType } from "../../models";
import { get_teacher_me } from "../../services";
import { Content, DataLabel, Label } from "./styled-components";

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
    <div>
      <h2>Teacher</h2>
      <div>
        <Content>
          <Label>Names</Label>:<DataLabel>{user.name}</DataLabel>
        </Content>
        {/* <p>: </p> */}
        <p>First Name: {user.first_name}</p>
        <p>Second Name: {user.second_name}</p>
        <p>Email: {user.email}</p>
        <h2>Courses</h2>
      </div>
      <TableData datos={course} type="course" />
    </div>
  );
};

export default Profile;
