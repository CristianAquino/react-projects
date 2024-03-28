"use client";

import { getLocalStorage } from "@app/helpers";
import { useEffect, useState } from "react";
import { useFetchAndLoad } from "../../hooks";
import { ListCourseType } from "../../models";
import { get_course_list } from "../../services";
import { Container, Title } from "../Profile/styled-components";
import { LabelSheet } from "../RegisterStudents/styled-components";
import { TableDataCourseUpdate } from "../TableData/TableData";

export type ActionsInCoursesProps = {
  // types...
};

const ActionsInCourses = ({}: ActionsInCoursesProps) => {
  const { callEndpoint } = useFetchAndLoad();
  const [search, setSearch] = useState("");
  const course = getLocalStorage({ key: "courses" });
  const [{ courses }, setAccount] = useState<ListCourseType>({
    courses: course,
  });

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
      <LabelSheet>
        <span>
          Select or search for a course for which you want to edit your
          information
        </span>
        <input
          type="text"
          value={search}
          aria-label="insert the name of the course to search"
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
        />
      </LabelSheet>
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
