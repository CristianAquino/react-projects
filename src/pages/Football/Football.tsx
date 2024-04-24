"use client";

import { RoutesWithNotFound } from "@app/guards";
import { PROYECTS_ROUTE } from "@app/routes";
import { lazy } from "react";
import { Route } from "react-router-dom";

const Home = lazy(() => import("./components/Home/Home"));

export type FootballProps = {
  // types...
};

const Football = ({}: FootballProps) => {
  return (
    <RoutesWithNotFound
      message="Page not found"
      pageRedirect={PROYECTS_ROUTE.FOOTBALL}
    >
      <Route path={PROYECTS_ROUTE.HOME} element={<Home />} />
    </RoutesWithNotFound>
  );
};

export default Football;
