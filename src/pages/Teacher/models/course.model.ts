import { z } from "zod";
import { CreateCourseSchema, ListCourseSchema, MeCourseSchema } from ".";

export type CreateCourseType = z.infer<typeof CreateCourseSchema>;
export type ListCourseType = z.infer<typeof ListCourseSchema>;
export type MeCourseType = z.infer<typeof MeCourseSchema>;
