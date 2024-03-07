const TEACHER_ENDPOINT = {
  POST_LOGIN: "teacher/login/",
  POST_REGISTER: "teacher/add/",
  GET_ME: "teacher/me/",
  PUT_ME: "teacher/me/",
};
const COURSE_ENDPOINT = {
  GET_ONE_BY_ID: "course/",
  GET_LIST: "course/list/",
  POST_CREATE: "course/create/",
  PUT_UPDATE_BY_ID: "course/update/",
  DELETE_ONE_BY_ID: "course/delete/",
};
const STUDENT_ENDPOINT = {
  GET_ONE_BY_ID: "student/one/",
  POST_CREATE_BY_COURSE_ID: "student/create/",
  PUT_UPDATE_BY_ID: "student/update/",
  DELETE_ONE_BY_ID: "student/delete/",
};
const CALIFICATION_ENDPOINT = {
  GET_LIST_BY_COURSEID: "calification/list/",
  POST_CREATE: "calification/create/",
  PUT_UPDATE: "calification/update/",
};
const ATTENDANCE_ENDPOINT = {
  GET_LIST_BY_COURSEID: "attendance/list/",
  POST_CREATE: "attendance/create/",
  PUT_UPDATE_BY_ID: "attendance/update/",
};

const TEACHER_PAGE = {};

export {
  ATTENDANCE_ENDPOINT,
  CALIFICATION_ENDPOINT,
  COURSE_ENDPOINT,
  STUDENT_ENDPOINT,
  TEACHER_ENDPOINT,
  TEACHER_PAGE,
};
