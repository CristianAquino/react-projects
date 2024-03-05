import { useIntersectionObserver } from "@app/hooks";
import { useCallback, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { ListOfGifs } from "..";
import { useGifs } from "../../hooks";
import { SectionTitle } from "../Home/style-components";

export type SearchOfResultsProps = {};

const SearchOfResults = ({}: SearchOfResultsProps) => {
  const { keyword } = useParams();
  const { gifs, setPage } = useGifs(keyword as string);
  const { isIntersecting, elementRef } = useIntersectionObserver({});

  const handleNextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, [setPage]);

  useEffect(() => {
    if (isIntersecting) handleNextPage();
  }, [isIntersecting]);

  return (
    <>
      <Helmet>
        <title>Results of {keyword} | Gifs</title>
        <meta
          name="description"
          content={`results obtained when performing the ${keyword} search`}
        />
      </Helmet>
      <SectionTitle>{keyword}</SectionTitle>
      {gifs.length == 0 ? (
        <p>
          <Helmet>
            <title>loading... | Gifs</title>
          </Helmet>
          Loading...
        </p>
      ) : (
        <ListOfGifs gifs={gifs} />
      )}
      <div ref={elementRef}></div>
    </>
  );
};

export default SearchOfResults;
