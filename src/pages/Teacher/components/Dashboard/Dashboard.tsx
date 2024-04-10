"use client";

import { RoutesWithNotFound } from "@app/guards";
import { PROYECTS_ROUTE } from "@app/routes";
import { lazy } from "react";
import { Route } from "react-router-dom";
import { DashboardLayout } from "..";

// home
const Home = lazy(() => import("./Home/Home"));
const InitialOptionPage = lazy(
  () => import("../InitialOptionPage/InitialOptionPage")
);
// teacher
const Profile = lazy(() => import("../Profile/Profile"));
const UpdateProfile = lazy(() => import("../UpdateProfile/UpdateProfile"));
// course
const RegisterCourse = lazy(() => import("../RegisterCourse/RegisterCourse"));
const ActionsInCourses = lazy(
  () => import("../ActionsInCourses/ActionsInCourses")
);
const InfoCourse = lazy(() => import("../InfoCourse/InfoCourse"));
// student
const Student = lazy(() => import("../Student/Student"));
const RegisterStudents = lazy(
  () => import("../RegisterStudents/RegisterStudents")
);
// calification
const RegisterCalification = lazy(
  () => import("../RegisterCalification/RegisterCalification")
);
const SaveCalificationCourse = lazy(
  () => import("../SaveCalificationCourse/SaveCalificationCourse")
);
// attendance
const RegisterAttendance = lazy(
  () => import("../RegisterAttendance/RegisterAttendance")
);
const TakeAttendanceCourse = lazy(
  () => import("../TakeAttendanceCourse/TakeAttendanceCourse")
);

export type DashboardProps = {
  // types...
};
const Dashboard = ({}: DashboardProps) => {
  return (
    <RoutesWithNotFound message="Page not found">
      <Route path={`${PROYECTS_ROUTE.HOME}`} element={<DashboardLayout />}>
        <Route path="/" element={<Home />}>
          <Route index element={<InitialOptionPage />} />
          <Route path="me">
            <Route path="profile" element={<Profile />} />
            <Route path="update" element={<UpdateProfile />} />
          </Route>
          <Route path="course">
            <Route path="register" element={<RegisterCourse />} />
            <Route path="list" element={<ActionsInCourses />} />
            <Route path="info/:id" element={<InfoCourse />} />
          </Route>
          <Route path="student">
            <Route path="register" element={<RegisterStudents />} />
            <Route path="info/:id" element={<Student />} />
          </Route>
          <Route path="attendance">
            <Route path="search" element={<RegisterAttendance />} />
            <Route path="search/:id" element={<TakeAttendanceCourse />} />
          </Route>
          <Route path="calification">
            <Route path="search" element={<RegisterCalification />} />
            <Route path="search/:id" element={<SaveCalificationCourse />} />
          </Route>
        </Route>
      </Route>
    </RoutesWithNotFound>
  );
};

export default Dashboard;
