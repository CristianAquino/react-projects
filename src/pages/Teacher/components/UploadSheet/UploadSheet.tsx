"use client";

import { ChangeEvent, useId, useState } from "react";
import { read, utils } from "xlsx";
import { ActionUploadSheet } from "..";
import { sheetValidate } from "../../helpers";
import { useFetchAndLoad } from "../../hooks";
import { CreateStudentType } from "../../models";
import { post_student_create } from "../../services";

export type UploadSheetProps = {
  // types...
};

const UploadSheet = ({}: UploadSheetProps) => {
  const urlSheetID = useId();
  const [validateSheet, setValidateSheet] = useState(true);
  const [sheetData, setSheetData] = useState<CreateStudentType>([]);
  const [sheetError, setSheetError] = useState<string | null>(null);
  const tableHeader = ["first_name", "second_name", "name"];
  const { callEndpoint } = useFetchAndLoad();

  async function add_student_to_corse() {
    await callEndpoint(
      post_student_create({
        data: sheetData,
        id: "ab1cd9fa-8dda-4aa8-a9dd-d7904bce95b3",
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
  return (
    <div>
      <label>
        Paste the path where your sheet is hosted
        <input type="url" name="route" aria-describedby={urlSheetID} />
        <p id={urlSheetID}>
          You must ensure that access to the route is public access
        </p>
      </label>
      {sheetData.length > 0 && (
        <button onClick={add_student_to_corse}>Add students</button>
      )}
      <input type="file" name="sheet" onChange={handleChange} />
      {!validateSheet && <p>invalid format</p>}
      {sheetData.length > 0 && (
        <ActionUploadSheet datos={sheetData} headT={tableHeader} />
      )}
      {sheetError && <p>{sheetError}</p>}
    </div>
  );
};

export default UploadSheet;
