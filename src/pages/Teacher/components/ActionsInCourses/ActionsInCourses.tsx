"use client";

import { useEffect, useState } from "react";
import { SearchInTable } from "..";
import { useFetchAndLoad } from "../../hooks";
import { get_course_list } from "../../services";
import { useCourseStorage } from "../../store";
import { Container, Title } from "../Profile/styled-components";
import { TableDataCourseUpdate } from "../TableData/TableData";

export type ActionsInCoursesProps = {
  // types...
};

const ActionsInCourses = ({}: ActionsInCoursesProps) => {
  const { callEndpoint } = useFetchAndLoad();
  const [search, setSearch] = useState("");
  const courses = useCourseStorage((state) => state.courses);
  const setCourses = useCourseStorage((state) => state.setCourses);

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

  return (
    <Container>
      <Title>list of courses</Title>
      <SearchInTable
        title={
          "Select or search for a course for which you want to edit your information"
        }
        search={search}
        onchange={setSearch}
        ariaLabel="insert the name of the course to search"
      />
      <TableDataCourseUpdate
        url={"/teacher/dashboard/course/info"}
        datos={courses.filter((e: any) => {
          if (search == "") return courses;
          return e.name.toLowerCase().includes(search.toLowerCase());
        })}
      />
    </Container>
  );
};

export default ActionsInCourses;
