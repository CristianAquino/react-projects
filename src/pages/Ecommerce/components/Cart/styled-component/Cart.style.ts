import styled from "styled-components";

const BackgroundCartFixed = styled.div<{ $open: boolean }>`
  position: fixed;
  width: 100%;
  background: rgb(25 25 25 /0.3);
  z-index: 9;
  min-height: 100dvh;
  top: 0;
  left: 0;
  display: ${(props) => (props.$open ? "flex" : "none")};
`;

const CartContent = styled.section<{ $open: boolean }>`
  width: 36%;
  position: absolute;
  right: 5%;
  top: 6rem;
  z-index: 5;
  border-radius: 0 0 0.5rem 0.5rem;
  padding: 1rem;
  display: ${(props) => (props.$open ? "flex" : "none")};
  gap: 1rem;
  flex-direction: column;
  background: #fff;
  max-height: calc(70dvh - 6rem);
`;

const EmptyCart = styled.div`
  color: #c4c4c4;
  text-align: center;
  font-size: 1rem;
  margin-top: 3.5rem;
`;

const ProductsCartContent = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3.5rem;
  overflow-y: scroll;
  padding-right: 0.5rem;
  /* edit scroll bar */
  &::-webkit-scrollbar {
    width: 0.5rem;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 0.5rem;
  }
`;

const SubtotalProductsCart = styled.div`
  display: flex;
  gap: 1rem;
  color: #15dbff;
  text-transform: capitalize;
  justify-content: space-between;
  width: 100%;
  font-weight: bold;
  font-size: 1.75rem;
  line-height: 1;
`;

export {
  BackgroundCartFixed,
  CartContent,
  EmptyCart,
  ProductsCartContent,
  SubtotalProductsCart,
};
