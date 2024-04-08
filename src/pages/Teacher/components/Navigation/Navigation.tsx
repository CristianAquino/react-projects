"use client";

import { TeacherLogo } from "@app/assets/teacherLogo";
import { Container } from "./styled-components";

export type NavigationProps = {
  // types...
  children: React.ReactNode;
};

const Navigation = ({ children }: NavigationProps) => {
  return (
    <Container>
      <TeacherLogo />
      {children}
    </Container>
  );
};

export default Navigation;
