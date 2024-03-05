import { Route } from "react-router-dom";
import { RoutesWithNotFound } from "@guards/index";
import { PROYECTS_ROUTE, PUBLIC_ROUTE } from "@routes/index";
import { Ecommerce } from "./pages/Ecommerce";
import { Suspense, lazy } from "react";
const Gifs = lazy(() => import("./pages/Gifs/Gifs"));

export type ProyectsProps = {};

const Proyects = ({}: ProyectsProps) => {
  return (
    <RoutesWithNotFound
      message="Proyect not found"
      pageRedirect={PUBLIC_ROUTE.PROYECTS}
    >
      <Route path={PUBLIC_ROUTE.HOME} element={<div>Proyects</div>} />
      <Route
        path={`${PROYECTS_ROUTE.ECOMMERCE}/*`}
        element={
          <Suspense fallback={<h1>Load Page of Ecommerce</h1>}>
            <Ecommerce />
          </Suspense>
        }
      />
      <Route
        path={`${PROYECTS_ROUTE.GIFS}/*`}
        element={
          <Suspense fallback={<h1>Load Page of Gifs</h1>}>
            <Gifs />
          </Suspense>
        }
      />
    </RoutesWithNotFound>
  );
};

export default Proyects;
