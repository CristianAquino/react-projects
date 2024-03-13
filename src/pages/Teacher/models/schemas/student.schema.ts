import { z } from "zod";

const BaseStudentDataSchema = {
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
};

const MeStudentSchema = z.object({
  id: z
    .string({
      invalid_type_error: "id must be a string",
    })
    .trim()
    .uuid({ message: "invalid format" }),
  average: z.number(),
  calification: z.string(),
  ...BaseStudentDataSchema,
});

const CreateStudentSchema = z.array(z.object({ ...BaseStudentDataSchema }));
const UpdateStudentSchema = z.object({ ...BaseStudentDataSchema });

export {
  BaseStudentDataSchema,
  CreateStudentSchema,
  UpdateStudentSchema,
  MeStudentSchema,
};
