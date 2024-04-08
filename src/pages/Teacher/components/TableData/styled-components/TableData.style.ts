import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Label } from "../../Login/styled-components";

const Table = styled.table`
  inline-size: 100%;
  border-collapse: collapse;
`;

const Tr = styled.tr`
  &:hover {
    background-color: #1567ff;
    cursor: pointer;
  }
`;
const Th = styled.th`
  text-align: start;
  padding: 0.5rem;
  border: 1px solid #fff;
  text-transform: capitalize;
`;

const Td = styled.td`
  text-align: start;
  padding: 0.5rem;
  border: 1px solid #fff;
  text-transform: capitalize;
`;

const TdInput = styled(Td)`
  max-inline-size: 4ch;
`;

const LinkData = styled(Link)`
  inline-size: 100%;
  block-size: 100%;
  display: inline-block;
  text-decoration: none;
  color: #fff;
`;

const LabelTD = styled(Td)<{ val?: number }>`
  & label {
    display: flex;
    justify-content: center;
    align-items: center;
    inline-size: 100%;
    block-size: 1.5rem;
    cursor: pointer;
  }
  & label::before {
    content: "";
    inline-size: 1.25rem;
    block-size: 1.25rem;
    border: 1px solid #1567ff;
    border-radius: 0.25rem;
  }
  & label input {
    display: none;
  }
  &:has(:checked) {
    label::before {
      display: none;
    }
    ${(props) => {
      switch (props.val) {
        case 2:
          return css`
            background-color: #008000;
          `;
        case 0:
          return css`
            background-color: #ea0000;
          `;
        case 1:
          return css`
            background-color: #ffcc0f;
          `;
      }
    }}
  }
`;
const LabelInput = styled(Label)`
  justify-content: center;
  font-size: initial;
  & input {
    border: none;
    text-align: center;
    margin-inline-start: 0;
  }
`;
export { LabelTD, LinkData, Table, Td, TdInput, Th, Tr, LabelInput };
