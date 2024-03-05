import styled from "styled-components";

const GifTitleImage = styled.figcaption`
  --minSize: 1rem;
  --mediumSize: calc(0.5rem + 1vw);
  --maxSize: 2rem;
  position: absolute;
  bottom: 1.25rem;
  left: 1rem;
  font-size: clamp(var(--minSize), var(--mediumSize), var(--maxSize));
  font-weight: bold;
`;

const GifElement = styled.figure<{ $c: number }>`
  width: 100%;
  max-height: 500px;
  position: relative;

  @media (width<576px) {
    grid-column: 1/-1;
  }
  @media (576px <=width<920px) {
    ${(props) => props.$c % 3 == 0 && "grid-column: 1/-1"};
  }
  @media (width>=920px) {
    ${(props) => props.$c % 4 == 0 && "grid-column: 1/-1"};
  }

  @media (hover: hover) {
    &:hover > ${GifTitleImage} {
      background-color: #03b19f;
      border-radius: 0.5rem;
      padding: 0 0.5rem;
    }
  }
`;

const GifImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export { GifElement, GifImage, GifTitleImage };
