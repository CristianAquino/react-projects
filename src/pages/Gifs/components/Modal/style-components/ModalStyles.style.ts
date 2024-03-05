import styled from "styled-components";

const ModalContainer = styled.dialog`
  border: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  overflow: hidden;
  border-radius: 0.5rem;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ModalTitleImage = styled.p`
  --minSize: 1rem;
  --mediumSize: calc(0.5rem + 1vw);
  --maxSize: 2rem;
  position: absolute;
  font-size: clamp(var(--minSize), var(--mediumSize), var(--maxSize));
  font-weight: bold;
  bottom: 1.25rem;
  left: 1rem;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  font-size: 2rem;
  font-weight: bold;
  top: 0;
  right: 0;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #03b19f;
  line-height: 1;
`;

export { ModalContainer, ModalImage, ModalTitleImage, ModalCloseButton };
