"use client";

import { useEffect, useState } from "react";
import { ME_TEACHER } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { ProfileTeacherType } from "../../models";
import { get_teacher_me } from "../../services";

export type ProfileProps = {
  // types...
};

const Profile = ({}: ProfileProps) => {
  const { callEndpoint } = useFetchAndLoad();
  const [{ user, course }, setAccount] =
    useState<ProfileTeacherType>(ME_TEACHER);

  useEffect(() => {
    async function getMe() {
      const { data } = await callEndpoint(get_teacher_me());
      if (data) {
        setAccount(data);
      }
    }
    getMe();
  }, []);

  return (
    <div>
      <h2>Teacher</h2>
      <p>Names: {user.name}</p>
      <p>First Name: {user.first_name}</p>
      <p>Second Name: {user.second_name}</p>
      <p>Email: {user.email}</p>
      <h2>Courses</h2>
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
          {course.length > 0 ? (
            course.map((course) => (
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

export default Profile;
