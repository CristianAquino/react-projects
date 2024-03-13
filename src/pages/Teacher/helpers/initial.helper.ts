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
  degree: 1,
  section: "",
};
const ME_TEACHER = {
  user: {
    id: "",
    name: "",
    first_name: "",
    second_name: "",
    email: "",
  },
  course: [],
};
const LIST_COURSE = {
  courses: [],
};

export {
  LOGIN_TEACHER,
  REGISTER_COURSE,
  REGISTER_TEACHER,
  ME_TEACHER,
  LIST_COURSE,
};
