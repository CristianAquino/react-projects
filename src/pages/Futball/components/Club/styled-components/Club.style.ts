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
const LogoData = styled.aside`
  margin-inline-start: 1vw;
  span {
    font-size: clamp(1rem, calc(0.25rem + 2vw), 4rem);
  }
`;
export { Logo, LogoData };
