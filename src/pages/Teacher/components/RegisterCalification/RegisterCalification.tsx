"use client";

import { getLocalStorage } from "@app/helpers";
import { useEffect, useState } from "react";
import { LIST_COURSE } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { ListCourseType } from "../../models";
import { get_course_list } from "../../services";
import { Container, Title } from "../Profile/styled-components";
import { LabelSheet } from "../RegisterStudents/styled-components";
import { TableDataCourse } from "../TableData/TableData";

export type RegisterCalificationProps = {
  // types...
};

const RegisterCalification = ({}: RegisterCalificationProps) => {
  const [search, setSearch] = useState("");
  const { loading, callEndpoint } = useFetchAndLoad();
  const course = getLocalStorage({ key: "courses" });
  const [{ courses }, setAccount] = useState<ListCourseType>(LIST_COURSE);

  useEffect(() => {
    async function get_list_course() {
      if (!course) {
        const { data } = await callEndpoint(get_course_list());
        if (data) {
          setAccount(data);
        }
      } else {
        setAccount({ courses: course });
      }
    }
    get_list_course();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <Title>list of course</Title>
      <LabelSheet>
        <span>
          Enter the name of the course to which you want to add attendances
        </span>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
        />
      </LabelSheet>
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
