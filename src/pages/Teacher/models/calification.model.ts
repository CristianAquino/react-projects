import { z } from "zod";
import { CreateCalificationSchema, UpdateCalificationSchema } from ".";

export type CreateCalificationType = z.infer<typeof CreateCalificationSchema>;
export type UpdateCalificationType = z.infer<typeof UpdateCalificationSchema>;
