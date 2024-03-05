import { Route } from "react-router-dom";
import { RoutesWithNotFound } from "@guards/index";
import { PUBLIC_ROUTE } from "@routes/index";

export type ComponentsProps = {};

const Components = ({}: ComponentsProps) => {
  return (
    <RoutesWithNotFound
      message="Component not found"
      pageRedirect={PUBLIC_ROUTE.COMPONENTS}
    >
      <Route path={PUBLIC_ROUTE.HOME} element={<div>Components</div>} />
      {/* <Route path={PROYECTS_ROUTE.ECOMMERS} element={<div>Ecommerse</div>} /> */}
    </RoutesWithNotFound>
  );
};

export default Components;
