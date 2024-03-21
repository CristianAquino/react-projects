import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Title = styled.h2`
  --min: 0.75rem;
  --mid: calc(1rem + 1vw);
  --max: 2.5rem;

  inline-size: fit-content;
  position: relative;
  text-transform: capitalize;
  font-size: clamp(var(--mid), var(--mid), var(--max));

  &::after {
    content: "";
    width: 100%;
    position: absolute;
    inset-block-end: 0;
    inset-inline-start: 0;
    border: 1px solid #1567ff;
  }
`;
const Content = styled.div`
  inline-size: 100%;
  display: flex;
  justify-content: center;
`;
const Data = styled.div`
  inline-size: 60%;
`;
const Label = styled.p`
  text-align: start;
  font-size: 1.5rem;

  & span:first-child {
    font-weight: bold;
    text-transform: capitalize;
  }
`;
const ImageProfile = styled.img`
  inline-size: max(100px, 320px);
  aspect-ratio: 1/1;
  object-fit: contain;
`;
const ContentData = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-inline-size: 100%;
`;
export { Container, Content, ContentData, Data, ImageProfile, Label, Title };
