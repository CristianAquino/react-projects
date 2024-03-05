import { emoticonosNotFound } from "@helpers/index";
import {
  ButtonRedirect,
  Container,
  LinkRedirect,
  Message,
} from "./style-components";
import { useNavigate } from "react-router-dom";

export type NotFoundProps = {
  message: string;
  pageRedirect?: string;
};

const NotFound = ({ message, pageRedirect }: NotFoundProps) => {
  const emoticon = emoticonosNotFound();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Container>
      <p>{emoticon}</p>
      <Message>{message}</Message>
      {pageRedirect ? (
        <LinkRedirect to={pageRedirect}>Go to Home Page</LinkRedirect>
      ) : (
        <ButtonRedirect onClick={handleClick}>Go to Home Page</ButtonRedirect>
      )}
    </Container>
  );
};

export default NotFound;
