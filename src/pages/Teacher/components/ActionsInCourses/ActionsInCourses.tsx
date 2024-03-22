"use client";

import { getLocalStorage } from "@app/helpers";
import { useState } from "react";
import { ListCourseType } from "../../models";
import { Container, Title } from "../Profile/styled-components";
import { TableData } from "..";

export type ActionsInCoursesProps = {
  // types...
};

const ActionsInCourses = ({}: ActionsInCoursesProps) => {
  // const { callEndpoint } = useFetchAndLoad();
  const course = getLocalStorage({ key: "courses" });
  const [{ courses }, _] = useState<ListCourseType>({
    courses: course,
  });

  // useEffect(() => {
  //   async function get_list_course() {
  //     if (!course) {
  //       const { data } = await callEndpoint(get_course_list());
  //       if (data) {
  //         setAccount(data);
  //       }
  //     } else {
  //       setAccount({ courses: course });
  //     }
  //   }
  //   get_list_course();
  // }, []);

  return (
    <Container>
      <Title>list of courses</Title>
      {/* <p>
        Select or search for a course for which you want to edit your
        information
      </p>
      <label aria-label="insert the name of the course to search">
        <input type="text" />
      </label> */}
      {/* agrega un boton a la tabla de acciones como editar y borrar */}
      <TableData datos={courses} type="course-update" />
    </Container>
  );
};

export default ActionsInCourses;
