import { z } from "zod";
import { CreateStudentSchema, MeStudentSchema, UpdateStudentSchema } from ".";

export type CreateStudentType = z.infer<typeof CreateStudentSchema>;
export type UpdateStudentType = z.infer<typeof UpdateStudentSchema>;
export type MeStudentType = z.infer<typeof MeStudentSchema>;
