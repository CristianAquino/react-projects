"use client";

import { SEO } from "@app/components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ONE_COURSE } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { GetOneCourseType } from "../../models/course.model";
import { get_course_one_id } from "../../services";
import { Data, Label, Title } from "../Profile/styled-components";
import { TableDataStudentInfo } from "../TableData/TableData";

export type InfoCourseProps = {
  // types...
};

const InfoCourse = ({}: InfoCourseProps) => {
  const [{ course, students }, setCourse] =
    useState<GetOneCourseType>(ONE_COURSE);
  const { loading, callEndpoint } = useFetchAndLoad();
  const { id } = useParams();

  useEffect(() => {
    async function getCourseData() {
      if (id) {
        const { data } = await callEndpoint(get_course_one_id({ id }));
        if (data) {
          setCourse(data);
        }
      }
    }
    getCourseData();
    return () => {
      setCourse(ONE_COURSE);
    };
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <SEO
        title={`Dashboard | Teacher - ${course.name} Information`}
        description={`information about ${course.name}`}
      />
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
      <TableDataStudentInfo
        datos={students}
        url={"/teacher/dashboard/student/info"}
      />
    </>
  );
};

export default InfoCourse;
