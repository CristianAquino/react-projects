"use client";

import { useEffect, useState } from "react";
import { ME_COURSE } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { MeCourseType } from "../../models/course.model";
import { get_course_one_id } from "../../services";

export type CourseProps = {
  // types...
};

const Course = ({}: CourseProps) => {
  const [{ course, students }, setCourse] = useState<MeCourseType>(ME_COURSE);
  const { callEndpoint } = useFetchAndLoad();
  // recordar que aqui va el id desde la ruta

  useEffect(() => {
    async function getCourseData() {
      const { data } = await callEndpoint(
        get_course_one_id({ id: "ab1cd9fa-8dda-4aa8-a9dd-d7904bce95b3" })
      );
      if (data) {
        setCourse(data);
      }
    }
    getCourseData();
  }, []);

  return (
    <div>
      <h2>Profile Course</h2>
      <h2>Course</h2>
      <p>Course Name: {course.name}</p>
      <p>Level: {course.level}</p>
      <p>Degree: {course.degree}</p>
      <p>Section: {course.section}</p>
      <h2>Courses Data</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Second Name</th>
            <th>Names</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.first_name}</td>
                <td>{student.second_name}</td>
                <td>{student.name}</td>
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

export default Course;
