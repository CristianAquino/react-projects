const TEACHER_ENDPOINT = {
  POST_TEACHER_LOGIN: "teacher/login/",
  POST_TEACHER_REGISTER: "teacher/add/",
  TEACHER_ME: "teacher/me/",
};
const COURSE_ENDPOINT = {
  GET_COURSE_ONE_BY_ID: "course/one/",
  GET_COURSE_LIST: "course/list/",
  POST_COURSE_CREATE: "course/create/",
  PUT_COURSE_UPDATE_BY_ID: "course/update/",
  DELETE_COURSE_ONE_BY_ID: "course/delete/",
};
const STUDENT_ENDPOINT = {
  GET_STUDENT_ONE_BY_ID: "student/one/",
  POST_STUDENT_CREATE_BY_COURSE_ID: "student/create/",
  PUT_STUDENT_UPDATE_BY_ID: "student/update/",
  DELETE_STUDENT_ONE_BY_ID: "student/delete/",
};
const CALIFICATION_ENDPOINT = {
  GET_CALIFICATION_LIST_BY_COURSEID: "calification/list/",
  POST_CALIFICATION_CREATE: "calification/create/",
  PUT_CALIFICATION_UPDATE: "calification/update/",
};
const ATTENDANCE_ENDPOINT = {
  GET_ATTENDANCE_LIST_BY_COURSEID: "attendance/list/",
  POST_ATTENDANCE_CREATE: "attendance/create/",
  PUT_ATTENDANCE_UPDATE_BY_ID: "attendance/update/",
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
