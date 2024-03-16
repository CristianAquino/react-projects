import { Link } from "react-router-dom";
import styled from "styled-components";

const Table = styled.table`
  inline-size: 100%;
  border-collapse: collapse;
`;

const Tr = styled.tr`
  &:hover {
    background-color: #1567ff;
  }
`;
const Th = styled.th`
  text-align: start;
  padding: 0.5rem;
  border: 1px solid #fff;
  text-transform: capitalize;
`;

const Td = styled.td`
  text-align: start;
  padding: 0.5rem;
  border: 1px solid #fff;
  text-transform: capitalize;
`;

const LinkData = styled(Link)`
  inline-size: 100%;
  block-size: 100%;
  display: inline-block;
  text-decoration: none;
  color: #fff;
`;

export { LinkData, Table, Td, Th, Tr };
