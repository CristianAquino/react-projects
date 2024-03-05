import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormSearch } from "./styled-components";

export type SearchFormProps = {};

const SearchForm = ({}: SearchFormProps) => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/proyects/gifs/${keyword}`);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value);
  }

  return (
    <FormSearch onSubmit={onSubmit}>
      <input
        type="text"
        value={keyword}
        onChange={handleChange}
        placeholder="into name gif"
        aria-label="into name gif"
      />
      <input type="submit" value="Search" />
    </FormSearch>
  );
};

export default SearchForm;
