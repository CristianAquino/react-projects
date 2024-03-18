"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ME_STUDENT } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { MeStudentType } from "../../models";
import { get_student_one_id } from "../../services";
import { Container, ImageProfile, Label, Title } from "..";

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
    <Container>
      <Title>Profile Student</Title>
      <div style={{ inlineSize: "100%", display: "flex", gap: "1rem" }}>
        <div style={{ inlineSize: "40%" }}>
          <ImageProfile src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png" />
        </div>
        <div style={{ inlineSize: "60%" }}>
          <Label>
            <span>Name </span>: <span>{student.name}</span>
          </Label>
          <Label>
            <span>First Name </span>: <span>{student.first_name}</span>
          </Label>
          <Label>
            <span>First Name </span>: <span>{student.second_name}</span>
          </Label>
          <Label>
            <span>Average </span>: <span>{student.average}</span>
          </Label>
          <Label>
            <span>Calification </span>:{" "}
            <span>
              {student.calification ? student.calification : "no register"}
            </span>
          </Label>
        </div>
      </div>
    </Container>
  );
};

export default Student;
