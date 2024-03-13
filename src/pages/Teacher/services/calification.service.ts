import { loadAbort } from "@app/helpers";
import axios from "axios";
import { CALIFICATION_ENDPOINT } from "../helpers";
import {
  CreateCalificationType,
  ParamsPropsType,
  UpdateCalificationType,
} from "../models";
const { VITE_API_BASE_TEACHER } = import.meta.env;

function post_calification_create({
  data,
}: Pick<ParamsPropsType<CreateCalificationType>, "data">) {
  const controller = loadAbort();
  return {
    call: axios.post(
      VITE_API_BASE_TEACHER + CALIFICATION_ENDPOINT.POST_CALIFICATION_CREATE,
      { data, signal: controller.signal },
      { transformRequest: [(data) => JSON.stringify(data.data)] }
    ),
    controller,
  };
}

function get_calification_list_id({
  id: course_id,
}: Pick<ParamsPropsType<any>, "id">) {
  const controller = loadAbort();
  return {
    call: axios.get(
      VITE_API_BASE_TEACHER +
        CALIFICATION_ENDPOINT.GET_CALIFICATION_LIST_BY_COURSEID +
        course_id,
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
}

function put_calification({
  data,
}: Pick<ParamsPropsType<UpdateCalificationType>, "data">) {
  const controller = loadAbort();
  return {
    call: axios.put(
      VITE_API_BASE_TEACHER + CALIFICATION_ENDPOINT.PUT_CALIFICATION_UPDATE,
      { data, signal: controller.signal },
      { transformRequest: [(data) => JSON.stringify(data.data)] }
    ),
    controller,
  };
}

export { get_calification_list_id, post_calification_create, put_calification };
