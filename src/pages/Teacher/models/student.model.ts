import { z } from "zod";
import { CreateStudentSchema, UpdateStudentSchema } from ".";

export type CreateStudentType = z.infer<typeof CreateStudentSchema>;
export type UpdateStudentType = z.infer<typeof UpdateStudentSchema>;
