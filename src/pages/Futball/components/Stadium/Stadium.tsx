"use client";

import { Cancha } from "./styled-components";

export type StadiumProps = {
  // types...
};

const Stadium = ({}: StadiumProps) => {
  return (
    <div style={{ display: "flex", placeContent: "center" }}>
      <Cancha />
    </div>
  );
};

export default Stadium;
