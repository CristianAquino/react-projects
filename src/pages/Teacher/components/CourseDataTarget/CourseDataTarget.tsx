"use client";
import { PiXCircle } from "react-icons/pi";
import { CourseType } from "../../models";
import { Data, Datos } from "./styled-components";

export type CourseDataTargetProps = {
  // types...
  course: CourseType;
  handleRemove: () => void;
};

const CourseDataTarget = ({ course, handleRemove }: CourseDataTargetProps) => {
  return (
    <Datos>
      <Data>
        <span>course name: </span>
        <span>
          {course.name}
          <span onClick={handleRemove}>
            <PiXCircle title="change course" />
          </span>
        </span>
      </Data>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Data>
          <span>level: </span>
          <span>{course.level}</span>
        </Data>
        <Data>
          <span>degree: </span>
          <span>{course.degree}</span>
        </Data>
        <Data>
          <span>section: </span>
          <span>{course.section}</span>
        </Data>
      </div>
    </Datos>
  );
};

export default CourseDataTarget;
