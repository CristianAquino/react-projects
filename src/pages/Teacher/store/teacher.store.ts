import { setCookie } from "@app/helpers";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ME_TEACHER } from "../helpers";
import { GetMeTeacherDataType, PutUpdateTeacherType } from "../models";

interface State {
  user: GetMeTeacherDataType;
}
interface Actions {
  setTeacher: (teacher: GetMeTeacherDataType) => void;
  setUpdateTeacher: (teacher: PutUpdateTeacherType) => void;
  logout: () => void;
}

export const useTeacherStorage = create<State & Actions>()(
  devtools(
    persist(
      (set, get) => ({
        user: ME_TEACHER,
        setTeacher: (teacher) => {
          set({ user: teacher }, false, "RECOVERY_DATA_TEACHER");
        },
        setUpdateTeacher: (teacher) => {
          const { user } = get();
          const n = { ...user, ...teacher };
          set({ user: n }, false, "UPDATE_DATA_TEACHER");
        },
        logout: () => {
          localStorage.clear();
          setCookie({ key: "_token", value: "", time: -1 });
        },
      }),
      {
        name: "user",
      }
    )
  )
);
