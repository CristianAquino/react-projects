"use client";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
export type LayoutTeacherProps = {
  // types...
};

const LayoutTeacher = ({}: LayoutTeacherProps) => {
  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>Home | Teacher</title>
        <meta
          name="description"
          content="main page of the project for teachers created by CRdev where actions such as student registration, courses, grades and attendance will be carried out"
        />
      </Helmet>
      <Outlet />
    </div>
  );
};

export default LayoutTeacher;
