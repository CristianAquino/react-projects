"use client";

import { useEffect, useState } from "react";
import { LIST_COURSE } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { ListCourseType } from "../../models";
import { get_course_list } from "../../services";

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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Level</th>
            <th>Degree</th>
            <th>Section</th>
          </tr>
        </thead>
        <tbody>
          {courses.length > 0 ? (
            courses.map((course: any) => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.level}</td>
                <td>{course.degree}</td>
                <td>{course.section}</td>
              </tr>
            ))
          ) : (
            <p>No courses</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListCourse;
