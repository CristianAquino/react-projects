import { z } from "zod";
import {
  CreateCourseSchema,
  ListCourseSchema,
  OneCourseSchema,
  UpdateCourseSchema,
} from ".";

export type CreateCourseType = z.infer<typeof CreateCourseSchema>;
export type UpdateCourseType = z.infer<typeof UpdateCourseSchema>;
export type ListCourseType = z.infer<typeof ListCourseSchema>;
export type OneCourseType = z.infer<typeof OneCourseSchema>;
