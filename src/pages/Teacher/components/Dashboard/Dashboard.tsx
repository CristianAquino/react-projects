"use client";

import { RoutesWithNotFound } from "@app/guards";
import { PRIVATE_ROUTE, PROYECTS_ROUTE } from "@app/routes";
import { lazy } from "react";
import { Route } from "react-router-dom";
import {
  Course,
  DashboardLayout,
  ListCourse,
  Profile,
  RegisterCourse,
  Student,
  UploadSheet,
} from "..";

const Home = lazy(() => import("./Home/Home"));

export type DashboardProps = {
  // types...
};
const Dashboard = ({}: DashboardProps) => {
  return (
    <RoutesWithNotFound
      message="Page not found"
      pageRedirect={PROYECTS_ROUTE.TEACHER + PRIVATE_ROUTE.DASHBOARD}
    >
      <Route path={`${PROYECTS_ROUTE.HOME}`} element={<DashboardLayout />}>
        <Route path="/" element={<Home />}>
          <Route index element={<p>Ninguna accion realizada</p>} />
          <Route path="me/profile" element={<Profile />} />
          <Route path="course/register" element={<RegisterCourse />} />
          <Route path="course/info/:id" element={<Course />} />
          <Route path="course/list" element={<ListCourse />} />
          <Route path="calification/register" element={<RegisterCourse />} />
          <Route path="student/info/:id" element={<Student />} />
          <Route path="student/register" element={<UploadSheet />} />
          <Route path="attendance/register" element={<RegisterCourse />} />
        </Route>
      </Route>
    </RoutesWithNotFound>
  );
};

export default Dashboard;
