import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { InitialCalificationType } from "../models";

interface State {
  califications: InitialCalificationType;
}

interface Actions {
  setCalifications: (califications: InitialCalificationType) => void;
}

export const useCalificationStore = create<State & Actions>()(
  devtools(
    persist(
      (set, get) => ({
        califications: [],
        setCalifications: (califications) =>
          set({ califications }, false, "RECOVERY_DATA_COURSES"),
      }),
      {
        name: "califications",
      }
    )
  )
);
