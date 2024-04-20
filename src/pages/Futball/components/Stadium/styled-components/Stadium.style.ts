import styled from "styled-components";

const Cancha = styled.div`
  position: relative;
  max-inline-size: 1200px;
  min-inline-size: 320px;
  max-block-size: 900px;
  inline-size: 1200px;
  block-size: 900px;
  aspect-ratio: 16/9;
  display: flex;
  justify-content: space-around;
  border: 2px solid white;
  background: 
  /* corner */ radial-gradient(
        15px at 0 0,
        transparent 80%,
        white 80% 98%,
        transparent
      )
      0 0/ 15px 15px no-repeat,
    radial-gradient(15px at 100% 0, transparent 80%, white 80% 98%, transparent)
      100% 0/ 15px 15px no-repeat,
    radial-gradient(
        15px at 100% 100%,
        transparent 80%,
        white 80% 98%,
        transparent
      )
      100% 100%/ 15px 15px no-repeat,
    radial-gradient(15px at 0 100%, transparent 80%, white 80% 98%, transparent)
      0 100%/ 15px 15px no-repeat,
    /* mid line  */
      linear-gradient(
        to right,
        transparent 49.9%,
        white 49.9% 50.1%,
        transparent 50.1%
      ),
    /* littel area */ linear-gradient(to right, transparent 98%, white 98%) 0
      50%/55px 183.2px no-repeat,
    linear-gradient(to bottom, transparent 99%, white 99%) 0 50%/55px 183.2px
      no-repeat,
    linear-gradient(to top, transparent 99%, white 99%) 0 50%/55px 183.2px
      no-repeat,
    /* point penalty */
      radial-gradient(circle 4px at 110px 50%, white 0 4px, transparent 4px),
    /* left area */ linear-gradient(to bottom, transparent 99%, white 99%) 0 50%/165px
      403.2px no-repeat,
    linear-gradient(to top, transparent 99%, white 99%) 0 50%/165px 403.2px
      no-repeat,
    linear-gradient(to right, #1e7200 73%, #268e00 73% 99%, white 98%) 0 50%/165px
      403.2px no-repeat,
    radial-gradient(
      circle 4px at 110px 50%,
      transparent 90px,
      white 90px 92px,
      transparent 92px 100%
    ),
    /* right area */ linear-gradient(to left, transparent 98%, white 98%) 100%
      50%/165px 403.2px no-repeat,
    linear-gradient(to bottom, transparent 99%, white 99%) 100% 50%/165px
      403.2px no-repeat,
    linear-gradient(to top, transparent 99%, white 99%) 100% 50%/165px 403.2px
      no-repeat,
    /* littel area */ linear-gradient(to left, transparent 98%, white 98%) 100%
      50%/55px 183.2px no-repeat,
    linear-gradient(to bottom, transparent 99%, white 99%) 100% 50%/55px 183.2px
      no-repeat,
    linear-gradient(to top, transparent 99%, white 99%) 100% 50%/55px 183.2px
      no-repeat,
    /* point penalty */
      radial-gradient(
        circle 4px at calc(100% - 110px) 50%,
        white 0 4px,
        transparent 4px
      ),
    /* center */
      radial-gradient(
        circle,
        white 0 4px,
        transparent 4px 90px,
        white 90px 92px,
        transparent 92px 100%
      ),
    /* cesped */
      repeating-linear-gradient(to right, #0003 0 10%, transparent 10% 20%),
    linear-gradient(to right, #268e00 100%, transparent);
`;
export { Cancha };
