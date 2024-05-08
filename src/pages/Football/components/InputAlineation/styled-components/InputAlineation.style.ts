import styled from "styled-components";

const ContainerActions = styled.div`
  inline-size: 100%;
  display: flex;
  place-content: center;
  justify-content: start;
  gap: 0.25rem;

  input {
    border: none;
    outline: none;
    border-block-end: 1px solid #fff;
    background-color: #333a;
    padding-inline: 0.5rem;
    &:focus {
      border: 1px solid var(--blue);
      border-radius: 0.5rem;
      caret-color: var(--blue);
    }
  }
`;
const ActionButton = styled.button`
  inline-size: 2rem;
  block-size: 2rem;
  border: none;
  outline: none;
  border-radius: 0.25rem;
  background-color: #333a;

  &:focus {
    border: 1px solid var(--blue);
    outline: var(--blue);
  }

  svg {
    display: block;
    margin: 0 auto;
  }
`;

export { ActionButton, ContainerActions };
