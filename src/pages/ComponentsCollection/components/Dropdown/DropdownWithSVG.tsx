("use client");
import { ChangeEvent, useState } from "react";
import { Container, Content, ItemSVG, List, Title } from "./styled-components";

type Card = {
  name: string;
  svg: React.ReactNode;
};

export type DropdownWithSVGProps = {
  // types...
  list: Card[];
  onchange: (value: React.ReactNode) => void;
};

const DropdownWithSVG = ({ list, onchange }: DropdownWithSVGProps) => {
  const [select, setSelect] = useState("Select your playstyle");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Card[]>(list);

  function handleSelect(name: string, svg: React.ReactNode) {
    setSelect(name);
    onchange(svg);
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
            <ItemSVG
              onClick={() => handleSelect(item.name, item.svg)}
              key={item.name}
            >
              <p>{item.name}</p>
              <span></span>
              {item.svg}
            </ItemSVG>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default DropdownWithSVG;
