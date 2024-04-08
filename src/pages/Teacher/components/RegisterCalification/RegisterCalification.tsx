"use client";

import { SEO } from "@app/components";
import { useEffect, useState } from "react";
import { useFetchAndLoad } from "../../hooks";
import { get_course_list } from "../../services";
import { useCalificationStore, useCourseStorage } from "../../store";
import { Container, Title } from "../Profile/styled-components";
import { SearchInTable } from "../SearchInTable";
import { TableDataCourse } from "../TableData/TableData";

export type RegisterCalificationProps = {
  // types...
};

const RegisterCalification = ({}: RegisterCalificationProps) => {
  const [search, setSearch] = useState("");
  const { loading, callEndpoint } = useFetchAndLoad();
  const courses = useCourseStorage((state) => state.courses);
  const setCourses = useCourseStorage((state) => state.setCourses);
  const setCalifications = useCalificationStore(
    (state) => state.setCalifications
  );

  useEffect(() => {
    async function get_list_course() {
      if (courses.length == 0) {
        const { data } = await callEndpoint(get_course_list());
        if (data) {
          setCourses(data);
        }
      }
    }
    get_list_course();
    return () => {
      setCalifications([]);
    };
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <SEO
        title={"Dashboard | Teacher - Register Califications"}
        description={"record of the grades of students belonging to a course"}
      />
      <Title>register califications</Title>
      <SearchInTable
        title={
          "Enter the name of the course to which you want to add attendances"
        }
        search={search}
        onchange={setSearch}
        ariaLabel="insert the name of the course to search"
      />
      <TableDataCourse
        url={"/teacher/dashboard/calification/search"}
        datos={courses.filter((e: any) => {
          if (search == "") return courses;
          return e.name.toLowerCase().includes(search.toLowerCase());
        })}
      />
    </Container>
  );
};

export default RegisterCalification;
