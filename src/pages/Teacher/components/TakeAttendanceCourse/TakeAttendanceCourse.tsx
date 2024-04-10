"use client";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UPDATE_COURSE } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { CourseType, InitialAttendanceType } from "../../models";
import { get_course_one_id, post_attendance_create } from "../../services";
import { useAttendanceStorage, useCourseStorage } from "../../store";
import { CourseDataTarget } from "../CourseDataTarget";
import { InputButtons } from "../Login/styled-components";
import { Title } from "../Profile/styled-components";
import { TableTakeAttendanceStudent } from "../TableData/TableData";

export type TakeAttendanceCourseProps = {
  // types...
};

const TakeAttendanceCourse = ({}: TakeAttendanceCourseProps) => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const attendances = useAttendanceStorage((state) => state.attendances);
  const setAttendance = useAttendanceStorage((state) => state.setAttendances);
  const getCourseByIdAtt = useCourseStorage((state) => state.getCourseByIdAtt);
  const { id } = useParams();
  const [course, setCourse] = useState<CourseType>(UPDATE_COURSE);
  const navigate = useNavigate();

  useEffect(() => {
    async function getCourseById() {
      if (id && attendances.length == 0) {
        const { data } = await callEndpoint(get_course_one_id({ id }));
        if (data) {
          const dato = data.students.map((e: any) => {
            const { average, califications, ...dato } = e;
            return { ...dato, att: 2 };
          });
          setAttendance(dato);
          setCourse(data.course);
        }
      }
    }
    getCourseById();
    return () => {
      if (id) {
        const c = getCourseByIdAtt(id);
        setCourse(c);
      }
    };
  }, []);

  const handleRemoveCourse = () => {
    navigate("/teacher/dashboard/attendance/search/", { replace: true });
    setAttendance([]);
  };

  async function handleRegisterAttendance() {
    const a = attendances.map((e) => ({ id: e.id, att: e.att }));
    const resp = await callEndpoint(post_attendance_create({ data: a }));
    if (resp.status < 300) {
      navigate("/teacher/dashboard/attendance/search/", { replace: true });
      setAttendance([]);
    }
  }

  function handleAddAttendance(data: InitialAttendanceType[0]) {
    const item = attendances.find((e) => e?.id === data.id);
    if (item) {
      const up = attendances.map((e) => {
        if (e.id === data.id) {
          return { ...e, att: data.att };
        }
        return e;
      });
      setAttendance(up);
    } else {
      setAttendance([...attendances, data]);
    }
  }

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Title>take attendance</Title>
      <CourseDataTarget course={course} handleRemove={handleRemoveCourse} />
      <Title>students</Title>
      <TableTakeAttendanceStudent
        datos={attendances}
        setAttendance={handleAddAttendance}
      />
      <Title>summary</Title>
      <p>
        total de asistencias: {attendances.filter((e) => e.att == 2).length}
      </p>
      <p>total de tardanzas: {attendances.filter((e) => e.att == 1).length}</p>
      <p>total de faltas: {attendances.filter((e) => e.att == 0).length}</p>
      <InputButtons>
        {loading ? (
          <button style={{ backgroundColor: "#0d4dff" }} disabled>
            loading...
          </button>
        ) : (
          <button
            style={{ backgroundColor: "#1567ff" }}
            onClick={handleRegisterAttendance}
          >
            save attendance
          </button>
        )}
      </InputButtons>
    </>
  );
};

export default TakeAttendanceCourse;
