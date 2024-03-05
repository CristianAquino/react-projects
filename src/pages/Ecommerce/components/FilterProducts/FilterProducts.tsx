import { TbBrandCashapp, TbCategory } from "react-icons/tb";
import { Link, useSearchParams } from "react-router-dom";
import {
  Filter,
  ItemFilter,
  ListFilter,
  TitleFilter,
} from "./styled-components";

export type FilterProductsProps = {};

const FilterProducts = ({}: FilterProductsProps) => {
  const categoryVarians = ["All", "Clothes", "Shoes"];
  const priceVariants = ["$0 - $50", "$50 - $100", "$100 - $150"];
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || categoryVarians[0];
  const price = searchParams.get("price") || priceVariants[0];

  return (
    <Filter>
      <section>
        <TitleFilter>
          <TbCategory />
          categories
        </TitleFilter>
        <ListFilter>
          {categoryVarians.map((item, index) => (
            <ItemFilter
              key={index}
              className={`${item == category ? "active" : null}`}
            >
              {/* <label onClick={() => setCategory(item)}>
                <input type="radio" name="category" hidden />
                {item}
              </label> */}
              <Link to={`?category=${item}&price=${price}`} replace>
                {item}
              </Link>
            </ItemFilter>
          ))}
        </ListFilter>
      </section>
      <section>
        <TitleFilter>
          <TbBrandCashapp />
          Price
        </TitleFilter>
        <ListFilter>
          {priceVariants.map((item, index) => (
            <ItemFilter
              key={index}
              className={`${item == price ? "active" : null} `}
            >
              {/* <label onClick={() => setPrice(item)}>
                <input type="radio" name="category" hidden />
                {item}
              </label> */}
              <Link to={`?category=${category}&price=${item}`} replace>
                {item}
              </Link>
            </ItemFilter>
          ))}
        </ListFilter>
      </section>
    </Filter>
  );
};

export default FilterProducts;
