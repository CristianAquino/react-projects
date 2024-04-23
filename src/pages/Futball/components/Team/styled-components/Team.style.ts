import styled from "styled-components";

const Details = styled.details`
  margin-block-end: 0.5rem;
  summary {
    padding: 0.5rem;
    background-color: #333a;
    border-radius: 0.5rem;
  }
  summary::marker {
    content: none;
  }
`;
const Player = styled.label`
  --w: 4.5rem;
  display: inline-block;
  inline-size: var(--w);
  block-size: var(--w);
  border-radius: 50%;
  border: 1px solid white;
  img {
    inline-size: 4.5rem;
    block-size: 4.5rem;
    border-radius: 50%;
  }
`;
const ListPlayer = styled.ul`
  block-size: 0;
  inline-size: 200px;
  overflow: hidden;
  overflow-y: scroll;
  transition: block-size 0.3s ease-in-out;
  position: absolute;
  inset-block-start: 4.5rem;
  inset-inline-start: 0;
  padding: 0 0.5rem;
  z-index: 2;
`;
const ItemPlayer = styled.li`
  list-style: none;
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid white;

  &:last-child {
    border-bottom: none;
  }

  img {
    inline-size: 2.5rem;
    block-size: 2.5rem;
    border-radius: 50%;
  }
`;

const ListPlayerData = styled(ListPlayer)`
  position: initial;
  block-size: initial;
  max-block-size: 64vh;
  overflow: hidden;
  overflow-y: scroll;
  inline-size: 23vw;
  scrollbar-width: thin;
  scrollbar-color: #333a #222a;
  padding: 0 1rem;
  border-radius: 0 0 0.5rem 0.5rem;
  border: 1px solid #333a;
  border-block-start-color: transparent;
`;

export { Details, ItemPlayer, ListPlayer, ListPlayerData, Player };
