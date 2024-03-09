import { z } from "zod";
import { CreateTeacherSchema, LoginTeacherSchema } from "./schemas";

export type CreateTeacherType = z.infer<typeof CreateTeacherSchema>;
export type LoginTeacherType = z.infer<typeof LoginTeacherSchema>;
