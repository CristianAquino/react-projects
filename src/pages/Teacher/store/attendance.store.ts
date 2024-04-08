import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { InitialAttendanceType } from "../models";

interface State {
  attendances: InitialAttendanceType;
}

interface Actions {
  setAttendances: (attendances: InitialAttendanceType) => void;
}

export const useAttendanceStorage = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        attendances: [],
        setAttendances: (attendances) =>
          set({ attendances }, false, "RECOVERY_DATA_ATTENDANCES"),
      }),
      {
        name: "attendances",
      }
    )
  )
);
