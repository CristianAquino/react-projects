import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  inline-size: 48%;
  font-size: 1.5rem;
`;
const Label = styled.label`
  display: flex;
  justify-content: space-between;
  text-align: start;
  font-size: 1.5rem;
  inline-size: 100%;

  & span {
    text-transform: capitalize;
  }

  & input {
    border: none;
    background-color: transparent;
    border-block-end: 2px solid #1567ff;
    caret-color: #1567ff;
    margin-inline-start: 1rem;
    inline-size: 72%;
    outline: none;
  }
`;
const InputButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-block-start: 1rem;

  & * {
    inline-size: 50%;
    padding: 0.5rem;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
  }

  & input[type="submit"] {
    background-color: #1567ff;
    &:hover {
      background-color: #0d4dff;
    }
  }
  & button {
    background-color: #ea0000;
    &:hover {
      background-color: #f81606;
    }
  }
`;
const LoadingForm = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  background: #ccc5;
  inline-size: 100%;
  block-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  text-transform: uppercase;
  font-size: 3rem;
`;
const LabelError = styled.p`
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #ea0000;
  margin-block-end: 0.5rem;
  font-size: 1rem;
`;
export { Form, Label, InputButtons, LoadingForm, LabelError };
