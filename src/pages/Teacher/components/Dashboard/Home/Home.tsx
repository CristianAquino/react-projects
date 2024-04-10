"use client";

import { Outlet } from "react-router-dom";
import { Container } from "./styled-components";

export type HomeProps = {
  // types...
};

const Home = ({}: HomeProps) => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Home;
