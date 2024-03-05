import { Route, Routes } from "react-router-dom";
import { NotFound } from "@components/index";

interface Props {
  children: JSX.Element | JSX.Element[];
  message?: string;
  pageRedirect: string;
}

const RoutesWithNotFound = ({
  children,
  message = "Page not found",
  pageRedirect,
}: Props) => {
  return (
    <Routes>
      {children}
      <Route
        path="*"
        element={<NotFound message={message} pageRedirect={pageRedirect} />}
      />
    </Routes>
  );
};
export default RoutesWithNotFound;
