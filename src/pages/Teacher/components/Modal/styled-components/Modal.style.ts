import styled from "styled-components";

const Dialog = styled.dialog`
  inline-size: max(320px, 1200px);
  block-size: 74vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;

  &::backdrop {
    backdrop-filter: blur(10px);
  }
`;

export { Dialog };
