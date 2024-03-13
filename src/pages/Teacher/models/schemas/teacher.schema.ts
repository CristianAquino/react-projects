import { z } from "zod";
import { CreateCourseSchema } from ".";

const ID = z
  .string({
    invalid_type_error: "id must be a string",
  })
  .trim()
  .uuid({ message: "invalid format" });

const BaseDataSchema = z.object({
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
});

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
    .max(32, { message: "max length must be 32" })
    .regex(/(?=.*[a-z])/, {
      message: "must have at least one lowercase letter",
    })
    .regex(/(?=.*[A-Z])/, {
      message: "must have at least one capital letter",
    })
    .regex(/(?=.*\d)/gi, { message: "must have at least one number" })
    .regex(/(?=.*[@#$%^&+-/*=!\/])/gi, {
      message: "must have at least one special character",
    })
    .regex(/(?=.*[^\s])/, {
      message: "must not contain whitespace",
    }),
});

const CreateTeacherSchema = z.object({
  ...BaseDataSchema.shape,
  ...LoginTeacherSchema.shape,
});

const MeTeacherSchema = z.object({
  user: z.object({
    ...BaseDataSchema.shape,
    email: z
      .string({ required_error: "email is required" })
      .trim()
      .email({ message: "invalid email" }),
  }),
  course: z.array(
    z.object({
      id: ID,
      ...CreateCourseSchema.shape,
    })
  ),
});

export {
  BaseDataSchema,
  CreateTeacherSchema,
  LoginTeacherSchema,
  MeTeacherSchema,
};
