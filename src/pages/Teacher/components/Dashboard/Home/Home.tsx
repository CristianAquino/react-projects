"use client";

import { Outlet } from "react-router-dom";

export type HomeProps = {
  // types...
};

const Home = ({}: HomeProps) => {
  return (
    <div
      style={{ inlineSize: "70%", blockSize: "100%", paddingInline: "1rem" }}
    >
      <Outlet />
    </div>
  );
};

export default Home;
