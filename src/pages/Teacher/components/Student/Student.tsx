"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ME_STUDENT } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { MeStudentType } from "../../models";
import { get_student_one_id } from "../../services";

export type StudentProps = {
  // types...
};

const Student = ({}: StudentProps) => {
  const [student, setStudent] = useState<MeStudentType>(ME_STUDENT);
  const { callEndpoint } = useFetchAndLoad();
  const { id } = useParams();

  useEffect(() => {
    async function get_one_student() {
      if (id) {
        const { data } = await callEndpoint(get_student_one_id({ id }));
        if (data) {
          setStudent(data);
        }
      }
    }
    get_one_student();
    return () => {
      setStudent(ME_STUDENT);
    };
  }, []);
  return (
    <div>
      <h2>Profile Student</h2>
      <p>Name: {student.name}</p>
      <p>First Name: {student.first_name}</p>
      <p>Second Name: {student.second_name}</p>
      <p>Average: {student.average}</p>
      <p>Calification: {student.calification}</p>
    </div>
  );
};

export default Student;
