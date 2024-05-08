import styled from "styled-components";

const Logo = styled.div`
  display: flex;
  inline-size: 72vw;
  block-size: 10vw;
  margin-block: 1vw;
  img {
    inline-size: 10vw;
    block-size: 10vw;
  }
`;
const LogoData = styled.div`
  margin-inline: 1vw;
  inline-size: 24vw;
  p {
    font-size: clamp(1rem, calc(0.25rem + 2vw), 4rem);
  }
  span {
    font-size: clamp(0.75rem, calc(0.15rem + 2vw), 1.5rem);
  }
`;
export { Logo, LogoData };
