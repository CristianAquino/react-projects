import { z } from "zod";
import { Level } from "..";

export const CreateCourseSchema = z.object({
  name: z
    .string({ required_error: "name is required" })
    .trim()
    .min(3, { message: "min length must be 3" })
    .max(80, { message: "max length must be 80" })
    .regex(/^[a-zA-Z\s]+$/gi, { message: "invalid name" }),
  level: z.nativeEnum(Level),
  degree: z
    .string({ required_error: "degree is required" })
    .trim()
    .regex(/^[1-6]$/gi, { message: "invalid degree" }),
  section: z
    .string({ required_error: "section is required" })
    .trim()
    .max(1)
    .regex(/^([A-U]|\d)$/gi, { message: "invalid section" }),
});
