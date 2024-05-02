import styled from "styled-components";

const Container = styled.main`
  max-width: 1120px;
  min-height: 100vh;
  display: flex;
  margin: 0 auto;
`;
const Preview = styled.div`
  flex: 1;
  margin: 2rem;
  font-weight: 700;
`;
const Content = styled.div`
  flex: 2;
  margin: 2rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  position: relative;
  &::before {
    content: "";
    position: fixed;
    inset-block-start: 0;
    background-color: var(--darkMode);
    inline-size: 100%;
    block-size: 2rem;
  }
`;
const ContentOption = styled.div`
  label {
    text-align: end;
    inline-size: 36%;
    display: inline-block;
    vertical-align: bottom;
    /* line-height: 1; */
  }
  input,
  select {
    inline-size: 56%;
    margin-inline-start: 8%;
  }
  input {
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 1px solid var(--blue);
    padding: 0.5rem;
    min-inline-size: 3ch;
  }
`;
const Title = styled.h1`
  padding: 0.5rem 1rem;
  background: #333a;
  border-radius: 0.5rem;
`;
const Attributes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
  div label {
    inline-size: 72%;
    text-align: left;
  }
  div input {
    inline-size: 4ch;
  }
`;
export { Attributes, Container, Content, ContentOption, Preview, Title };
