"use client";

import { useEffect } from "react";
import { useFetchAndLoad } from "../../hooks";
import { get_teacher_me } from "../../services";
import { useCourseStorage, useTeacherStorage } from "../../store";
import { TableDataCourse } from "../TableData/TableData";
import {
  Container,
  ContentData,
  Data,
  ImageProfile,
  Label,
  Title,
} from "./styled-components";

export type ProfileProps = {
  // types...
};

const Profile = ({}: ProfileProps) => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const course = useCourseStorage((state) => state.course);
  const user = useTeacherStorage((state) => state.user);
  const setAddCourse = useCourseStorage((state) => state.setAddCourse);
  const setAddTeacher = useTeacherStorage((state) => state.setAddTeacher);

  useEffect(() => {
    async function getMe() {
      if (!user.id) {
        const { data } = await callEndpoint(get_teacher_me());
        if (data) {
          setAddCourse(data.course);
          setAddTeacher(data.user);
        }
      }
    }
    getMe();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <Title>teacher</Title>
      <ContentData>
        <div style={{ inlineSize: "40%" }}>
          <ImageProfile src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png" />
        </div>
        <Data style={{ inlineSize: "60%" }}>
          <Label>
            <span>names: </span>
            <span>{user.name}</span>
          </Label>
          <Label>
            <span>first name: </span>
            <span>{user.first_name}</span>
          </Label>
          <Label>
            <span>second name: </span>
            <span>{user.second_name}</span>
          </Label>
          <Label>
            <span>email: </span>
            <span>{user.email}</span>
          </Label>
        </Data>
      </ContentData>
      <Title>courses</Title>
      <TableDataCourse datos={course} url={"/teacher/dashboard/course/info"} />
    </Container>
  );
};

export default Profile;
