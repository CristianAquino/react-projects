import styled from "styled-components";

// cesped
const Cancha = styled.div`
  position: relative;
  /* max-inline-size: 1200px;
  max-block-size: 900px;
  min-inline-size: 320px;
  inline-size: 100vw;
  block-size: 75vw; */
  inline-size: 72vw;
  block-size: 54vw;
  aspect-ratio: 4/3;
  display: flex;
  justify-content: space-around;
  border: 0.24vw solid white;
  background: 
  /* corner */ radial-gradient(
        0.9vw at 0 0,
        transparent 80%,
        white 80% 98%,
        transparent
      )
      0 0/ 0.9vw 0.9vw no-repeat,
    radial-gradient(
        0.9vw at 100% 0,
        transparent 80%,
        white 80% 98%,
        transparent
      )
      100% 0/ 0.9vw 0.9vw no-repeat,
    radial-gradient(
        0.9vw at 100% 100%,
        transparent 80%,
        white 80% 98%,
        transparent
      )
      100% 100%/ 0.9vw 0.9vw no-repeat,
    radial-gradient(
        0.9vw at 0 100%,
        transparent 80%,
        white 80% 98%,
        transparent
      )
      0 100%/ 0.9vw 0.9vw no-repeat,
    /* mid line  */
      linear-gradient(
        to right,
        transparent 49.8%,
        white 49.8% 50.2%,
        transparent 50.2%
      ),
    /* little left area */ linear-gradient(to right, transparent 94%, white 94%)
      0 50%/3.3vw 10.992vw no-repeat,
    linear-gradient(to bottom, transparent 98%, white 98%) 0 50%/3.3vw 10.992vw
      no-repeat,
    linear-gradient(to top, transparent 98%, white 98%) 0 50%/3.3vw 10.992vw
      no-repeat,
    /* point penalty */
      radial-gradient(
        circle 0.24vw at 6.6vw 50%,
        white 0 0.24vw,
        transparent 0.24vw
      ),
    /* big left area */ linear-gradient(to bottom, transparent 99%, white 99%) 0
      50%/9.9vw 24.192vw no-repeat,
    linear-gradient(to top, transparent 99%, white 99%) 0 50%/9.9vw 24.192vw
      no-repeat,
    linear-gradient(to right, #1e7200 72.5%, #268e00 72.5% 98%, white 98%) 0 50%/9.9vw
      24.192vw no-repeat,
    /* bomb */
      radial-gradient(
        circle 0.24vw at 6.6vw 50%,
        transparent 5.4vw,
        white 5.4vw 5.52vw,
        transparent 5.52vw 100%
      ),
    /* little right area */ linear-gradient(to left, transparent 94%, white 94%)
      100% 50%/3.3vw 10.992vw no-repeat,
    linear-gradient(to bottom, transparent 98%, white 98%) 100% 50%/3.3vw
      10.992vw no-repeat,
    linear-gradient(to top, transparent 98%, white 98%) 100% 50%/3.3vw 10.992vw
      no-repeat,
    /* point penalty */
      radial-gradient(
        circle 0.24vw at calc(100% - 6.6vw) 50%,
        white 0 0.24vw,
        transparent 0.24vw
      ),
    /* big right area */ linear-gradient(to bottom, transparent 99%, white 99%)
      100% 50%/9.9vw 24.192vw no-repeat,
    linear-gradient(to top, transparent 99%, white 99%) 100% 50%/9.9vw 24.192vw
      no-repeat,
    linear-gradient(to left, #268e00 72.5%, #1e7200 72.5% 98%, white 98%) 100%
      50%/9.9vw 24.192vw no-repeat,
    /* bomb */
      radial-gradient(
        circle 0.24vw at calc(100% - 6.6vw) 50%,
        transparent 5.4vw,
        white 5.4vw 5.52vw,
        transparent 5.52vw 100%
      ),
    /* center */
      radial-gradient(
        circle,
        white 0 0.24vw,
        transparent 0.24vw 5.4vw,
        white 5.4vw 5.52vw,
        transparent 5.52vw 100%
      ),
    /* cesped */
      repeating-linear-gradient(to right, #0003 0 10%, transparent 10% 20%),
    linear-gradient(to right, #268e00 100%, transparent);
`;

// aside list players
const Data = styled.aside`
  inline-size: 25vw;
  margin: 1vw;
  block-size: 136vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1vh;

  h3 {
    margin-block-end: 0.5rem;
  }

  hr {
    border: 0.5px solid #333a;
    margin-block: 0.5rem;
  }
`;
// main container
const Container = styled.main`
  display: flex;
  margin: 1vw;
  /* background: linear-gradient(45deg, #da020e, #ffe500); */
`;

export { Cancha, Container, Data };
