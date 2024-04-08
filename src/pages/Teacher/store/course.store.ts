import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { CourseType } from "../models";

interface State {
  courses: CourseType[];
}

interface Actions {
  setCourses: (courses: []) => void;
  setAddCourse: (course: CourseType) => void;
  setDeleteCourse: (id: string) => void;
  setUpdateCourse: (course: CourseType) => void;
  getCourseByIdAtt: (id: string) => CourseType;
}

export const useCourseStorage = create<State & Actions>()(
  devtools(
    persist(
      (set, get) => ({
        courses: [],
        setCourses: (courses) =>
          set({ courses }, false, "RECOVERY_DATA_COURSES"),
        setAddCourse: (course) => {
          const { courses } = get();
          set(
            { courses: [...courses, course] },
            false,
            "REGISTER_NEW_DATA_COURSE"
          );
        },
        setDeleteCourse: (id) => {
          const { courses } = get();
          const newCourses = courses.filter((course) => course.id !== id);
          set({ courses: newCourses }, false, "DELETE_DATA_COURSE");
        },
        setUpdateCourse: (course) => {
          const { courses } = get();
          const newCourses = courses.map((c) => {
            if (c.id === course.id) {
              return course;
            }
            return c;
          });
          set({ courses: newCourses }, false, "UPDATE_DATA_COURSE");
        },
        getCourseByIdAtt: (id) => {
          const { courses } = get();
          return courses.find((course) => course.id === id) as CourseType;
        },
      }),
      {
        name: "courses",
      }
    )
  )
);
