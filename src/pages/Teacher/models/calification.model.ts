import { z } from "zod";
import {
  CreateCalificationSchema,
  InitialCalificationSchema,
  UpdateCalificationSchema,
} from ".";

export type CreateCalificationType = z.infer<typeof CreateCalificationSchema>;
export type InitialCalificationType = z.infer<typeof InitialCalificationSchema>;
export type UpdateCalificationType = z.infer<typeof UpdateCalificationSchema>;
