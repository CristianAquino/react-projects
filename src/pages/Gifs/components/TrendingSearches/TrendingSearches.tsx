import { useEffect, useState } from "react";
import { getTrending } from "../../services";
import { Category } from "..";

export type TrendingSearchesProps = {};

const TrendingSearches = ({}: TrendingSearchesProps) => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    async function trend() {
      const data = await getTrending();
      setTrends(data);
    }

    trend();
  }, []);

  return <Category options={trends} />;
};

export default TrendingSearches;
