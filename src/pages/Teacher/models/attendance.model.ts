import { z } from "zod";
import {
  CreateAttendanceSchema,
  InitialAttendanceSchema,
  UpdateAttendanceSchema,
} from ".";

export type CreateAttendanceType = z.infer<typeof CreateAttendanceSchema>;
export type InitialAttendanceType = z.infer<typeof InitialAttendanceSchema>;
export type UpdateAttendanceType = z.infer<typeof UpdateAttendanceSchema>;
