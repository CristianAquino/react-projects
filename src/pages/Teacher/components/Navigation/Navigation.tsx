"use client";

import { Container } from "./styled-components";

export type NavigationProps = {
  // types...
  children: React.ReactNode;
};

const Navigation = ({ children }: NavigationProps) => {
  return (
    <Container>
      <p>logo</p>
      {children}
    </Container>
  );
};

export default Navigation;
