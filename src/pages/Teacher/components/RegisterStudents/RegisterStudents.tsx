"use client";

import { SEO } from "@app/components";
import { useEffect, useState } from "react";
import { RegisterStudentsInCourse, SearchInTable } from "..";
import { useFetchAndLoad } from "../../hooks";
import { get_course_list } from "../../services";
import { useCourseStorage } from "../../store";
import { Container, Title } from "../Profile/styled-components";
import { TableDataCourseUpload } from "../TableData/TableData";

export type RegisterStudentsProps = {
  // types...
};

const RegisterStudents = ({}: RegisterStudentsProps) => {
  const [search, setSearch] = useState("");
  const { loading, callEndpoint } = useFetchAndLoad();
  const courses = useCourseStorage((state) => state.courses);
  const setCourses = useCourseStorage((state) => state.setCourses);
  const [selectCourse, setSelectCourse] = useState<any>(null);

  useEffect(() => {
    async function get_list_course() {
      if (courses.length == 0) {
        const { data } = await callEndpoint(get_course_list());
        if (data) {
          setCourses(data.courses);
        }
      }
    }
    get_list_course();
  }, []);

  if (loading) return <div>Loading...</div>;

  useEffect(() => {
    if (selectCourse) setSearch("");
  }, [selectCourse]);

  return (
    <Container>
      <SEO
        title={"Dashboard | Teacher - Add Students To Course"}
        description={"add students to previously created courses"}
      />
      <Title>register students</Title>
      {!selectCourse && (
        <>
          <SearchInTable
            title={
              "Enter the name of the course to which you want to add students"
            }
            search={search}
            onchange={setSearch}
            ariaLabel="insert the name of the course to search"
          />
          <TableDataCourseUpload
            setCourse={setSelectCourse}
            datos={courses.filter((e: any) => {
              if (search == "") return courses;
              return e.name.toLowerCase().includes(search.toLowerCase());
            })}
          />
        </>
      )}
      {selectCourse && (
        <RegisterStudentsInCourse
          course={selectCourse}
          uploadCourse={setSelectCourse}
        />
      )}
    </Container>
  );
};

export default RegisterStudents;
