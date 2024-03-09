import { getLocalStorage, notifyError, notifySuccess } from "@app/helpers";
import axios, { AxiosRequestConfig } from "axios";
import { TEACHER_ENDPOINT } from "../helpers";

export function axiosInterceptor() {
  function updateHeader(request: AxiosRequestConfig) {
    const newHeader = {
      Authorization: getLocalStorage({ key: "token" }),
      "Content-Type": "application/json",
    };
    request.headers = newHeader;
    return request;
  }

  axios.interceptors.request.use((request: any) => {
    if (
      request.url?.endsWith(TEACHER_ENDPOINT.POST_TEACHER_LOGIN) ||
      request.url?.endsWith(TEACHER_ENDPOINT.POST_TEACHER_REGISTER)
    )
      return request;
    return updateHeader(request);
  });

  axios.interceptors.response.use(
    (response) => {
      if (response.data.message) {
        notifySuccess(response.data.message);
      }
      return response;
    },
    (error) => {
      if (error.response.data.detail) {
        notifyError(error.response.data.detail);
      }
      return Promise.reject(error);
    }
  );
}
