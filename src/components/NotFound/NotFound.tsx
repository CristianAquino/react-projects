import { emoticonosNotFound } from "@helpers/index";
import { Container, LinkRedirect, Message } from "./style-components";

export type NotFoundProps = {
  message: string;
  pageRedirect: string;
};

const NotFound = ({ message, pageRedirect }: NotFoundProps) => {
  const emoticon = emoticonosNotFound();
  return (
    <Container>
      <p>{emoticon}</p>
      <Message>{message}</Message>
      <LinkRedirect to={pageRedirect} replace>
        Go to Home Page
      </LinkRedirect>
    </Container>
  );
};

export default NotFound;
