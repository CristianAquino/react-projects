import { BsSearch } from "react-icons/bs";
import { ButtonSearch, InputSearch } from "../../style-components";
import { ChangeEvent, FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

export type SearchProductProps = {};

const SearchProduct = ({}: SearchProductProps) => {
  const [search, setSearch] = useState("");
  const [, setParams] = useSearchParams();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search !== "") {
      setParams({ search });
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div
      style={{
        width: "70%",
      }}
    >
      <form
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
        onSubmit={handleSubmit}
      >
        <InputSearch
          type="text"
          placeholder="Enter your search product"
          value={search}
          onChange={handleChange}
        />
        <ButtonSearch>
          <BsSearch />
        </ButtonSearch>
      </form>
    </div>
  );
};

export default SearchProduct;
