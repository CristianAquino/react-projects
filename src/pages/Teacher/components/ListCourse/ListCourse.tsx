"use client";

import { getLocalStorage } from "@app/helpers";
import { useEffect, useState } from "react";
import { TableData } from "..";
import { LIST_COURSE } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { ListCourseType } from "../../models";
import { get_course_list } from "../../services";
import { Container, Title } from "../Profile/styled-components";
export type ListCourseProps = {
  // types...
};

const ListCourse = ({}: ListCourseProps) => {
  const { callEndpoint } = useFetchAndLoad();
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

  return (
    <Container>
      <Title>list of courses</Title>
      <TableData datos={courses} type="course" />
    </Container>
  );
};

export default ListCourse;
