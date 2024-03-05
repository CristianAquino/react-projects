import styled from "styled-components";

const CartProductContainer = styled.li`
  display: flex;
  gap: 1rem;
  width: 100%;
  height: 10rem;
`;

const CartProductImg = styled.img`
  height: 100%;
  max-width: 10rem;
  object-fit: cover;
  object-position: center;
  border-radius: 0.5rem;
  flex-grow: 1;
`;

const CartProductActions = styled.div`
  width: 50%;
  border: 1px solid var(--primary);
  border-radius: 0.5rem;
  display: flex;
  height: 2.25rem;
`;

export { CartProductContainer, CartProductImg, CartProductActions };
