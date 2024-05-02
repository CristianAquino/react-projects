import styled from "styled-components";

const Banda = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Content = styled.div`
  position: relative;
  block-size: auto;

  label.ja + ul {
    block-size: 120px;
    transition-duration: 1s;
    border: 1px solid white;
    border-radius: 0.5rem;
    background-color: #000a;
    backdrop-filter: blur(5px);
    scrollbar-width: none;
    scrollbar-color: white #000a;
  }
`;

export { Banda, Content };
