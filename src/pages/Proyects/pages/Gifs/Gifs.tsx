import { RoutesWithNotFound } from "@app/guards";
import { PROYECTS_ROUTE, PUBLIC_ROUTE } from "@app/routes";
import { Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Home } from "./components";
import { LayoutGifs } from "./components/LayoutGifs";

const SearchOfResults = lazy(
  () => import("./components/SearchOfResults/SearchOfResults")
);

export type GifsProps = {};

const Gifs = ({}: GifsProps) => {
  return (
    <RoutesWithNotFound
      message="Page not found"
      pageRedirect={PUBLIC_ROUTE.PROYECTS + PROYECTS_ROUTE.GIFS}
    >
      <Route path={`${PUBLIC_ROUTE.HOME}`} element={<LayoutGifs />}>
        <Route index element={<Home />} />
        <Route
          path={"/:keyword"}
          element={
            <Suspense fallback={<h1>Load Searchs...</h1>}>
              <SearchOfResults />
            </Suspense>
          }
        />
      </Route>
    </RoutesWithNotFound>
  );
};

export default Gifs;
