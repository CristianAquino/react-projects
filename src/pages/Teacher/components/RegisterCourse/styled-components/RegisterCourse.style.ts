import styled from "styled-components";
import { Form } from "../../Login/styled-components";

const FormCourse = styled(Form)`
  inline-size: 100%;
`;
const Select = styled.select`
  border: none;
  background-color: #1567ff;
  inline-size: 40%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  vertical-align: 0.75rem;
  transform: translateX(-80%);
`;
const Option = styled.option`
  text-align: center;
  &:not(:checked) {
    color: #fff;
    background-color: #242424;
  }
`;
export { FormCourse, Option, Select };
