import styled from "styled-components";

const FormSearch = styled.form`
  text-align: center;
  --height: 3rem;
  --minSize: 1rem;
  --mediumSize: calc(0.5rem + 1vw);
  --maxSize: 2rem;

  & > input[type="text"] {
    width: 30%;
    height: var(--height);
    font-size: clamp(var(--minSize), var(--mediumSize), var(--maxSize));
    padding-left: 1rem;
    border-color: transparent;
    border-bottom: 2px solid var(--primary);
    background-color: transparent;
    outline: none;
    caret-color: var(--primary);
  }
  & > input[type="submit"] {
    font-size: clamp(var(--minSize), var(--mediumSize), var(--maxSize));
    margin-left: 1rem;
    padding: 0 2rem;
    height: var(--height);
    background-color: var(--primary);
    border-radius: 0.5rem;
    border: none;
  }
`;

export { FormSearch };
