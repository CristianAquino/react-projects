import { Route } from "react-router-dom";
import { RoutesWithNotFound } from "@guards/index";
import { PROYECTS_ROUTE, PUBLIC_ROUTE } from "@routes/index";
import { Home, LayoutEcomerce, CartList } from "./components";

export type EcommerceProps = {};

const Ecommerce = ({}: EcommerceProps) => {
  return (
    <RoutesWithNotFound
      message="Page not found"
      pageRedirect={PUBLIC_ROUTE.PROYECTS + PROYECTS_ROUTE.ECOMMERCE}
    >
      <Route path={`${PUBLIC_ROUTE.HOME}`} element={<LayoutEcomerce />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<CartList />} />
      </Route>
    </RoutesWithNotFound>
  );
};

export default Ecommerce;
