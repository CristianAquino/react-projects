"use client";

import { removeLocalStorage } from "@app/helpers";
import { useEffect, useState } from "react";
import { useFetchAndLoad } from "../../hooks";
import { get_teacher_me } from "../../services";

export type ProfileProps = {
  // types...
};

const Profile = ({}: ProfileProps) => {
  const { callEndpoint } = useFetchAndLoad();
  const [account, setAccount] = useState<any>();

  useEffect(() => {
    async function getMe() {
      const { data } = await callEndpoint(get_teacher_me());
      if (data) {
        setAccount(data);
      }
    }
    getMe();
    return () => {
      setAccount(null);
      removeLocalStorage({ key: "user" });
    };
  }, []);
  return (
    <div>
      <h2>Teacher</h2>
      <p>Names: {account?.user.name}</p>
      <p>First Name: {account?.user.first_name}</p>
      <p>Second Name: {account?.user.second_name}</p>
      <p>Email: {account?.user.email}</p>
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
          {account?.course?.map((course: any) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.level}</td>
              <td>{course.degree}</td>
              <td>{course.section}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <pre>{JSON.stringify(account, null, 2)}</pre>
    </div>
  );
};

export default Profile;
