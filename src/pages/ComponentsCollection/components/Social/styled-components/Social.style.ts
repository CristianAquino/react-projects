import styled from "styled-components";

const BaseSocial = styled.a<{ shape?: string; size?: string }>`
  --size: ${({ size }) => size || "3rem"};
  --b: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  inline-size: var(--size);
  block-size: var(--size);
  border-radius: ${({ shape }) => (shape === "circle" ? "50%" : "var(--b)")};
  background-color: #424b57;
  font-size: 2rem;
  cursor: pointer;
  text-decoration: none;
  color: white;

  @media (width<=320px) {
    --size: 2rem;
    --b: 0.25rem;
    font-size: 1.25rem;
  }
`;

const BaseSocialIcon = styled(BaseSocial)``;

export { BaseSocialIcon };
