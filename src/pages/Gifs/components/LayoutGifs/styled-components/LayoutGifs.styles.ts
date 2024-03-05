import { Link } from "react-router-dom";
import styled from "styled-components";
const MainGifs = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin: 2% 5%;
`;
const LogoLink = styled(Link)`
  text-align: center;
`;
export { MainGifs, LogoLink };
