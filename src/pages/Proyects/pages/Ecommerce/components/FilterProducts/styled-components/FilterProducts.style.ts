import styled from "styled-components";

const Filter = styled.aside`
  width: 20%;
  height: auto;
  position: sticky;
  top: 96px;
  color: black;
  line-height: 1;
  & > section {
    padding: 1rem 0;
  }
  @media (width<=680px) {
    display: none;
  }
`;

const TitleFilter = styled.h3`
  text-transform: capitalize;
  font-size: clamp(1rem, 1rem + 0.7vw, 2rem);
  white-space: nowrap;
  padding-bottom: 1rem;
  & > svg {
    display: inline;
    margin-right: 0.5rem;
  }
`;

const ListFilter = styled.ul`
  list-style: none;
  margin-left: clamp(1rem, 1rem + 7vw, 3rem);
  font-size: clamp(1rem, 1rem + 0.5vw, 1.5rem);
  font-weight: 500;
`;
// const ItemFilter = styled(Link)`
const ItemFilter = styled.li`
  border-bottom: 1px solid var(--primary);
  &.active {
    background: var(--primary);
    border-radius: 0.5rem;
    text-align: center;
  }
  &.active > a {
    color: white;
  }
  & > a {
    display: block;
    padding: 1rem 0;
    text-decoration: none;
    color: black;
  }
`;
export { Filter, ItemFilter, ListFilter, TitleFilter };
