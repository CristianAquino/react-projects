"use client";
import { ChangeEvent, useState } from "react";
import { Container, Content, Item, List, Title } from "./styled-components";

type Card = {
  name: string;
  image: string;
};

export type DropdownProps = {
  // types...
  list: Card[];
};

const Dropdown = ({ list }: DropdownProps) => {
  const [select, setSelect] = useState("Select your card");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Card[]>(list);

  function handleSelect(name: string) {
    setSelect(name);
  }

  function handleSearch(value: string) {
    if (value === "") setFilter(list);
    setFilter(
      list.filter((item) =>
        item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      )
    );
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    handleSearch(e.target.value);
  }

  return (
    <Container>
      <Title>{select}</Title>
      <Content>
        <input
          type="text"
          placeholder="insert name card"
          value={search}
          onChange={handleChange}
        />
        <List>
          {filter?.map((item) => (
            <Item onClick={() => handleSelect(item.name)} key={item.name}>
              <p>{item.name}</p>
              <img src={item.image} alt="" />
            </Item>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default Dropdown;
