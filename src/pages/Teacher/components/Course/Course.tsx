"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TableData } from "..";
import { ME_COURSE } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { MeCourseType } from "../../models/course.model";
import { get_course_one_id } from "../../services";
import {
  Container,
  ContentData,
  Label,
  Title,
} from "../Profile/styled-components";

export type CourseProps = {
  // types...
};

const Course = ({}: CourseProps) => {
  const [{ course, students }, setCourse] = useState<MeCourseType>(ME_COURSE);
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
      setCourse(ME_COURSE);
    };
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <Title>course info</Title>
      <ContentData>
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
      </ContentData>
      <Title>Students Data</Title>
      <TableData datos={students} type="student" />
    </Container>
  );
};

export default Course;
