"use client";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { REGISTER_COURSE } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { CreateCourseType, InitialAttendanceType } from "../../models";
import { get_course_one_id, post_attendance_create } from "../../services";
import { Container, Data, Label, Title } from "../Profile/styled-components";
import { PiXCircle } from "react-icons/pi";
import { TableTakeAttendanceStudent } from "../TableData/TableData";

export type TakeAttendanceCourseProps = {
  // types...
};

const TakeAttendanceCourse = ({}: TakeAttendanceCourseProps) => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [attendance, setAttendance] = useState<InitialAttendanceType>([]);
  const [course, setCourse] = useState<CreateCourseType>(REGISTER_COURSE);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getCourseById() {
      if (id) {
        const { data } = await callEndpoint(get_course_one_id({ id }));
        if (data) {
          setAttendance(data.students.map((e: any) => ({ ...e, att: 2 })));
          setCourse(data.course);
        }
      } else {
        return;
      }
    }
    getCourseById();
    return () => {
      setAttendance([]);
    };
  }, []);

  const handleRemoveCourse = () => {
    navigate("/teacher/dashboard/attendance/search/", { replace: true });
  };

  async function handleRegisterAttendance() {
    const a = attendance.map((e) => ({ id: e.id, att: e.att }));
    // await callEndpoint(post_attendance_create({ data: a }));
    console.log(a);
  }

  function handleAddAttendance(data: InitialAttendanceType[0]) {
    const item = attendance.find((e) => e?.id === data.id);
    if (item) {
      const up = attendance.map((e) => {
        if (e.id === data.id) {
          return { ...e, att: data.att };
        }
        return e;
      });
      setAttendance(up);
    } else {
      setAttendance([...attendance, data]);
    }
  }

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <Title>course info</Title>
      <Data>
        <Label>
          <span>course name: </span>
          <span>{course.name}</span>
          <span
            onClick={handleRemoveCourse}
            style={{
              color: "#ea0000",
              marginInlineStart: ".5rem",
              verticalAlign: "-.25rem",
              cursor: "pointer",
            }}
          >
            <PiXCircle title="change course" />
          </span>
        </Label>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Label>
            <span>level: </span>
            <span>{course.level}</span>
          </Label>
          <Label>
            <span>degree: </span>
            <span>{course.degree}</span>
          </Label>
          <Label>
            <span>section: </span>
            <span>{course.section}</span>
          </Label>
        </div>
      </Data>
      <Title>students</Title>
      <TableTakeAttendanceStudent
        datos={attendance}
        setAttendance={handleAddAttendance}
      />
      <Title>summary</Title>
      <p>total de asistencias: {attendance.filter((e) => e.att == 2).length}</p>
      <p>total de tardanzas: {attendance.filter((e) => e.att == 1).length}</p>
      <p>total de faltas: {attendance.filter((e) => e.att == 0).length}</p>
      <button onClick={handleRegisterAttendance}>save attendance</button>
    </Container>
  );
};

export default TakeAttendanceCourse;
