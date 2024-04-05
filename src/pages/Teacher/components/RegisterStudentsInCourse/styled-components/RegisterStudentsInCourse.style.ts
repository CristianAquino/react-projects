import styled from "styled-components";
import { InputButtons } from "../../Login/styled-components";

const LabelSheet = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 1.2rem;
  & input {
    border: none;
    border-block-end: 2px solid #1567ff;
    background-color: transparent;
    outline: none;
    caret-color: #1567ff;
  }
`;

const ContentSearch = styled.ul`
  list-style: none;
  background-color: #fff;
  color: #222;
  border-radius: 0.5rem;

  & li {
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
  }
  & li:hover {
    background-color: #1567ff;
    color: #fff;
    cursor: pointer;
  }
`;
const SelectCourse = styled.p`
  background-color: #00aeff;
  padding: 0.75rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  & svg {
    color: red;
    vertical-align: -3px;
    margin-inline-start: 0.5rem;
  }
`;
const RadioInput = styled.label`
  cursor: pointer;

  & input {
    display: none;
  }
  p {
    display: flex;
    position: relative;
    gap: 0.5rem;
  }
  & p::before {
    content: "";
    inline-size: 1.25rem;
    block-size: 1.25rem;
    border: 1px solid #1567ff;
    border-radius: 0.25rem;
  }
  & input:checked + p::before {
    border-color: green;
    border-width: 3px;
    border-top-color: transparent;
    border-left-color: transparent;
    inline-size: 0.75rem;
    rotate: 30deg;
    transform: translateY(-0.25rem);
    border-radius: none;
    transition: rotate 0.25s ease-in-out;
  }
`;
const ButtonAddStudents = styled(InputButtons)`
  margin: 0;
  & button {
    background-color: #1567ff;
    inline-size: 100%;
    &:hover {
      background-color: #0d4dff;
    }
  }
`;
export {
  ButtonAddStudents,
  ContentSearch,
  LabelSheet,
  RadioInput,
  SelectCourse,
};
