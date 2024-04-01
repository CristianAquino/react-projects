import { Level } from "../models";

// TEACHER
const BASE_DATA = {
  name: "",
  first_name: "",
  second_name: "",
};
const LOGIN_TEACHER = {
  email: "",
  password: "",
};
const REGISTER_TEACHER = {
  ...BASE_DATA,
  ...LOGIN_TEACHER,
};
const PROFILE_TEACHER = {
  user: {
    id: "",
    email: "",
    ...BASE_DATA,
  },
  course: [],
};
const UPDATE_TEACHER = BASE_DATA;
// COURSE
const REGISTER_COURSE = {
  name: "",
  level: Level.primaria,
  degree: 1,
  section: "",
};
const UPDATE_COURSE = {
  id: "",
  ...REGISTER_COURSE,
};
const LIST_COURSE = {
  courses: [],
};
const ONE_COURSE = {
  course: { id: "", ...REGISTER_COURSE },
  students: [],
};
// STUDENT
const ME_STUDENT = {
  id: "",
  ...BASE_DATA,
  average: 0,
  calification: "",
};
// CALIFICATION
const BASE_CALIFICATION = {
  id: "",
  califications: [],
};
const UPDATE_CALIFICATION = {
  id: "",
  calification: 0,
};
const ME_CALIFICATION = {
  ...BASE_CALIFICATION,
  califications: [UPDATE_CALIFICATION],
};
// ATTENDANCE
const REGISTER_ATTENDANCE = {
  id: "",
  att: 0,
};
const UPDATE_ATTENDANCE = {
  justification: "",
};
const ME_ATTENDANCE = {
  id: "",
  attendances: [REGISTER_ATTENDANCE],
};
// additional
const BASE_CHANGE_UPLOAD = {
  url: false,
  file: false,
};

export {
  BASE_CHANGE_UPLOAD,
  BASE_DATA,
  LIST_COURSE,
  LOGIN_TEACHER,
  ME_STUDENT,
  ONE_COURSE,
  PROFILE_TEACHER,
  REGISTER_COURSE,
  REGISTER_TEACHER,
  UPDATE_COURSE,
  UPDATE_TEACHER,
};
