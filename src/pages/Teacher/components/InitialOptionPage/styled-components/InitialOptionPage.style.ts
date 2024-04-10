import styled from "styled-components";
import { Container } from "../../Dashboard/Home/styled-components";
import { Link } from "react-router-dom";

const InitialContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  block-size: 100%;
  inline-size: 100%;
`;
const InitialSuggestion = styled.div`
  inline-size: max(15rem, 64%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding: 0.5rem;
  &:hover {
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: #1567ff1c;
  }
`;
const InitialLink = styled(Link)`
  text-decoration: none;
  background-color: #1567ff;
  border-radius: 0.5rem;
  padding: 0.25rem 1rem;
  color: #fff;
`;

export { InitialContainer, InitialSuggestion, InitialLink };
