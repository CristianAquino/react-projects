import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.2rem;
  & input {
    border: none;
    border-block-end: 2px solid #1567ff;
    background-color: transparent;
    outline: none;
    caret-color: #1567ff;
  }
`;

export { Label };
