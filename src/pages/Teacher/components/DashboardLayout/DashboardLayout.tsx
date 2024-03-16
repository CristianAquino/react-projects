"use client";

import { Helmet } from "react-helmet";
import { Link, NavLink, Outlet } from "react-router-dom";

export type DashboardLayoutProps = {
  // types...
};

const DashboardLayout = ({}: DashboardLayoutProps) => {
  return (
    <div style={{ display: "flex" }}>
      {/* SEO */}
      <Helmet>
        <title>Dashboard | Teacher</title>
        <meta
          name="description"
          content="dashboard page for teachers created by CRdev where CRUD actions will be carried out for students, courses, grades and attendance"
        />
      </Helmet>
      <section style={{ width: "30%", height: "100%" }}>
        <details>
          <summary>Me</summary>
          <hr />
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? { color: "red" } : {})}
                to={"me/profile"}
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </details>
        <details>
          <summary>Course</summary>
          <hr />
          <ul>
            <li>
              <Link to={"course/register"}>Register Course</Link>
            </li>
            <li>
              <Link to={"course/list"}> List Course</Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>Student</summary>
          <hr />
          <ul>
            <li>
              <Link to={"student/info"}>Info Student</Link>
            </li>
            <li>
              <Link to={"student/register"}>Register Student</Link>
            </li>
          </ul>
        </details>
        <details>
          <summary>Calification</summary>
          <hr />
          <ul>
            <li>Create Calification</li>
          </ul>
        </details>
        <details>
          <summary>Attendance</summary>
          <hr />
          <ul>
            <li>Create Attendance</li>
          </ul>
        </details>
      </section>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
