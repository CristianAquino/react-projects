import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuNavigate = styled.section`
  inline-size: 30%;
  block-size: 100%;
  position: sticky;
  inset-block-start: 0;
  font-size: 1.5rem;
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
    inset-inline-start: 1rem;
    inline-size: 100%;
    border: 1px solid #1567ff;
  }
`;
const Summary = styled.summary`
  position: relative;
  list-style: none;
  font-weight: bold;
  padding-inline-start: 1rem;
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
    inset-inline-start: 1rem;
    inline-size: 100%;
    border: 1px solid #1567ff;
  }
`;
const ContentList = styled.ul`
  list-style: none;
`;
const List = styled.li`
  text-indent: 3rem;
  font-size: 1.25rem;
  padding-block: 0.5rem;
`;
const Action = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  color: #fff;
`;
export { Action, ContentList, Detail, List, MenuNavigate, Summary };
