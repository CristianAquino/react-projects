"use client";

import { CreateStudentType } from "../../models";
import { TableDataStudent } from "../TableData/TableData";

export type ActionUploadSheetProps = {
  datos: CreateStudentType;
};

const ActionUploadSheet = ({ datos }: ActionUploadSheetProps) => {
  return <TableDataStudent datos={datos} />;
};

export default ActionUploadSheet;
