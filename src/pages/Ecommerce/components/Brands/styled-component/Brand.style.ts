import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  white-space: nowrap;
`;

const Slider = styled.ul`
  --slider-index: 0;
  display: flex;
  width: calc(100% - 2 * 2rem);
  flex-grow: 1;
  transform: translatex(calc(var(--slider-index) / 4 * -100%));
  transition: transform 250ms ease-in-out;
  list-style: none;
  & li > a {
    text-decoration: none;
    color: #000;
  }
  & > li {
    font-size: clamp(1rem, 1rem + 0.7vw, 1.5rem);
    margin: 0 0.125rem;
    background: #ccc;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
  & > li.active {
    background-color: var(--primary);
  }
  & li.active > a {
    color: #fff;
  }
`;

const Handle = styled.button`
  border: none;
  flex-grow: 0;
  flex-shrink: 0;
  background-color: #fff;
  z-index: 10;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  font-size: 1.8rem;

  &:hover {
    background-color: var(--primary);
    border-radius: 0.25rem;
    color: #fff;
  }
`;

export { Container, Slider, Handle };
