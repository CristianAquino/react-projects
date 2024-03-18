import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  inline-size: max(320px, 1200px);
  block-size: 80px;
  padding: 1rem;
  border-block-end: 1px solid #ccc;
  & section > button {
    border-radius: 0.5rem;
    color: #fff;
    background-color: #1567ff;
    margin-inline-start: 0.5rem;
    border: none;
    padding: 0.5rem;
    text-transform: capitalize;
    cursor: pointer;
  }
  & section > button:hover {
    background-color: #0d4dff;
  }
`;

export { Container };
