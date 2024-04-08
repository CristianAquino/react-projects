import styled from "styled-components";

const Datos = styled.section`
  max-inline-size: 100%;
  background-color: #00aeff;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
`;

const Data = styled.p`
  padding: 0.25rem 0;
  & span span svg {
    color: red;
    vertical-align: -3px;
    margin-inline-start: 0.5rem;
    cursor: pointer;
  }
  & span:first-child {
    font-weight: bold;
    text-transform: capitalize;
  }
`;

export { Datos, Data };
