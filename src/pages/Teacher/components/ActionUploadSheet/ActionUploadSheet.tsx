"use client";

import { useState } from "react";
import { CreateStudentType } from "../../models";

export type ActionUploadSheetProps = {
  datos: CreateStudentType;
  headT: string[];
};
type SortedProps = {
  arr: CreateStudentType;
  key: "name" | "first_name" | "second_name";
  order: "asc" | "desc";
};

const ActionUploadSheet = ({ datos, headT }: ActionUploadSheetProps) => {
  const da = datos.map((d) => {
    let n: any = {};
    Object.entries(d).forEach(([key, value]) => {
      n[key] = value
        .split(" ")
        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
        .join(" ");
    });
    return n;
  });

  function sortedName({ arr, key, order }: SortedProps) {
    return arr.sort((a, b) => {
      let c = 0;
      if (a[key] > b[key]) {
        c = 1;
      } else if (a[key] < b[key]) {
        c = -1;
      }

      return order === "asc" ? c : -c;
    });
  }
  const [sheetDatos, setSheetDatos] = useState(() =>
    sortedName({ arr: da, key: "first_name", order: "asc" })
  );
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          {headT.map((head) => (
            <th key={head}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sheetDatos.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            {Object.entries(row).map(([key, value]) => (
              <td key={key}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ActionUploadSheet;
