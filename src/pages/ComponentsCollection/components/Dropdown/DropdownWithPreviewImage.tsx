"use client";
import { ChangeEvent, useState } from "react";
import { Container, Content, Item, List, Title } from "./styled-components";

type Card = {
  card: {
    name: string;
    image: string;
  };
  style: {
    background: string;
    color: string;
  };
};

export type DropdownWithPreviewImageProps = {
  // types...
  list: Card[];
  onchange: ({ card }: Card) => void;
};

const DropdownWithPreviewImage = ({
  list,
  onchange,
}: DropdownWithPreviewImageProps) => {
  const [select, setSelect] = useState("Select your card");
  const [search, setSearch] = useState("");

  function handleSelect(value: Card) {
    const { card } = value;
    setSelect(card.name);
    onchange(value);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
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
          {list
            .filter(({ card }) => {
              if (search === "") return true;
              return card.name
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase());
            })
            .map((value) => (
              <Item onClick={() => handleSelect(value)} key={value.card.name}>
                <p>{value.card.name}</p>
                <img src={value.card.image} alt="" />
              </Item>
            ))}
        </List>
      </Content>
    </Container>
  );
};

export default DropdownWithPreviewImage;
