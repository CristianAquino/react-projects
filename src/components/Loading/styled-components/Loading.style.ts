import styled from "styled-components";

const Container = styled.div`
  width: 100vi;
  height: 100vb;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: clamp(3rem, 1rem + 10vi, 20.5rem);
  gap: 1rem;
`;

const Logo = styled.img`
  --min: 5rem;
  --med: calc(3rem + 10vi);
  --max: 20.5rem;
  -webkit-box-reflect: below clamp(var(--min), var(--med), var(--max))
    linear-gradient(transparent, #0002);
`;
export { Container, Logo };
