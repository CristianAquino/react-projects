import styled from "styled-components";

const Container = styled.div`
  inline-size: 100%;
  block-size: calc(100vh - 80px);
  position: relative;
`;
const Image = styled.img`
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;
`;
const Data = styled.div`
  position: absolute;
  inset-block-end: 1rem;
  inset-inline-start: 1rem;
  max-inline-size: 40rem;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 0.25rem;
`;
export { Container, Data, Image };
