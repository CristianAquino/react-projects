import styled from "styled-components";

const GridProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: minmax(200px, 410px);
  gap: 1rem;
  width: 100%;
  padding-top: 1rem;
  @media (width<=680px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-auto-rows: minmax(200px, 390px);
  }
`;

const CartToProduct = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--primary);
  border-radius: 0.5rem;
  position: relative;
  /* conditional pseudo */
  &[data-parent]::after {
    content: attr(data-parent);
    position: absolute;
    top: 1rem;
    left: 1rem;
    border-top-left-radius: 0.5rem;
    background-color: var(--dsc);
    /* width: 25%; */
    height: 7%;
    padding: 0 8px;
  }
  &.inCart {
    background-color: #15dbff40;
  }
`;

const BrandProduct = styled.p`
  color: var(--brand);
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 400;
`;

const NameProduct = styled.p`
  color: var(--nameP);
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: bold;
  /* text overflow */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const PriceProduct = styled.p`
  color: var(--blue);
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
`;

const ButtonCountProduct = styled.button`
  background: transparent;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  color: var(--primary);
  width: 30%;
  height: 100%;
  font-weight: bold;
`;
export {
  GridProducts,
  BrandProduct,
  NameProduct,
  PriceProduct,
  CartToProduct,
  ButtonCountProduct,
};
