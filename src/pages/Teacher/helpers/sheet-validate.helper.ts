const fileType = [
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "text/csv",
];

export function sheetValidate(sheet: File) {
  return fileType.includes(sheet.type);
}
