"use client";

import { ChangeEvent, useId, useState } from "react";
import { read, utils } from "xlsx";
import { BASE_CHANGE_UPLOAD, sheetValidate } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { CourseType, CreateStudentType } from "../../models";
import { post_student_create } from "../../services";
import { CourseDataTarget } from "../CourseDataTarget";
import { LabelError } from "../Login/styled-components";
import { Label } from "../SearchInTable/styled-components";
import { TableDataStudent } from "../TableData/TableData";
import { ButtonAddStudents, RadioInput } from "./styled-components";
import { Title } from "../Profile/styled-components";

export type RegisterStudentsInCourseProps = {
  // types...
  course: CourseType;
  uploadCourse: (up: any) => void;
};

const RegisterStudentsInCourse = ({
  course,
  uploadCourse,
}: RegisterStudentsInCourseProps) => {
  // for upload sheet
  const [validateSheet, setValidateSheet] = useState(true);
  const [sheetData, setSheetData] = useState<CreateStudentType>([]);
  const [sheetError, setSheetError] = useState<string | null>(null);
  // validate head in table
  const tableHeader = ["first_name", "second_name", "name"];
  //
  const urlSheetID = useId();
  const { callEndpoint } = useFetchAndLoad();
  const [methodUplaod, setMethodUpload] =
    useState<typeof BASE_CHANGE_UPLOAD>(BASE_CHANGE_UPLOAD);

  async function add_student_to_corse() {
    await callEndpoint(
      post_student_create({
        data: sheetData,
        id: course.id,
      })
    );
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0];
    if (file) {
      let sheetFlag = sheetValidate(file);
      if (sheetFlag) {
        setValidateSheet(sheetFlag);
        let reader = new FileReader();
        reader.onload = (e) => {
          const workbook = read(e.target?.result, { type: "buffer" });
          const worksheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[worksheetName];
          const data: CreateStudentType = utils.sheet_to_json(worksheet);
          const arr = Object.keys(data[0]).map((key) => key);
          if (tableHeader.every((value) => arr.includes(value))) {
            setSheetData(data);
            setSheetError(null);
          } else {
            setSheetError(
              "The data headers are not as indicated, it is recommended to download the template"
            );
            setSheetData([]);
          }
        };
        reader.readAsArrayBuffer(file);
        return;
      }
      setValidateSheet(sheetFlag);
    }
    return;
  }

  function handleResetCourse() {
    setSheetData([]);
    setMethodUpload(BASE_CHANGE_UPLOAD);
    uploadCourse(null);
  }

  return (
    <>
      <>
        <CourseDataTarget course={course} handleRemove={handleResetCourse} />
        <Title>upload data</Title>
        <RadioInput>
          <input
            type="radio"
            name="methodUpload"
            onChange={(e) => {
              setMethodUpload({
                ...BASE_CHANGE_UPLOAD,
                url: e.target.checked,
              });
              setSheetData([]);
            }}
          />
          <p>Upload student data from a url</p>
        </RadioInput>
        <RadioInput>
          <input
            type="radio"
            name="methodUpload"
            onChange={(e) =>
              setMethodUpload({
                ...BASE_CHANGE_UPLOAD,
                file: e.target.checked,
              })
            }
          />
          <p>Upload student data from pc</p>
        </RadioInput>
      </>
      {methodUplaod.url && (
        <Label>
          <p>Paste the path where your sheet is hosted</p>
          <input type="url" name="route" aria-describedby={urlSheetID} />
          <LabelError id={urlSheetID} style={{ backgroundColor: "#1567ff" }}>
            You must ensure that access to the route is public access
          </LabelError>
        </Label>
      )}
      {methodUplaod.file && (
        <>
          <Label>
            <p>Upload your sheet from your computer</p>
          </Label>
          <input type="file" name="sheet" onChange={handleChange} />
          {!validateSheet && <LabelError>invalid format</LabelError>}
          {sheetData.length > 0 && <TableDataStudent datos={sheetData} />}
          {sheetError && <LabelError>{sheetError}</LabelError>}
          {sheetData.length > 0 && (
            <ButtonAddStudents>
              <button onClick={add_student_to_corse}>Add students</button>
            </ButtonAddStudents>
          )}
        </>
      )}
    </>
  );
};

export default RegisterStudentsInCourse;
