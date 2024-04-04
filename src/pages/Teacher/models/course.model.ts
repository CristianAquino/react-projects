import { z } from "zod";
import {
  CourseSchema,
  CreateCourseSchema,
  ListCourseSchema,
  OneCourseSchema,
} from ".";

export type PostCreateCourseType = z.infer<typeof CreateCourseSchema>;
export type GetListCourseType = z.infer<typeof ListCourseSchema>;
export type GetOneCourseType = z.infer<typeof OneCourseSchema>;
export type CourseType = z.infer<typeof CourseSchema>;
