import { BrowserRouter, Route } from "react-router-dom";
import { RoutesWithNotFound } from "@guards/index";
import { PROYECTS_ROUTE } from "@routes/index";
import { Suspense, lazy } from "react";
import "@app/App.css";
import { Loading } from "@components/Loading";

const Ecommerce = lazy(() => import("@pages/Ecommerce/Ecommerce"));
const Gifs = lazy(() => import("@pages/Gifs/Gifs"));

function App() {
  return (
    <BrowserRouter>
      <RoutesWithNotFound message="Proyect not found">
        <Route
          path={`${PROYECTS_ROUTE.ECOMMERCE}/*`}
          element={
            <Suspense fallback={<Loading />}>
              <Ecommerce />
            </Suspense>
          }
        />
        <Route
          path={`${PROYECTS_ROUTE.GIFS}/*`}
          element={
            <Suspense fallback={<Loading />}>
              <Gifs />
            </Suspense>
          }
        />
      </RoutesWithNotFound>
    </BrowserRouter>
  );
}

export default App;
