import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuNavigate = styled.section`
  --min: 0.75rem;
  --mid: calc(1rem + 1vw);
  --max: 2.5rem;
  inline-size: 30%;
  block-size: 100%;
  position: sticky;
  inset-block-start: 0;
  font-size: clamp(var(--min), var(--mid), var(--max));
  text-transform: capitalize;
`;
const Detail = styled.details`
  inline-size: max(40%, 80%);
  border-radius: 0.5rem;
  position: relative;
  margin-block-end: 1rem;

  &[open] > summary::after {
    content: "";
    position: absolute;
    inset-block-end: 0.5rem;
    inset-inline-start: 0;
    inline-size: 100%;
    border: 1px solid #1567ff;
  }
`;
const Summary = styled.summary`
  position: relative;
  list-style: none;
  font-weight: bold;
  padding-block: 0.25rem;
  cursor: pointer;
  & span:last-child {
    margin-inline-start: 0.5rem;
    vertical-align: 2px;
  }

  &:hover::after {
    content: "";
    position: absolute;
    inset-block-end: 0.5rem;
    inset-inline-start: 0;
    inline-size: 100%;
    border: 1px solid #1567ff;
  }
`;
const ContentList = styled.ul`
  list-style: none;
`;
const List = styled.li`
  --min: 0.5rem;
  --mid: calc(1rem + 1vw);
  --max: 1.5rem;
  text-indent: 1rem;
  font-size: clamp(var(--min), var(--mid), var(--max));
  padding-block: 0.5rem;
`;
const Action = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  color: #fff;
`;
export { Action, ContentList, Detail, List, MenuNavigate, Summary };
