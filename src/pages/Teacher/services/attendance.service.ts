import { loadAbort } from "@app/helpers";
import axios from "axios";
import { ATTENDANCE_ENDPOINT } from "../helpers";
import {
  CreateAttendanceType,
  ParamsPropsType,
  UpdateAttendanceType,
} from "../models";
const { VITE_API_BASE_TEACHER } = import.meta.env;

function post_attendance_create({
  data,
}: Pick<ParamsPropsType<CreateAttendanceType>, "data">) {
  const controller = loadAbort();
  return {
    call: axios.post(
      VITE_API_BASE_TEACHER + ATTENDANCE_ENDPOINT.POST_ATTENDANCE_CREATE,
      { data, signal: controller.signal },
      { transformRequest: [(data) => JSON.stringify(data.data)] }
    ),
    controller,
  };
}

function get_attendance_list_id({
  id: course_id,
}: Pick<ParamsPropsType<any>, "id">) {
  const controller = loadAbort();
  return {
    call: axios.get(
      VITE_API_BASE_TEACHER +
        ATTENDANCE_ENDPOINT.GET_ATTENDANCE_LIST_BY_COURSEID +
        course_id,
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
}

function put_attendance({
  data,
}: Pick<ParamsPropsType<UpdateAttendanceType>, "data">) {
  const controller = loadAbort();
  return {
    call: axios.put(
      VITE_API_BASE_TEACHER + ATTENDANCE_ENDPOINT.PUT_ATTENDANCE_UPDATE_BY_ID,
      { data, signal: controller.signal },
      { transformRequest: [(data) => JSON.stringify(data.data)] }
    ),
    controller,
  };
}

export { get_attendance_list_id, post_attendance_create, put_attendance };
