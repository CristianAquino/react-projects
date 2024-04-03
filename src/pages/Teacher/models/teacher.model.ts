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

export type PostCreateTeacherType = z.infer<typeof CreateTeacherSchema>;
export type PostLoginTeacherType = z.infer<typeof LoginTeacherSchema>;
export type PutUpdateTeacherType = z.infer<typeof BaseTeacherDataSchema>;
export type GetMeTeacherDataType = z.infer<typeof MeTeacherSchema>;
