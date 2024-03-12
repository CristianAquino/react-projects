import { z } from "zod";
import { CreateTeacherSchema, LoginTeacherSchema } from ".";

export type ParamsPropsType<T> = {
  data: T;
  id: string;
};

export type CreateTeacherType = z.infer<typeof CreateTeacherSchema>;
export type LoginTeacherType = z.infer<typeof LoginTeacherSchema>;
