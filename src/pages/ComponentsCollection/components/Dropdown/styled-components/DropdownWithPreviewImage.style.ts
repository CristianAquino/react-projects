import styled from "styled-components";

const Container = styled.div`
  --w: 18.5rem;
  --h: 2.5rem;
  max-inline-size: var(--w);
  inline-size: var(--w);
  block-size: var(--h);
  border: 1px solid #fff;
  border-radius: 0.5rem;
  transition: block-size 0.3s ease-in-out;
  overflow: hidden;
  position: relative;

  &:hover {
    overflow: initial;
    transition-delay: 0.15s;
    z-index: 10;
  }
  &:hover > section {
    block-size: 356px;
    transition-delay: 0.15s;
    background-color: var(--darkMode);
    border: 1px solid white;
    border-top-color: transparent;
    border-radius: 0 0 0.5rem 0.5rem;
  }
`;

const Title = styled.p`
  padding: 0.5rem;
  margin-inline: 0.5rem;
  border-block-end: 1px solid #333a;
  text-align: start;
`;

const Content = styled.section`
  padding: 0.5rem;
  block-size: 0;
  overflow: hidden;
  transition: block-size 0.3s ease-in-out;

  input {
    margin-block-end: 0.5rem;
    inline-size: 100%;
    background-color: #222a;
    outline: none;
    border: none;
    border-block-end: 1px solid #fff;
    padding: 0.5rem;
  }
  input:focus {
    border: 1px solid var(--blue);
    border-radius: 0.5rem;
  }
`;

const List = styled.ul`
  --h: 18rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  block-size: var(--h);
  overflow-y: scroll;
  scrollbar-color: var(--blue) #333a;
  scrollbar-width: thin;
`;

const Item = styled.li`
  padding: 0.5rem;
  background-color: #333a;
  cursor: pointer;
  border-radius: 0.5rem;
  margin-inline-end: 0.5rem;

  img {
    display: none;
    position: absolute;
    border-radius: 0.5rem;
  }
  &:hover {
    img {
      display: block;
      inset-inline-end: -18.5rem;
      inset-block-start: 0;
      inline-size: 18.5rem;
      block-size: 25rem;
    }
  }
`;
const ItemSVG = styled.li`
  padding: 0.5rem;
  background-color: #333a;
  cursor: pointer;
  border-radius: 0.5rem;
  margin-inline-end: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  span::before {
    content: "";
    position: absolute;
    inline-size: 1.5rem;
    block-size: 0.5rem;
    background-color: var(--blue);
    border-radius: 0.25rem;
    inset-block-start: 50%;
    transform: translateY(-50%);
  }
  span::after {
    content: "";
    position: absolute;
    inline-size: 0.5rem;
    block-size: 0.5rem;
    background-color: var(--blue);
    inset-block-start: 50%;
    inset-inline-end: 92px;
    transform: translateY(-50%) rotate(45deg);
  }

  svg {
    inline-size: 32px;
    block-size: 32px;
  }
`;
export { Container, Content, Item, ItemSVG, List, Title };
