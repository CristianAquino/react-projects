import styled from "styled-components";

const Container = styled.section<{ background?: string }>`
  --bg: ${({ background }) => background};
  position: relative;
  max-inline-size: 480px;
  inline-size: 480px;
  block-size: 240px;
  display: flex;
  filter: drop-shadow(
    0 0 5px ${({ background }) => (background ? background + "a" : "#fffa")}
  );
  background: radial-gradient(30px at 0 0, transparent 98%, var(--bg, #fff)) 0 0/
      51% 51% no-repeat,
    radial-gradient(30px at 100% 0, transparent 98%, var(--bg, #fff)) 100% 0/ 51%
      51% no-repeat,
    radial-gradient(30px at 0 100%, transparent 98%, var(--bg, #fff)) 0 100%/ 51%
      51% no-repeat,
    radial-gradient(30px at 100% 100%, transparent 98%, var(--bg, #fff)) 100%
      100%/ 51% 51% no-repeat;
  /*0 0/21% 21%: Esta parte define el tamaño y la posición del gradiente. 0 0 especifica la posición del gradiente en las coordenadas (0, 0). 21% 21% especifica el tamaño del gradiente en relación con el elemento contenedor.*/

  //equivalente
  /* background: radial-gradient(30px at 0 0, red 98%, yellow);
  background-position:0 0;
  background-repeat:no-repeat;
  background-size:21% 21%; */
`;

const ContentLeft = styled.div`
  inline-size: 40%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  text-align: center;
  border-right: 1px solid var(--darkMode);

  div {
    font-size: 0.5rem;
  }
  div p {
    font-size: 0.75rem;
  }
  div p svg {
    margin-inline-end: 0.25rem;
  }
`;
const ContentRight = styled.div`
  inline-size: 60%;
`;
const ContentRightTop = styled.div`
  block-size: 60%;
  padding: 1rem;
  display: flex;
  justify-content: end;
  flex-direction: column;
  gap: 0.75rem;

  p:first-child {
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  p:last-child {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    text-transform: uppercase;
    font-size: 0.75rem;
    span {
      padding: 0.15rem 0.25rem;
      border-radius: 0.25rem;
    }
  }
`;
const ContentRightBotton = styled.div`
  block-size: 40%;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  border-top: 1px solid var(--darkMode);
`;

export {
  Container,
  ContentLeft,
  ContentRight,
  ContentRightBotton,
  ContentRightTop,
};
