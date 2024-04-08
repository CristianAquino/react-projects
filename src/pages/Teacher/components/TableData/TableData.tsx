"use client";

import {
  CourseType,
  CreateStudentType,
  GetListCourseType,
  InitialAttendanceType,
  InitialCalificationType,
  MeStudentType,
} from "../../models";
import {
  LabelInput,
  LabelTD,
  LinkData,
  Table,
  Td,
  TdInput,
  Th,
  Tr,
} from "./styled-components";

export type TableDataProps = {
  // types...
  children: React.ReactNode;
};

export type TableDataStudentProps = {
  // types...
  datos: CreateStudentType;
};

// container table
const TableData = ({ children }: TableDataProps) => {
  return <Table>{children}</Table>;
};

export const TableDataStudent = ({ datos }: TableDataStudentProps) => {
  const head = ["#", "first name", "second name", "names"];
  return (
    <TableData>
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
            <Tr key={index}>
              <Td>{index + 1}</Td>
              <Td>{student.first_name}</Td>
              <Td>{student.second_name}</Td>
              <Td>{student.name}</Td>
            </Tr>
          ))
        ) : (
          <p>No courses</p>
        )}
      </tbody>
    </TableData>
  );
};

export type TableDataStudentInfoProps = {
  // types...
  datos: MeStudentType[];
  url: string;
};
export const TableDataStudentInfo = ({
  datos,
  url,
}: TableDataStudentInfoProps) => {
  const head = ["#", "first name", "second name", "names"];
  return (
    <TableData>
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
                <LinkData to={`${url}/${student.id}`}>
                  {student.first_name}
                </LinkData>
              </Td>
              <Td>
                <LinkData to={`${url}/${student.id}`}>
                  {student.second_name}
                </LinkData>
              </Td>
              <Td>
                <LinkData to={`${url}/${student.id}`}>{student.name}</LinkData>
              </Td>
            </Tr>
          ))
        ) : (
          <p>No courses</p>
        )}
      </tbody>
    </TableData>
  );
};

export type TableDataCourseProps = {
  datos: GetListCourseType;
  url: string;
};
export const TableDataCourse = ({ datos, url }: TableDataCourseProps) => {
  const head = ["#", "name", "level", "degree", "section"];
  return (
    <TableData>
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
                <LinkData to={`${url}/${course.id}`}>{course.name}</LinkData>
              </Td>
              <Td>
                <LinkData to={`${url}/${course.id}`}>{course.level}</LinkData>
              </Td>
              <Td>
                <LinkData to={`${url}/${course.id}`}>{course.degree}</LinkData>
              </Td>
              <Td>
                <LinkData to={`${url}/${course.id}`}>{course.section}</LinkData>
              </Td>
            </Tr>
          ))
        ) : (
          <p>No courses</p>
        )}
      </tbody>
    </TableData>
  );
};

export type TableDataCourseUploadProps = {
  datos: GetListCourseType;
  setCourse: (dato: CourseType) => void;
};
export const TableDataCourseUpload = ({
  datos,
  setCourse,
}: TableDataCourseUploadProps) => {
  const head = ["#", "name", "level", "degree", "section"];
  return (
    <TableData>
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
              <Td onClick={() => setCourse(course)}>{course.name}</Td>
              <Td onClick={() => setCourse(course)}>{course.level}</Td>
              <Td onClick={() => setCourse(course)}>{course.degree}</Td>
              <Td onClick={() => setCourse(course)}>{course.section}</Td>
            </Tr>
          ))
        ) : (
          <p>No courses</p>
        )}
      </tbody>
    </TableData>
  );
};

export type TableDataEditCourseProps = {
  datos: GetListCourseType;
  url: string;
  handleUpdateOpen: (data: CourseType) => void;
  handleDeleteOpen: (data: CourseType) => void;
};
export const TableDataEditCourse = ({
  datos,
  url,
  handleUpdateOpen,
  handleDeleteOpen,
}: TableDataEditCourseProps) => {
  const head = ["#", "name", "level", "degree", "section", "actions"];
  return (
    <TableData>
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
                <LinkData to={`${url}/${course.id}`}>{course.name}</LinkData>
              </Td>
              <Td>
                <LinkData to={`${url}/${course.id}`}>{course.level}</LinkData>
              </Td>
              <Td>
                <LinkData to={`${url}/${course.id}`}>{course.degree}</LinkData>
              </Td>
              <Td>
                <LinkData to={`${url}/${course.id}`}>{course.section}</LinkData>
              </Td>
              <Td
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#0d4dff",
                    border: "none",
                    padding: ".25rem .5rem",
                    borderRadius: ".5rem",
                    textTransform: "capitalize",
                    cursor: "pointer",
                  }}
                  onClick={() => handleUpdateOpen(course)}
                >
                  update
                </button>
                <button
                  style={{
                    backgroundColor: "#ea0000",
                    border: "none",
                    padding: ".25rem .5rem",
                    borderRadius: ".5rem",
                    textTransform: "capitalize",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDeleteOpen(course)}
                >
                  delete
                </button>
              </Td>
            </Tr>
          ))
        ) : (
          <p>No courses</p>
        )}
      </tbody>
    </TableData>
  );
};

export type TableTakeAttendanceStudentType = {
  datos: InitialAttendanceType;
  setAttendance: (st: any) => void;
};
export const TableTakeAttendanceStudent = ({
  datos,
  setAttendance,
}: TableTakeAttendanceStudentType) => {
  const head = [
    "#",
    "first name",
    "second name",
    "name",
    "asistio",
    "falto",
    "tarde",
  ];
  return (
    <TableData>
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
              <Td>{student.first_name}</Td>
              <Td>{student.second_name}</Td>
              <Td>{student.name}</Td>
              <LabelTD val={2}>
                <label>
                  <input
                    type="radio"
                    name={`att${student.id}`}
                    checked={student.att === 2}
                    onChange={() => setAttendance({ ...student, att: 2 })}
                  />
                </label>
              </LabelTD>
              <LabelTD val={0}>
                <label>
                  <input
                    type="radio"
                    name={`att${student.id}`}
                    checked={student.att === 0}
                    onChange={() => setAttendance({ ...student, att: 0 })}
                  />
                </label>
              </LabelTD>
              <LabelTD val={1}>
                <label>
                  <input
                    type="radio"
                    name={`att${student.id}`}
                    checked={student.att === 1}
                    onChange={() => setAttendance({ ...student, att: 1 })}
                  />
                </label>
              </LabelTD>
            </Tr>
          ))
        ) : (
          <p>No courses</p>
        )}
      </tbody>
    </TableData>
  );
};

export type TableSaveCalificationStudentType = {
  datos: InitialCalificationType;
  setAttendance: (st: any) => void;
};
export const TableSaveCalificationStudent = ({
  datos,
  setAttendance,
}: TableSaveCalificationStudentType) => {
  const head = ["#", "first name", "second name", "name", "PT", "PP", "PE"];
  return (
    <TableData>
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
              <Td>{student.first_name}</Td>
              <Td>{student.second_name}</Td>
              <Td>{student.name}</Td>
              <TdInput
                style={{
                  backgroundColor: `${
                    /^([0-9]|0[0-9]|1[0-9]|20|"")$/gi.test(student.pt + "")
                      ? "transparent"
                      : "red"
                  }`,
                }}
              >
                <LabelInput>
                  <input
                    type="text"
                    name={`pt${student.id}`}
                    value={student.pt}
                    onChange={(e) =>
                      setAttendance({ ...student, pt: e.target.value })
                    }
                  />
                </LabelInput>
              </TdInput>
              <TdInput
                style={{
                  backgroundColor: `${
                    /^([0-9]|0[0-9]|1[0-9]|20|"")$/gi.test(student.pp + "")
                      ? "transparent"
                      : "red"
                  }`,
                }}
              >
                <LabelInput>
                  <input
                    type="text"
                    name={`pp${student.id}`}
                    value={student.pp}
                    onChange={(e) =>
                      setAttendance({ ...student, pp: e.target.value })
                    }
                  />
                </LabelInput>
              </TdInput>
              <TdInput
                style={{
                  backgroundColor: `${
                    /^([0-9]|0[0-9]|1[0-9]|20|"")$/gi.test(student.pe + "")
                      ? "transparent"
                      : "red"
                  }`,
                }}
              >
                <LabelInput>
                  <input
                    type="text"
                    name={`pe${student.id}`}
                    value={student.pe}
                    onChange={(e) =>
                      setAttendance({ ...student, pe: e.target.value })
                    }
                  />
                </LabelInput>
              </TdInput>
            </Tr>
          ))
        ) : (
          <p>No courses</p>
        )}
      </tbody>
    </TableData>
  );
};

export default TableData;
