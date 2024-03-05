import styled from "styled-components";

const CartInListLi = styled.li`
  padding: 1rem 0;
  border-bottom: 0.125rem solid var(--primary);
  display: flex;
  width: 100%;
  height: 10.125rem;
  gap: 1rem;
`;

const CartInListBoxImg = styled.div`
  height: 100%;
  width: 20%;
  flex-grow: 1;
`;

const CartInListImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CartInListActions = styled.div`
  display: flex;
  align-self: center;
  flex-grow: 1;
  width: 20%;
`;

const CartInListActionsContent = styled.div`
  /* width: 165px; */
  width: 100%;
  border: 1px solid var(--primary);
  border-radius: 0.5rem;
  display: flex;
  height: 2.25rem;
  margin-right: 1rem;
`;

export {
  CartInListLi,
  CartInListBoxImg,
  CartInListImg,
  CartInListActions,
  CartInListActionsContent,
};
