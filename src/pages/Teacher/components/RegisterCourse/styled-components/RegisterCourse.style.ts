import styled from "styled-components";

const Form = styled.form`
  & label > input[type="text"] {
    border: none;
    background-color: transparent;
    border-block-end: 2px solid #1567ff;
    caret-color: #1567ff;
    margin-inline-start: 1rem;
    inline-size: 40%;
  }
`;
const Select = styled.select`
  border: none;
  background-color: #1567ff;
  margin-inline-start: 1rem;
  inline-size: 40%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  vertical-align: 0.75rem;
`;
const Option = styled.option`
  text-align: center;
  &:not(:checked) {
    color: #fff;
    background-color: #242424;
  }
`;
const Label = styled.label`
  display: block;
  margin-block-end: 1rem;
  text-align: start;
  font-size: 1.5rem;
`;
const InputButton = styled.input.attrs({ type: "submit" })`
  padding: 0.5rem;
  background-color: #1567ff;
  font-size: 1.5rem;
  border-radius: 0.5rem;
`;
export { Label, Select, InputButton, Form, Option };
