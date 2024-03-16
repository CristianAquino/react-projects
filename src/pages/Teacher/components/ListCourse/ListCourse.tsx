"use client";

import { useEffect, useState } from "react";
import { LIST_COURSE } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { ListCourseType } from "../../models";
import { get_course_list } from "../../services";
import { TableData } from "..";

export type ListCourseProps = {
  // types...
};

const ListCourse = ({}: ListCourseProps) => {
  const { callEndpoint } = useFetchAndLoad();
  const [{ courses }, setAccount] = useState<ListCourseType>(LIST_COURSE);

  useEffect(() => {
    async function get_list_course() {
      const { data } = await callEndpoint(get_course_list());
      if (data) {
        setAccount(data);
      }
    }
    get_list_course();
  }, []);

  return (
    <div>
      <h2>List of Courses</h2>
      <TableData datos={courses} type="course" />
    </div>
  );
};

export default ListCourse;
