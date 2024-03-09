"use client";
import { RoutesWithNotFound } from "@app/guards";
import { PROYECTS_ROUTE } from "@app/routes";
import React from "react";
import { Route } from "react-router-dom";
import { Home, LayoutTeacher } from "./components";
import { axiosInterceptor } from "./interceptors";

export type TeacherProps = {
  // types...
};

axiosInterceptor();

const Teacher: React.FC<TeacherProps> = ({}) => {
  return (
    <RoutesWithNotFound
      message="Page not found"
      pageRedirect={PROYECTS_ROUTE.TEACHER}
    >
      <Route path={`${PROYECTS_ROUTE.HOME}`} element={<LayoutTeacher />}>
        <Route index element={<Home />} />
        {/* <Route path="cart" element={<CartList />} /> */}
      </Route>
    </RoutesWithNotFound>
  );
};

export default Teacher;
