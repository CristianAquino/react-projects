import { loadAbort } from "@app/helpers";
import axios from "axios";
import { TEACHER_ENDPOINT } from "../helpers";
import {
  ParamsPropsType,
  PostCreateTeacherType,
  PostLoginTeacherType,
  PutUpdateTeacherType,
} from "../models";
const { VITE_API_BASE_TEACHER } = import.meta.env;
// const BASE_TEACHER = "http://localhost:5173/data/";

function post_register({
  data,
}: Omit<ParamsPropsType<PostCreateTeacherType>, "id">) {
  const controller = loadAbort();
  return {
    call: axios.post(
      VITE_API_BASE_TEACHER + TEACHER_ENDPOINT.POST_TEACHER_REGISTER,
      { ...data, signal: controller.signal }
    ),
    controller,
  };
}

function post_login({
  data,
}: Omit<ParamsPropsType<PostLoginTeacherType>, "id">) {
  const controller = loadAbort();
  return {
    call: axios.post(
      VITE_API_BASE_TEACHER + TEACHER_ENDPOINT.POST_TEACHER_LOGIN,
      { ...data, signal: controller.signal }
    ),
    controller,
  };
}

function get_teacher_me() {
  const controller = loadAbort();
  return {
    call: axios.get(VITE_API_BASE_TEACHER + TEACHER_ENDPOINT.TEACHER_ME, {
      signal: controller.signal,
    }),
    controller,
  };
}

function put_teacher_me({
  data,
}: Omit<ParamsPropsType<Partial<PutUpdateTeacherType>>, "id">) {
  const controller = loadAbort();
  return {
    call: axios.put(VITE_API_BASE_TEACHER + TEACHER_ENDPOINT.TEACHER_ME, {
      ...data,
      signal: controller.signal,
    }),
    controller,
  };
}
export { get_teacher_me, post_login, post_register, put_teacher_me };
