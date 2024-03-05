import { Link } from "react-router-dom";
import styled from "styled-components";

const CategoryUl = styled.ul`
  --minSize: 1rem;
  --mediumSize: calc(0.5rem + 1vw);
  --maxSize: 2rem;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  font-size: clamp(var(--minSize), var(--mediumSize), var(--maxSize));
`;

const CategoryLi = styled.li<{ $colorLink: string }>`
  --bgColor: ${(props) => props.$colorLink};
  background-color: var(--bgColor);
  border-radius: 0.5rem;

  &:active {
    box-shadow: 0 0 20px var(--bgColor);
  }

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 0 20px var(--bgColor);
    }
  }
`;

const CategoryLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  display: block;
  padding: 1rem 1.5rem;
`;
export { CategoryUl, CategoryLi, CategoryLink };
