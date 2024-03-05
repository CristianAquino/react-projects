import styled from "styled-components";

const MessageProducts = styled.p`
  color: var(--nameP);
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: capitalize;
  padding: 1rem 0;
  position: sticky;
  width: 100%;
  border-bottom: 1px solid var(--primary);
`;

const CartListContent = styled.div`
  display: flex;
  width: 100%;
  gap: 1.5rem;
  min-height: 100dvh;
  align-items: flex-start;
`;

const ProductsCartListContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #000;
  width: 70%;
  height: 100%;
`;

export { MessageProducts, CartListContent, ProductsCartListContent };
