"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TableData } from "..";
import { ONE_COURSE } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { OneCourseType } from "../../models/course.model";
import { get_course_one_id } from "../../services";
import { Container, Data, Label, Title } from "../Profile/styled-components";

export type InfoCourseProps = {
  // types...
};

const InfoCourse = ({}: InfoCourseProps) => {
  const [{ course, students }, setCourse] = useState<OneCourseType>(ONE_COURSE);
  const { loading, callEndpoint } = useFetchAndLoad();
  const { id } = useParams();

  useEffect(() => {
    async function getCourseData() {
      if (id) {
        const { data } = await callEndpoint(get_course_one_id({ id }));
        if (data) {
          setCourse(data);
        }
      } else {
        return;
      }
    }
    getCourseData();
    return () => {
      setCourse(ONE_COURSE);
    };
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <Title>course info</Title>
      <Data>
        <Label>
          <span>course name: </span>
          <span>{course.name}</span>
        </Label>
        <Label>
          <span>level: </span>
          <span>{course.level}</span>
        </Label>
        <Label>
          <span>degree: </span>
          <span>{course.degree}</span>
        </Label>
        <Label>
          <span>section: </span>
          <span>{course.section}</span>
        </Label>
      </Data>
      <Title>Students Data</Title>
      <TableData datos={students} type="student" />
    </Container>
  );
};

export default InfoCourse;
