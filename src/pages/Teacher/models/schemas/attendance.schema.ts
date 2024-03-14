import { z } from "zod";

const BaseAttendanceDataSchema = {
  id: z
    .string({ required_error: "name is required" })
    .trim()
    .uuid({ message: "invalid id" }),
  att: z
    .number()
    .lte(2, {
      message: "The grade entered must be less than or equal to 20",
    })
    .gte(0, {
      message: "The grade entered must be greater than or equal to 0",
    }),
};

const CreateAttendanceSchema = z.array(
  z.object({ ...BaseAttendanceDataSchema })
);

const UpdateAttendanceSchema = z.object({
  justification: z
    .string()
    .trim()
    .min(3, { message: "min length must be 3" })
    .max(240, { message: "max length must be 240" })
    .regex(/^[a-zA-Z\s\d]+$/gi, { message: "invalid justification" }),
});

export { CreateAttendanceSchema, UpdateAttendanceSchema };
