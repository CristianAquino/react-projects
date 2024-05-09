import styled from "styled-components";

const Box = styled.div`
  position: relative;
  position: sticky;
  inset-block-start: 2rem;
  /* block-size: 432px; */
  inline-size: 330px;
`;
const TopLeft = styled.div`
  position: absolute;
  inset-block-start: 5rem;
  inset-inline-start: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-size: 2rem;
  line-height: 1;
  color: var(--colorCardFC);
  /* img {
    inline-size: 2.5rem;
    transform: translateY(-0.5rem);
  } */
  svg {
    inline-size: 2.5rem;
    block-size: 2rem;
    transform: translateY(-0.25rem);
  }
  span {
    text-align: center;
  }
  span:nth-child(2) {
    font-size: 1rem;
  }
`;
const LeftCenter = styled.div`
  position: absolute;
  inset-block-start: 13.75rem;
  inset-inline-start: 0.7rem;
  display: flex;
  flex-direction: column;
  /* img {
    inline-size: 2.5rem;
  }
  img:nth-child(2) {
    transform: translateY(-0.65rem);
  }
  img:nth-child(3) {
    transform: translateY(-1.3rem);
  } */
  svg {
    inline-size: 2.5rem;
    block-size: 2.5rem;
  }
  svg:nth-child(2) {
    transform: translateY(-0.65rem);
  }
  svg:nth-child(3) {
    transform: translateY(-1.3rem);
  }
`;
const RightCenter = styled.div`
  position: absolute;
  inset-block-start: 13.75rem;
  inset-inline-end: 0.7rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.5rem;
  line-height: 1;
  color: var(--colorCardFC);

  div {
    background-color: var(--backgroundCardFC);
  }
  p {
    padding: 0.1rem 0.4rem;
    text-transform: uppercase;
  }
  p:nth-child(1) {
    font-size: 0.5rem;
  }
  p:nth-child(2) {
    font-size: 0.75rem;
  }
`;
const Attributes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block-end: 0.5rem;
  text-align: center;
`;
const Attribute = styled.p`
  span {
    display: block;
    line-height: 1.1;
  }
  span:nth-child(1) {
    font-size: 0.75rem;
  }
  span:nth-child(2) {
    font-size: 1.25rem;
  }
`;
const Flags = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  img {
    inline-size: 1.3rem;
  }
  img:first-child {
    block-size: 1.1rem;
  }
`;

const Bottom = styled.footer`
  position: absolute;
  color: var(--colorCardFC);
  inset-inline: 3rem;
  /* block-size: 130px; */
  block-size: 164px;
  inset-block-end: 0;
  z-index: 2;
  & > p {
    text-align: center;
    font-size: 1.5rem;
  }
`;
const Player = styled.div`
  block-size: 256px;
  position: absolute;
  inset-inline: 3rem;
  inset-block-start: 50px;
  overflow: hidden;
  z-index: 1;

  img {
    position: absolute;
    block-size: 100%;
    filter: drop-shadow(0 0 1rem var(--backgroundCardFC));
    object-fit: cover;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export {
  Attribute,
  Attributes,
  Bottom,
  Box,
  Flags,
  LeftCenter,
  Player,
  RightCenter,
  TopLeft,
};

// :root {
//   --color-primary: blue;
// }

// document.querySelector(":root").style.setProperty("--color-primary", "red");
