"use client";

import { Login, Register } from "..";

export type HomeProps = {
  // types...
};

const Home = ({}: HomeProps) => {
  return (
    <div>
      <Register />
      <Login />
    </div>
  );
};

export default Home;
