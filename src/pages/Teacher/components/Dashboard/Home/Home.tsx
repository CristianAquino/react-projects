"use client";

import { Outlet } from "react-router-dom";

export type HomeProps = {
  // types...
};

const Home = ({}: HomeProps) => {
  return (
    <div style={{ width: "70%", height: "100%" }}>
      <Outlet />
    </div>
  );
};

export default Home;
