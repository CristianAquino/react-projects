import styled from "styled-components";

const Container = styled.main`
  max-width: 1120px;
  min-height: 100vh;
  display: flex;
`;
const Preview = styled.div`
  flex: 1;
  padding: 2rem;
  font-weight: 700;
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
  color: #f5db9b;
  img {
    inline-size: 2.5rem;
    transform: translateY(-0.5rem);
  }
  span:nth-child(2) {
    font-size: 1rem;
  }
`;
const Bottom = styled.footer`
  position: absolute;
  color: #f5db9b;
  /* background-color: #a00a; */
  inset-inline: 3rem;
  block-size: 130px;
  inset-block-end: 0;
  z-index: 2;
  & > p {
    text-align: center;
    font-size: 1.5rem;
  }
`;
const Attributes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block-end: 0.5rem;
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
const Content = styled.div`
  flex: 2;
  padding: 2rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;
const Box = styled.div`
  position: relative;
  position: sticky;
  inset-block-start: 0;
  block-size: 432px;
`;
const ContentOption = styled.div`
  label {
    text-align: end;
    inline-size: 36%;
    display: inline-block;
    vertical-align: bottom;
    line-height: 1;
  }
  input {
    inline-size: 56%;
    margin-inline-start: 8%;
  }
`;
const LeftCenter = styled.div`
  position: absolute;
  inset-block-start: 13.75rem;
  inset-inline-start: 0.7rem;
  display: flex;
  flex-direction: column;
  img {
    inline-size: 2.5rem;
  }
  img:nth-child(2) {
    transform: translateY(-0.75rem);
  }
  img:nth-child(3) {
    transform: translateY(-1.4rem);
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
    block-size: 100%;
    filter: drop-shadow(0 0 1rem #161a4f);
  }
`;

export {
  Attribute,
  Attributes,
  Bottom,
  Box,
  Container,
  Content,
  ContentOption,
  Flags,
  LeftCenter,
  Player,
  Preview,
  TopLeft,
};
