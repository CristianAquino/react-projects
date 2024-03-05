function unitDecimal(data: number) {
  const num = data.toString();
  if (!num.includes(".")) {
    return num + ".00";
  }
  if (num.slice(num.indexOf(".")).length < 2) {
    return num + "0";
  }
  return num;
}
export { unitDecimal };
