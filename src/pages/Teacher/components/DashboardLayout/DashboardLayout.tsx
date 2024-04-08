"use client";

import { SEO } from "@app/components";
import {
  PiArrowBendDownRight,
  PiExamThin,
  PiHandThin,
  PiNotebookThin,
  PiStudentThin,
  PiUserCircleThin,
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
      icon: <PiUserCircleThin />,
      links: [
        { name: "profile", link: "me/profile" },
        { name: "update data", link: "me/update" },
      ],
    },
    {
      title: "course",
      icon: <PiNotebookThin />,
      links: [
        { name: "register course", link: "course/register" },
        { name: "list courses", link: "course/list" },
      ],
    },
    {
      title: "student",
      icon: <PiStudentThin />,
      links: [
        { name: "info student", link: "student/info" },
        { name: "register student", link: "student/register" },
      ],
    },
    {
      title: "attendance",
      icon: <PiHandThin />,
      links: [{ name: "register attendance", link: "attendance/search" }],
    },
    {
      title: "calification",
      icon: <PiExamThin />,
      links: [{ name: "register calification", link: "calification/search" }],
    },
  ];

  return (
    <div style={{ display: "flex", padding: "1rem" }}>
      {/* SEO */}
      <SEO
        title={"Dashboard | Teacher"}
        description={
          "dashboard page for teachers created by CRdev where CRUD actions will be carried out for students, courses, grades and attendance"
        }
      />
      <MenuNavigate>
        {navigation.map(({ title, links, icon }) => (
          <Detail key={title} open>
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
      </MenuNavigate>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
