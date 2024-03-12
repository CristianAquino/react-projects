import { z } from "zod";
import { CreateStudentSchema } from ".";

export type CreateStudentType = z.infer<typeof CreateStudentSchema>;
