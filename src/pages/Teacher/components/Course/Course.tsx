"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Label, TableData, Title } from "..";
import { ME_COURSE } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { MeCourseType } from "../../models/course.model";
import { get_course_one_id } from "../../services";

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
      <Title>Course Info</Title>
      <div style={{ inlineSize: "60%" }}>
        <Label>
          <span>Course Name </span>: <span>{course.name}</span>
        </Label>
        <Label>
          <span>Level </span>: <span>{course.level}</span>
        </Label>
        <Label>
          <span>Degree </span>: <span>{course.degree}</span>
        </Label>
        <Label>
          <span>Section </span>: <span>{course.section}</span>
        </Label>
      </div>
      <Title>Students Data</Title>
      <TableData datos={students} type="student" />
    </Container>
  );
};

export default Course;
