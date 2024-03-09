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

export { LOGIN_TEACHER, REGISTER_TEACHER };
