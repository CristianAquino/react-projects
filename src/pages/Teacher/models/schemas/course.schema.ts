import { z } from "zod";
import { BaseStudentDataSchema, Level } from "..";

const CreateCourseSchema = z.object({
  name: z
    .string({ required_error: "name is required" })
    .trim()
    .min(3, { message: "min length must be 3" })
    .max(80, { message: "max length must be 80" })
    .regex(/^[a-zA-Z\s]+$/gi, { message: "invalid name" }),
  level: z.nativeEnum(Level),
  degree: z
    .number({ required_error: "degree is required" })
    .lte(6, { message: "max degree must be 6" })
    .gte(1, { message: "min degree must be 1" }),
  section: z
    .string({ required_error: "section is required" })
    .trim()
    .max(1)
    .regex(/^([A-U]|\d)$/, { message: "invalid section" }),
});

const ListCourseSchema = z.object({
  courses: z.array(
    z.object({
      id: z
        .string({
          invalid_type_error: "id must be a string",
        })
        .trim()
        .uuid({ message: "invalid format" }),
      ...CreateCourseSchema.shape,
    })
  ),
});

const MeCourseSchema = z.object({
  course: z.object({
    id: z
      .string({
        invalid_type_error: "id must be a string",
      })
      .trim()
      .uuid({ message: "invalid format" }),
    ...CreateCourseSchema.shape,
  }),
  students: z.array(
    z.object({
      id: z
        .string({
          invalid_type_error: "id must be a string",
        })
        .trim()
        .uuid({ message: "invalid format" }),
      ...BaseStudentDataSchema,
    })
  ),
});
export { CreateCourseSchema, ListCourseSchema, MeCourseSchema };
