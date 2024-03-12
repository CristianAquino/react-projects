import { z } from "zod";
import { CreateCourseSchema } from ".";

export type CreateCourseType = z.infer<typeof CreateCourseSchema>;
