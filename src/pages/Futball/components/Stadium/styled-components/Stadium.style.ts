import styled from "styled-components";

const Cancha = styled.div`
  position: relative;
  max-inline-size: 1200px;
  max-block-size: 900px;
  min-inline-size: 320px;
  inline-size: 100vw;
  block-size: 75vw;
  aspect-ratio: 4/3;
  display: flex;
  justify-content: space-around;
  border: 0.333vw solid white;
  background: 
  /* corner */ radial-gradient(
        1.25vw at 0 0,
        transparent 80%,
        white 80% 98%,
        transparent
      )
      0 0/ 1.25vw 1.25vw no-repeat,
    radial-gradient(
        1.25vw at 100% 0,
        transparent 80%,
        white 80% 98%,
        transparent
      )
      100% 0/ 1.25vw 1.25vw no-repeat,
    radial-gradient(
        1.25vw at 100% 100%,
        transparent 80%,
        white 80% 98%,
        transparent
      )
      100% 100%/ 1.25vw 1.25vw no-repeat,
    radial-gradient(
        1.25vw at 0 100%,
        transparent 80%,
        white 80% 98%,
        transparent
      )
      0 100%/ 1.25vw 1.25vw no-repeat,
    /* mid line  */
      linear-gradient(
        to right,
        transparent 49.8%,
        white 49.8% 50.2%,
        transparent 50.2%
      ),
    /* little left area */ linear-gradient(to right, transparent 94%, white 94%)
      0 50%/4.583vw 15.266vw no-repeat,
    linear-gradient(to bottom, transparent 98%, white 98%) 0 50%/4.583vw
      15.266vw no-repeat,
    linear-gradient(to top, transparent 98%, white 98%) 0 50%/4.583vw 15.266vw
      no-repeat,
    /* point penalty */
      radial-gradient(
        circle 0.333vw at 9.166vw 50%,
        white 0 0.333vw,
        transparent 0.333vw
      ),
    /* big left area */ linear-gradient(to bottom, transparent 99%, white 99%) 0
      50%/13.75vw 33.6vw no-repeat,
    linear-gradient(to top, transparent 99%, white 99%) 0 50%/13.75vw 33.6vw
      no-repeat,
    linear-gradient(to right, #1e7200 72.5%, #268e00 72.5% 98%, white 98%) 0 50%/13.75vw
      33.6vw no-repeat,
    /* bomb */
      radial-gradient(
        circle 0.333vw at 9.166vw 50%,
        transparent 7.5vw,
        white 7.5vw 7.833vw,
        transparent 7.833vw 100%
      ),
    /* little right area */ linear-gradient(to left, transparent 94%, white 94%)
      100% 50%/4.583vw 15.266vw no-repeat,
    linear-gradient(to bottom, transparent 98%, white 98%) 100% 50%/4.583vw
      15.266vw no-repeat,
    linear-gradient(to top, transparent 98%, white 98%) 100% 50%/4.583vw
      15.266vw no-repeat,
    /* point penalty */
      radial-gradient(
        circle 0.333vw at calc(100% - 9.166vw) 50%,
        white 0 0.333vw,
        transparent 0.333vw
      ),
    /* big right area */ linear-gradient(to bottom, transparent 99%, white 99%)
      100% 50%/13.75vw 33.6vw no-repeat,
    linear-gradient(to top, transparent 99%, white 99%) 100% 50%/13.75vw 33.6vw
      no-repeat,
    linear-gradient(to left, #268e00 72.5%, #1e7200 72.5% 98%, white 98%) 100%
      50%/13.75vw 33.6vw no-repeat,
    /* bomb */
      radial-gradient(
        circle 0.333vw at calc(100% - 9.166vw) 50%,
        transparent 7.5vw,
        white 7.5vw 7.833vw,
        transparent 7.833vw 100%
      ),
    /* center */
      radial-gradient(
        circle,
        white 0 0.333vw,
        transparent 0.333vw 7.5vw,
        white 7.5vw 7.833vw,
        transparent 7.833vw 100%
      ),
    /* cesped */
      repeating-linear-gradient(to right, #0003 0 10%, transparent 10% 20%),
    linear-gradient(to right, #268e00 100%, transparent);
`;

const Banda = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Player = styled.label`
  --w: 4.5rem;
  display: inline-block;
  inline-size: var(--w);
  block-size: var(--w);
  border-radius: 50%;
  border: 1px solid white;
  input {
    display: none;
  }
`;
const ListPlayer = styled.ul`
  block-size: 0;
  inline-size: 200px;
  overflow: hidden;
  overflow-y: scroll;
  transition: block-size 0.3s ease-in-out;
  position: absolute;
  inset-block-start: 4.5rem;
  inset-inline-end: 0;
  padding: 0 0.5rem;
`;
const ItemPlayer = styled.li`
  list-style: none;
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid white;

  &:last-child {
    border-bottom: none;
  }

  img {
    inline-size: 2.5rem;
    block-size: 2.5rem;
    border-radius: 50%;
  }
`;

const Content = styled.div`
  position: relative;
  block-size: auto;

  label.ja + ul {
    block-size: 120px;
    transition-duration: 1s;
    border: 1px solid white;
    border-radius: 0.5rem;
    background-color: #000a;
    scrollbar-width: none;
    scrollbar-color: white #000a;
  }
  /* &:has(:checked) {
    ${ListPlayer} {
      block-size: 120px;
      transition-duration: 1s;
      border: 1px solid white;
      border-radius: 0.5rem;
      background-color: #000a;
      scrollbar-width: none;
      scrollbar-color: white #000a;
    }
  } */
`;

export { Banda, Cancha, Content, ItemPlayer, ListPlayer, Player };
