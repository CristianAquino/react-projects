import { z } from "zod";

const Id = z
  .string({ required_error: "name is required" })
  .trim()
  .uuid({ message: "invalid id" });

const BaseCalificationDataSchema = z.object({
  pt: z
    .number()
    .lte(20, {
      message: "The grade entered must be less than or equal to 20",
    })
    .gte(0, {
      message: "The grade entered must be greater than or equal to 0",
    }),
  pp: z
    .number()
    .lte(20, {
      message: "The grade entered must be less than or equal to 20",
    })
    .gte(0, {
      message: "The grade entered must be greater than or equal to 0",
    }),
  pe: z
    .number()
    .lte(20, {
      message: "The grade entered must be less than or equal to 20",
    })
    .gte(0, {
      message: "The grade entered must be greater than or equal to 0",
    }),
});

const CreateCalificationSchema = z.array(
  z.object({ ...BaseCalificationDataSchema.shape, id: Id })
);

const UpdateCalificationSchema = BaseCalificationDataSchema;

const InitialCalificationSchema = z.array(
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
    ...BaseCalificationDataSchema.shape,
  })
);

export {
  CreateCalificationSchema,
  InitialCalificationSchema,
  UpdateCalificationSchema,
};
