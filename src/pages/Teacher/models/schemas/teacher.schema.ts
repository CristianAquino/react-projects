import { z } from "zod";

const BaseDataSchema = {
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

const LoginTeacherSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invalid email" }),
  password: z
    .string({
      required_error: "password is required",
    })
    .trim()
    .min(8, { message: "min length must be 8" })
    .max(32, { message: "max length must be 32" }),
});

const CreateTeacherSchema = z.object({
  ...BaseDataSchema,
  ...LoginTeacherSchema.shape,
});

export { BaseDataSchema, CreateTeacherSchema, LoginTeacherSchema };
