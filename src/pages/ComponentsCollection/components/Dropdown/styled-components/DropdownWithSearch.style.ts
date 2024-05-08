import styled from "styled-components";

const ContainerDrop = styled.div`
  min-inline-size: 120px;
  max-inline-size: 90%;
  inline-size: 320px;
  position: relative;
  padding: 0.5rem;
  block-size: 58px;
  border-radius: 0.5rem;
  background-color: #333;
  margin-inline-start: 2rem;

  input {
    inline-size: 100%;
    border: none;
    border-block-end: 1px solid var(--blue);
    background-color: #222a;
    outline: none;
    padding: 0.5rem;
    caret-color: var(--blue);

    &::placeholder {
      color: #ccc5;
    }
  }
  ul {
    position: absolute;
    inline-size: 320px;
    max-block-size: 21rem;
    inset-block-start: 3.25rem;
    inset-inline-start: 0;
    list-style: none;
    overflow: hidden;
    overflow-y: scroll;
    scrollbar-color: var(--blue) #333a;
    scrollbar-width: thin;
    background-color: #333;
    padding: 0.5rem;

    li {
      padding: 0.5rem;
      border-radius: 0.5rem;
      background-color: #222a;
      margin-block-end: 0.25rem;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:last-child {
        margin-block-end: initial;
      }
      img {
        inline-size: 2.5rem;
      }
      svg {
        inline-size: 2.5rem;
        block-size: 2.5rem;
      }
    }
  }
`;

export { ContainerDrop };
