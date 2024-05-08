"use client";

import { RoutesWithNotFound } from "@app/guards";
import { PROYECTS_ROUTE } from "@app/routes";
import { lazy } from "react";
import { Route } from "react-router-dom";
import { FOOTBALLPAGES } from "./routes";

const Home = lazy(() => import("./components/Home/Home"));
const Stadium = lazy(() => import("./components/Stadium/Stadium"));
const CreateCard = lazy(() => import("./components/CreateCard/CreateCard"));

export type FootballProps = {
  // types...
};

const Football = ({}: FootballProps) => {
  return (
    <RoutesWithNotFound
      message="Page not found"
      pageRedirect={PROYECTS_ROUTE.FOOTBALL}
    >
      <Route path={PROYECTS_ROUTE.HOME}>
        <Route index element={<Home />} />
        <Route path={FOOTBALLPAGES.ALINEATION} element={<Stadium />} />
        <Route path={FOOTBALLPAGES.CREATE_CARD} element={<CreateCard />} />
      </Route>
    </RoutesWithNotFound>
  );
};

export default Football;
