"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TableData } from "..";
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
    <div>
      <h2>Course Info</h2>
      <p>Course Name: {course.name}</p>
      <p>Level: {course.level}</p>
      <p>Degree: {course.degree}</p>
      <p>Section: {course.section}</p>
      <h2>Students Data</h2>
      <TableData datos={students} type="student" />
    </div>
  );
};

export default Course;
