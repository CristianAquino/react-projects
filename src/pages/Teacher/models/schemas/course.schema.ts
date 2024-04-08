import { z } from "zod";

const Id = z
  .string({
    invalid_type_error: "id must be a string",
  })
  .trim()
  .uuid({ message: "invalid format" });

const CreateCourseSchema = z.object({
  name: z
    .string({ required_error: "name is required" })
    .trim()
    .min(3, { message: "min length must be 3" })
    .max(80, { message: "max length must be 80" })
    .regex(/^[a-zA-Z\s]+$/gi, { message: "invalid name" }),
  level: z.enum(["primaria", "secundaria"]),
  degree: z
    .string({ required_error: "degree is required" })
    .trim()
    .regex(/^[1-6]$/gi, { message: "degree out of range" }),
  section: z
    .string({ required_error: "section is required" })
    .trim()
    .max(1)
    .regex(/^([A-H]|U|\d)$/, { message: "invalid section" }),
});

const CourseSchema = z.object({
  id: Id,
  ...CreateCourseSchema.shape,
});

const OneCourseSchema = z.object({
  course: CourseSchema,
  students: z.array(
    z.object({
      id: Id,
      name: z
        .string({ required_error: "name is required" })
        .trim()
        .min(3, { message: "min length must be 3" })
        .max(240, { message: "max length must be 240" })
        .regex(/^[a-zA-Z\s]+$/gi, { message: "invalid name" }),
      first_name: z
        .string({ required_error: "first name is required" })
        .trim()
        .min(3, { message: "min length must be 3" })
        .max(80, { message: "max length must be 80" })
        .regex(/^[a-zA-Z\s]+$/gi, { message: "invalid first name" }),
      second_name: z
        .string({ required_error: "second is required" })
        .trim()
        .min(3, { message: "min length must be 3" })
        .max(80, { message: "max length must be 80" })
        .regex(/^[a-zA-Z\s]+$/gi, { message: "invalid second name" }),
      average: z.number(),
      calification: z.string(),
    })
  ),
});

const ListCourseSchema = z.array(CourseSchema);

export { CourseSchema, CreateCourseSchema, ListCourseSchema, OneCourseSchema };
