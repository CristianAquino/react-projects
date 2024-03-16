"use client";

import { ListCourseType, MeStudentType } from "../../models";
import { LinkData, Table, Td, Th, Tr } from "./styled-components";

export type TableDataProps<T> = {
  // types...
  datos: T;
  type: "student" | "course";
};

const TableData = ({ datos, type }: TableDataProps<any>) => {
  return (
    <Table>
      {type === "student" ? (
        <TableDataStudent datos={datos} />
      ) : (
        <TableDataCourse datos={datos} />
      )}
    </Table>
  );
};

const TableDataStudent = ({
  datos,
}: Omit<TableDataProps<MeStudentType[]>, "type">) => {
  const head = ["#", "first name", "second name", "names"];
  return (
    <>
      <thead>
        <Tr>
          {head.map((item, index) => (
            <Th key={index}>{item}</Th>
          ))}
        </Tr>
      </thead>
      <tbody>
        {datos.length > 0 ? (
          datos.map((student, index) => (
            <Tr key={student.id}>
              <Td>{index + 1}</Td>
              <Td>
                <LinkData to={`/teacher/dashboard/student/info/${student.id}`}>
                  {student.first_name}
                </LinkData>
              </Td>
              <Td>
                <LinkData to={`/teacher/dashboard/student/info/${student.id}`}>
                  {student.second_name}
                </LinkData>
              </Td>
              <Td>
                <LinkData to={`/teacher/dashboard/student/info/${student.id}`}>
                  {student.name}
                </LinkData>
              </Td>
            </Tr>
          ))
        ) : (
          <p>No courses</p>
        )}
      </tbody>
    </>
  );
};

const TableDataCourse = ({
  datos,
}: Omit<TableDataProps<ListCourseType["courses"]>, "type">) => {
  const head = ["#", "name", "level", "degree", "section"];
  return (
    <>
      <thead>
        <Tr>
          {head.map((item, index) => (
            <Th key={index}>{item}</Th>
          ))}
        </Tr>
      </thead>
      <tbody>
        {datos.length > 0 ? (
          datos.map((course, index) => (
            <Tr key={course.id}>
              <Td>{index + 1}</Td>
              <Td>
                <LinkData to={`/teacher/dashboard/course/info/${course.id}`}>
                  {course.name}
                </LinkData>
              </Td>
              <Td>
                <LinkData to={`/teacher/dashboard/course/info/${course.id}`}>
                  {course.level}
                </LinkData>
              </Td>
              <Td>
                <LinkData to={`/teacher/dashboard/course/info/${course.id}`}>
                  {course.degree}
                </LinkData>
              </Td>
              <Td>
                <LinkData to={`/teacher/dashboard/course/info/${course.id}`}>
                  {course.section}
                </LinkData>
              </Td>
            </Tr>
          ))
        ) : (
          <p>No courses</p>
        )}
      </tbody>
    </>
  );
};

export default TableData;
