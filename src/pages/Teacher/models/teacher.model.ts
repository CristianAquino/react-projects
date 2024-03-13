import { z } from "zod";
import {
  BaseTeacherDataSchema,
  CreateTeacherSchema,
  LoginTeacherSchema,
  MeTeacherSchema,
} from ".";

export type ParamsPropsType<T> = {
  data: T;
  id: string;
};

export type CreateTeacherType = z.infer<typeof CreateTeacherSchema>;
export type LoginTeacherType = z.infer<typeof LoginTeacherSchema>;
export type PutTeacherType = z.infer<typeof BaseTeacherDataSchema>;
export type ProfileTeacherType = z.infer<typeof MeTeacherSchema>;
