"use client";

import { Helmet } from "react-helmet";
import {
  PiArrowBendDownRight,
  PiNotebook,
  PiStudent,
  PiUserCircle,
} from "react-icons/pi";
import { Outlet } from "react-router-dom";
import {
  Action,
  ContentList,
  Detail,
  List,
  MenuNavigate,
  Summary,
} from "./styled-components";

export type DashboardLayoutProps = {
  // types...
};

const DashboardLayout = ({}: DashboardLayoutProps) => {
  const navigation = [
    {
      title: "me",
      icon: <PiUserCircle />,
      links: [{ name: "profile", link: "me/profile" }],
    },
    {
      title: "course",
      icon: <PiNotebook />,
      links: [
        { name: "register course", link: "course/register" },
        { name: "list courses", link: "course/list" },
      ],
    },
    {
      title: "student",
      icon: <PiStudent />,
      links: [
        { name: "info student", link: "student/info" },
        { name: "register student", link: "student/register" },
      ],
    },
  ];

  return (
    <div style={{ display: "flex", padding: "1rem" }}>
      {/* SEO */}
      <Helmet>
        <title>Dashboard | Teacher</title>
        <meta
          name="description"
          content="dashboard page for teachers created by CRdev where CRUD actions will be carried out for students, courses, grades and attendance"
        />
      </Helmet>
      <MenuNavigate>
        {navigation.map(({ title, links, icon }) => (
          <Detail key={title} open={title === "me" ? true : false}>
            <Summary>
              <span>{icon}</span>
              <span>{title}</span>
            </Summary>
            <ContentList>
              {links.map(({ name, link }) => (
                <List key={name}>
                  <Action
                    style={({ isActive }) =>
                      isActive ? { color: "#00aeff" } : {}
                    }
                    to={link}
                  >
                    <PiArrowBendDownRight />
                    {name}
                  </Action>
                </List>
              ))}
            </ContentList>
          </Detail>
        ))}
        {/* <details>
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
        </details> */}
      </MenuNavigate>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
