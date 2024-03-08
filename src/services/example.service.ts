// import { loadAbort } from "@app/helpers";
// import { TEACHER_ENDPOINT } from "../helpers";
// import { CreateTeacherType, LoginTeacherType } from "../models";
// const { VITE_API_BASE_TEACHER } = import.meta.env;

// function post_register(data: CreateTeacherType) {
//   const controller = loadAbort();
//   const endpoint = fetch(
//     VITE_API_BASE_TEACHER + TEACHER_ENDPOINT.POST_TEACHER_REGISTER,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//       signal: controller.signal,
//     }
//   );
//   return { call: endpoint, controller };
// }

// function post_login(data: LoginTeacherType) {
//   const controller = loadAbort();
//   const endpoint = fetch(
//     VITE_API_BASE_TEACHER + TEACHER_ENDPOINT.POST_TEACHER_LOGIN,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//       signal: controller.signal,
//     }
//   );
//   return { call: endpoint, controller };
// }

// function get_teacher_me() {
//   const controller = loadAbort();
//   const endpoint = fetch(VITE_API_BASE_TEACHER + TEACHER_ENDPOINT.TEACHER_ME, {
//     signal: controller.signal,
//   });
//   return { call: endpoint, controller };
// }
// export { get_teacher_me, post_login, post_register };
