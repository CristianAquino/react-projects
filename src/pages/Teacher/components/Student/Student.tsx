"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ME_STUDENT } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { MeStudentType } from "../../models";
import { get_student_one_id } from "../../services";
import {
  Container,
  ContentData,
  ImageProfile,
  Label,
  Title,
} from "../Profile/styled-components";

export type StudentProps = {
  // types...
};

const Student = ({}: StudentProps) => {
  const [student, setStudent] = useState<MeStudentType>(ME_STUDENT);
  const { callEndpoint, loading } = useFetchAndLoad();
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

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <Title>profile student</Title>
      <div style={{ inlineSize: "100%", display: "flex", gap: "1rem" }}>
        <div style={{ inlineSize: "40%" }}>
          <ImageProfile src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png" />
        </div>
        <ContentData style={{ inlineSize: "60%" }}>
          <Label>
            <span>name: </span>
            <span>{student.name}</span>
          </Label>
          <Label>
            <span>first name: </span>
            <span>{student.first_name}</span>
          </Label>
          <Label>
            <span>second name: </span>
            <span>{student.second_name}</span>
          </Label>
          <Label>
            <span>average: </span>
            <span>{student.average}</span>
          </Label>
          <Label>
            <span>calification: </span>
            <span>
              {student.calification ? student.calification : "no register"}
            </span>
          </Label>
        </ContentData>
      </div>
    </Container>
  );
};

export default Student;
