"use client";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UPDATE_COURSE } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { CourseType } from "../../models";
import { get_course_one_id, post_calification_create } from "../../services";
import { useCalificationStore, useCourseStorage } from "../../store";
import { CourseDataTarget } from "../CourseDataTarget";
import { InputButtons } from "../Login/styled-components";
import { Container, Title } from "../Profile/styled-components";
import { TableSaveCalificationStudent } from "../TableData/TableData";

export type SaveCalificationCourseProps = {
  // types...
};

const SaveCalificationCourse = ({}: SaveCalificationCourseProps) => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const califications = useCalificationStore((state) => state.califications);
  const setCalifications = useCalificationStore(
    (state) => state.setCalifications
  );
  const getCourseByIdAtt = useCourseStorage((state) => state.getCourseByIdAtt);
  const [course, setCourse] = useState<CourseType>(UPDATE_COURSE);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getCourseById() {
      if (id && califications.length == 0) {
        const { data } = await callEndpoint(get_course_one_id({ id }));
        if (data) {
          const dato = data.students.map((e: any) => {
            const { average, califications, ...dato } = e;
            return dato;
          });
          setCalifications(dato);
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
    navigate("/teacher/dashboard/calification/search/", { replace: true });
    setCalifications([]);
  };

  async function handleRegisterCalification() {
    const a = califications.map((e) => {
      const califications = { pt: 0, pp: 0, pe: 0 };
      if (e.pt) califications["pt"] = e.pt;
      if (e.pp) califications["pp"] = e.pp;
      if (e.pe) califications["pe"] = e.pe;
      return { id: e.id, califications };
    });
    const resp = await callEndpoint(post_calification_create({ data: a }));
    if (resp.status < 300) {
      navigate("/teacher/dashboard/calification/search/", { replace: true });
      setCalifications([]);
    }
  }

  function handleAddCalification(data: any) {
    const item = califications.find((e) => e?.id === data.id);
    if (item) {
      const up = califications.map((e) => {
        if (e.id === data.id) {
          return { ...e, pt: data.pt, pp: data.pp, pe: data.pe };
        }
        return e;
      });
      setCalifications(up);
    } else {
      setCalifications([...califications, data]);
    }
  }

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <Title>register califications</Title>
      <CourseDataTarget course={course} handleRemove={handleRemoveCourse} />
      <Title>students</Title>
      <TableSaveCalificationStudent
        datos={califications}
        setAttendance={handleAddCalification}
      />
      <InputButtons>
        {loading ? (
          <button style={{ backgroundColor: "#0d4dff" }} disabled>
            loading...
          </button>
        ) : (
          <button
            style={{ backgroundColor: "#1567ff" }}
            onClick={handleRegisterCalification}
          >
            save califications
          </button>
        )}
      </InputButtons>
    </Container>
  );
};

export default SaveCalificationCourse;
