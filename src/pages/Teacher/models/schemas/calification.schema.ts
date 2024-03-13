import { z } from "zod";

const BaseCalificationDataSchema = {
  id: z
    .string({ required_error: "name is required" })
    .trim()
    .uuid({ message: "invalid id" }),
  califications: z.array(
    z
      .number()
      .lte(20, {
        message: "The grade entered must be less than or equal to 20",
      })
      .gte(0, {
        message: "The grade entered must be greater than or equal to 0",
      })
  ),
};

const CreateCalificationSchema = z.array(
  z.object({ ...BaseCalificationDataSchema })
);

const UpdateCalificationSchema = z.array(
  z.object({
    id: z
      .string({ required_error: "name is required" })
      .trim()
      .uuid({ message: "invalid id" }),
    calification: z.number().gte(0).lte(20),
  })
);

export { CreateCalificationSchema, UpdateCalificationSchema };
