"use client";

import { RoutesWithNotFound } from "@app/guards";
import { PROYECTS_ROUTE } from "@app/routes";
import { lazy } from "react";
import { Route } from "react-router-dom";
import { DropdownWithSearch } from "./components/Dropdown";

export type ComponentsCollectionProps = {
  // types...
};

const Home = lazy(() => import("./components/Home/Home"));

const ComponentsCollection = ({}: ComponentsCollectionProps) => {
  return (
    <RoutesWithNotFound
      message="Page not found"
      pageRedirect={PROYECTS_ROUTE.COMPONENT}
    >
      <Route path={PROYECTS_ROUTE.HOME} element={<DropdownWithSearch />} />
    </RoutesWithNotFound>
  );
};

export default ComponentsCollection;
