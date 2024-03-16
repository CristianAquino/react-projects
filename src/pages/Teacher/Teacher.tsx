"use client";
import { AuthGuard, RoutesWithNotFound } from "@app/guards";
import { PRIVATE_ROUTE, PROYECTS_ROUTE } from "@app/routes";
import React, { lazy } from "react";
import { Route } from "react-router-dom";
import { axiosInterceptor } from "./interceptors";

export type TeacherProps = {
  // types...
};

const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
const Home = lazy(() => import("./components/Home/Home"));
const LayoutTeacher = lazy(
  () => import("./components/LayoutTeacher/LayoutTeacher")
);

axiosInterceptor();

const Teacher: React.FC<TeacherProps> = ({}) => {
  return (
    <RoutesWithNotFound
      message="Page not found"
      pageRedirect={PROYECTS_ROUTE.TEACHER}
    >
      <Route path={PROYECTS_ROUTE.HOME} element={<LayoutTeacher />}>
        <Route index element={<Home />} />
        {/* protegiendo rutas */}
        <Route element={<AuthGuard />}>
          <Route
            path={`${PRIVATE_ROUTE.DASHBOARD}/*`}
            element={<Dashboard />}
          />
        </Route>
      </Route>
    </RoutesWithNotFound>
  );
};

export default Teacher;

/* 
tambien se peude realizar la proteccion 
de componentes, 
verificar video de faz
*/
