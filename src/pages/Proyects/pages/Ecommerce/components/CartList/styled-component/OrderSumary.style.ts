import styled from "styled-components";

const OrderSumaryContent = styled.div`
  color: var(--nameP);
  width: 30%;
  position: sticky;
  top: 7rem;
`;

const OrderSumaryHeader = styled.div`
  width: 100%;
  padding: 1rem;
  background: var(--brand);
  border-radius: 0.5rem 0.5rem 0 0;
`;

const OrderSumaryDataBill = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 1rem;
`;

const OrderSumaryTag = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: capitalize;
`;

const OrderSumaryPrice = styled.span`
  font-size: 1.25rem;
  text-transform: capitalize;
`;

export {
  OrderSumaryContent,
  OrderSumaryHeader,
  OrderSumaryDataBill,
  OrderSumaryTag,
  OrderSumaryPrice,
};
