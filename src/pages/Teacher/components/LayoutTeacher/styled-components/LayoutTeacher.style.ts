import styled from "styled-components";

const Container = styled.div`
  inline-size: 100vw;
  min-block-size: 100vh;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const Content = styled.div`
  inline-size: max(320px, 1200px);
`;

export { Container, Content };
