import styled from "styled-components";

const SectionTitle = styled.h2`
  --minSize: 2rem;
  --mediumSize: calc(1rem + 1vw);
  --maxSize: 2.75rem;
  font-size: clamp(var(--minSize), var(--mediumSize), var(--maxSize));
`;

export { SectionTitle };
