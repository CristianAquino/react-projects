import { useState } from "react";
import { ContainerDrop } from "./styled-components";

interface List {
  name: string;
  image?: string;
}

export type DropdownWithProps = {
  type: string;
  list: List[];
  onChange?: any;
};

const DropdownWithSearch = ({ type, list, onChange }: DropdownWithProps) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContainerDrop>
      <input
        type="text"
        value={search}
        placeholder="search your card"
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      />
      {isOpen && (
        <ul>
          {list.filter((ele) => {
            if (search == "") return true;
            return ele.name
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase());
          }).length === 0 ? (
            <li key={"none"}>no hay elementos</li>
          ) : (
            list
              .filter((ele) =>
                ele.name
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
              )
              .map((element) => (
                <li
                  key={element.name}
                  onMouseDown={() => {
                    onChange(element);
                    setSearch(element.name);
                    setIsOpen(false);
                  }}
                >
                  <span>{element.name}</span>
                  {type === "image" && (
                    <img src={element.image} alt={element.name} />
                  )}
                </li>
              ))
          )}
        </ul>
      )}
    </ContainerDrop>
  );
};
export default DropdownWithSearch;
