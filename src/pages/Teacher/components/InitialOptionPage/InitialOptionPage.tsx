"use client";

import {
  InitialContainer,
  InitialLink,
  InitialSuggestion,
} from "./styled-components";

export type InitialOptionPageProps = {
  // types...
};

const InitialOptionPage = ({}: InitialOptionPageProps) => {
  const initial = [
    {
      title: "Do you want to add a new course?",
      link: "course/register",
    },
    {
      title: "Do you want to add new students to a course?",
      link: "student/register",
    },
    {
      title: "Do you want to take the attendance of students of a course?",
      link: "attendance/search",
    },
    {
      title:
        "Do you want to record the notes of students who belong to a course?",
      link: "calification/search",
    },
  ];
  return (
    <InitialContainer>
      {initial.map((item) => (
        <InitialSuggestion key={item.link}>
          <p>{item.title}</p>
          <InitialLink to={item.link}>click me</InitialLink>
        </InitialSuggestion>
      ))}
    </InitialContainer>
  );
};

export default InitialOptionPage;
