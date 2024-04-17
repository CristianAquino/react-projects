import styled, { css } from "styled-components";

const Base = styled.p<{ shape?: string }>`
  --size: 3rem;
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

  @media (width<=320px) {
    --size: 2rem;
    --b: 0.25rem;
    font-size: 1.25rem;
  }
`;

const BaseAvatar = styled(Base)``;
const BaseAvatarIcon = styled(Base)``;
const BaseAvatarImage = styled(Base)`
  overflow: hidden;
  img {
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
    aspect-ratio: 1/1;
  }
`;

const Container = styled.section<{ type?: string }>`
  --margin-right: 1rem;
  min-inline-size: 20rem;
  display: flex;
  flex-wrap: wrap;
  padding-inline-start: var(--margin-right);
  & > * {
    transition: scale 500ms;
    margin: 0 0 0 calc(var(--margin-right) * -1);
    &:hover {
      scale: 1.25;
      z-index: 2;
    }
    ${(props) => {
      switch (props.type) {
        case "hover-scale":
          return css`
            &:has(+ *:hover),
            &:hover + * {
              scale: 1.125;
            }
          `;
      }
    }}
  }
`;
export { BaseAvatar, BaseAvatarIcon, BaseAvatarImage, Container };
