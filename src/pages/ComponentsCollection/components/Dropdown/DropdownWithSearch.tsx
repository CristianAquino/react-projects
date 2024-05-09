import { useState } from "react";
import { ContainerDrop } from "./styled-components";

interface List {
  name: string;
  image?: string;
  background?: string;
  color?: string;
  svg?: any;
}

export type DropdownWithProps = {
  list: List[];
  type?: string;
  onChange?: any;
  pos?: number;
  placeholder?: string;
};

const DropdownWithSearch = ({
  type = "",
  list,
  onChange,
  pos = 0,
  placeholder = "search your card",
}: DropdownWithProps) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ContainerDrop>
      <input
        type="text"
        value={search}
        placeholder={placeholder}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      />
      {isOpen && (
        <ul>
          {list.filter((element) => {
            if (search == "") return true;
            return element.name
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase());
          }).length === 0 ? (
            <li key={"none"}>no hay elementos</li>
          ) : (
            list
              .filter((element) =>
                element.name
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
              )
              .map((element) => (
                <li
                  key={element.name}
                  onMouseDown={() => {
                    onChange({ card: element, pos });
                    setSearch(element.name);
                    setIsOpen(false);
                  }}
                >
                  <span>{element.name}</span>
                  {type === "image" && (
                    <img src={element.image} alt={element.name} />
                  )}
                  {type === "svg" && element.svg}
                </li>
              ))
          )}
        </ul>
      )}
    </ContainerDrop>
  );
};
export default DropdownWithSearch;
