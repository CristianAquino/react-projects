import { Level } from "../models";

const LOGIN_TEACHER = {
  email: "",
  password: "",
};

const REGISTER_TEACHER = {
  name: "",
  first_name: "",
  second_name: "",
  ...LOGIN_TEACHER,
};
const REGISTER_COURSE = {
  name: "",
  level: Level.primaria,
  degree: "1",
  section: "",
};

export { LOGIN_TEACHER, REGISTER_COURSE, REGISTER_TEACHER };
