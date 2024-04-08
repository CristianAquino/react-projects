"use client";

import { SEO } from "@app/components";
import { useEffect, useState } from "react";
import { useFetchAndLoad } from "../../hooks";
import { get_course_list } from "../../services";
import { useAttendanceStorage, useCourseStorage } from "../../store";
import { Container, Title } from "../Profile/styled-components";
import { SearchInTable } from "../SearchInTable";
import { TableDataCourse } from "../TableData/TableData";

export type RegisterAttendanceProps = {
  // types...
};

const RegisterAttendance = ({}: RegisterAttendanceProps) => {
  const [search, setSearch] = useState("");
  const { loading, callEndpoint } = useFetchAndLoad();
  const courses = useCourseStorage((state) => state.courses);
  const setCourses = useCourseStorage((state) => state.setCourses);
  const setAttendance = useAttendanceStorage((state) => state.setAttendances);

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
    return () => {
      setAttendance([]);
    };
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <SEO
        title={"Dashboard | Teacher - Register Attendance"}
        description={"take attendance from students"}
      />
      <Title>register attendance</Title>
      <SearchInTable
        title={
          "Enter the name of the course to which you want to add attendances"
        }
        search={search}
        onchange={setSearch}
        ariaLabel="insert the name of the course to search"
      />
      <TableDataCourse
        url={"/teacher/dashboard/attendance/search"}
        datos={courses.filter((e: any) => {
          if (search == "") return courses;
          return e.name.toLowerCase().includes(search.toLowerCase());
        })}
      />
    </Container>
  );
};

export default RegisterAttendance;
