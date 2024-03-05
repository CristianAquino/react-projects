import { Suspense, lazy } from "react";
import { useGifs } from "../../hooks";
import { SectionTitle } from "./style-components";

const TrendingSearches = lazy(
  () => import("../TrendingSearches/TrendingSearches")
);
const ListOfGifs = lazy(() => import("../ListOfGifs/ListOfGifs"));

export type HomeProps = {};

const Home = ({}: HomeProps) => {
  const { gifs } = useGifs();

  return (
    <>
      <SectionTitle>Trending</SectionTitle>
      <Suspense fallback={<h1>Loading Trending Searches</h1>}>
        <TrendingSearches />
      </Suspense>
      <SectionTitle>Last Search</SectionTitle>
      <Suspense fallback={<h1>Loading Last Searches</h1>}>
        <ListOfGifs gifs={gifs} />
      </Suspense>
    </>
  );
};

export default Home;
