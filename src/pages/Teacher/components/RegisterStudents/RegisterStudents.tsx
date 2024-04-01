"use client";

import { ChangeEvent, useId, useState } from "react";
import { PiXCircle } from "react-icons/pi";
import { read, utils } from "xlsx";
import { ActionUploadSheet } from "..";
import { BASE_CHANGE_UPLOAD, sheetValidate } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { CreateStudentType } from "../../models";
import { post_student_create } from "../../services";
import { LabelError } from "../Login/styled-components";
import { Container, Title } from "../Profile/styled-components";
import {
  ButtonAddStudents,
  LabelSheet,
  RadioInput,
  SelectCourse,
} from "./styled-components";

export type RegisterStudentsProps = {
  // types...
  course: any;
  uploadCourse: (up: any) => void;
};

const RegisterStudents = ({ course, uploadCourse }: RegisterStudentsProps) => {
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
        id: course?.id,
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
    <Container>
      <Title>register students</Title>
      <Container>
        <LabelSheet>
          <SelectCourse onClick={handleResetCourse}>
            Course: {course.name} <PiXCircle title="remove course" />
          </SelectCourse>
        </LabelSheet>
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
      </Container>
      {methodUplaod.url && (
        <LabelSheet>
          <p>Paste the path where your sheet is hosted</p>
          <input type="url" name="route" aria-describedby={urlSheetID} />
          <LabelError id={urlSheetID} style={{ backgroundColor: "#1567ff" }}>
            You must ensure that access to the route is public access
          </LabelError>
        </LabelSheet>
      )}
      {methodUplaod.file && (
        <>
          <LabelSheet>
            <p>Upload your sheet from your computer</p>
          </LabelSheet>
          {sheetData.length > 0 && (
            <ButtonAddStudents>
              <button onClick={add_student_to_corse}>Add students</button>
            </ButtonAddStudents>
          )}
          <input type="file" name="sheet" onChange={handleChange} />
          {!validateSheet && <p>invalid format</p>}
          {sheetData.length > 0 && <ActionUploadSheet datos={sheetData} />}
          {sheetError && <p>{sheetError}</p>}
        </>
      )}
    </Container>
  );
};

export default RegisterStudents;
