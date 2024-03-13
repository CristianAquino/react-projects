import { loadAbort } from "@app/helpers";
import axios from "axios";
import { STUDENT_ENDPOINT } from "../helpers";
import {
  CreateStudentType,
  ParamsPropsType,
  UpdateStudentType,
} from "../models";
const { VITE_API_BASE_TEACHER } = import.meta.env;

function post_student_create({
  data,
  id: course_id,
}: ParamsPropsType<CreateStudentType>) {
  const controller = loadAbort();
  return {
    call: axios.post(
      VITE_API_BASE_TEACHER +
        STUDENT_ENDPOINT.POST_STUDENT_CREATE_BY_COURSE_ID +
        course_id,
      { data, signal: controller.signal },
      { transformRequest: [(data) => JSON.stringify(data.data)] }
    ),
    controller,
  };
}

function get_student_one_id({ id }: Pick<ParamsPropsType<any>, "id">) {
  const controller = loadAbort();
  return {
    call: axios.get(
      VITE_API_BASE_TEACHER + STUDENT_ENDPOINT.GET_STUDENT_ONE_BY_ID + id,
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
}

function put_student_id({
  data,
  id,
}: ParamsPropsType<Partial<UpdateStudentType>>) {
  const controller = loadAbort();
  return {
    call: axios.put(
      VITE_API_BASE_TEACHER + STUDENT_ENDPOINT.PUT_STUDENT_UPDATE_BY_ID + id,
      {
        ...data,
        signal: controller.signal,
      }
    ),
    controller,
  };
}

function delete_student_id({ id }: Pick<ParamsPropsType<any>, "id">) {
  const controller = loadAbort();
  return {
    call: axios.delete(
      VITE_API_BASE_TEACHER + STUDENT_ENDPOINT.DELETE_STUDENT_ONE_BY_ID + id,
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
}

export {
  delete_student_id,
  get_student_one_id,
  post_student_create,
  put_student_id,
};
