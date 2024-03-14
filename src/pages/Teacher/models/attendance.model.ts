import { z } from "zod";
import { CreateAttendanceSchema, UpdateAttendanceSchema } from ".";

export type CreateAttendanceType = z.infer<typeof CreateAttendanceSchema>;
export type UpdateAttendanceType = z.infer<typeof UpdateAttendanceSchema>;
