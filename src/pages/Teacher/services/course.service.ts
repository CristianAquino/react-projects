import { loadAbort } from "@app/helpers";
import axios from "axios";
import { COURSE_ENDPOINT } from "../helpers";
import { CreateCourseType, ParamsPropsType } from "../models";
const { VITE_API_BASE_TEACHER } = import.meta.env;

function post_course_create({
  data,
}: Pick<ParamsPropsType<CreateCourseType>, "data">) {
  const controller = loadAbort();
  return {
    call: axios.post(
      VITE_API_BASE_TEACHER + COURSE_ENDPOINT.POST_COURSE_CREATE,
      { ...data, signal: controller.signal }
    ),
    controller,
  };
}

function get_course_one_id({ id }: Pick<ParamsPropsType<any>, "id">) {
  const controller = loadAbort();
  return {
    call: axios.get(
      VITE_API_BASE_TEACHER + COURSE_ENDPOINT.GET_COURSE_ONE_BY_ID + id,
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
}

function get_course_list() {
  const controller = loadAbort();
  return {
    call: axios.get(VITE_API_BASE_TEACHER + COURSE_ENDPOINT.GET_COURSE_LIST, {
      signal: controller.signal,
    }),
    controller,
  };
}

function put_course_id({
  data,
  id,
}: ParamsPropsType<Partial<CreateCourseType>>) {
  const controller = loadAbort();
  return {
    call: axios.put(
      VITE_API_BASE_TEACHER + COURSE_ENDPOINT.PUT_COURSE_UPDATE_BY_ID + id,
      {
        ...data,
        signal: controller.signal,
      }
    ),
    controller,
  };
}

function delete_course_id({ id }: Pick<ParamsPropsType<any>, "id">) {
  const controller = loadAbort();
  return {
    call: axios.delete(
      VITE_API_BASE_TEACHER + COURSE_ENDPOINT.DELETE_COURSE_ONE_BY_ID + id,
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
}

export {
  delete_course_id,
  get_course_list,
  get_course_one_id,
  post_course_create,
  put_course_id,
};
