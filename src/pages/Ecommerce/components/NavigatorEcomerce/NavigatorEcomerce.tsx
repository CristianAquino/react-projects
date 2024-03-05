import { useCustomerContext } from "@app/hooks";
import { BsCart } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import { openCart } from "../../services";
import { ButtonCart } from "../../style-components";
import { LogoEcommerce, SearchProduct } from "./components";
import { Header } from "./style-components";

export type NavigatorEcomerceProps = {};

const NavigatorEcomerce = ({}: NavigatorEcomerceProps) => {
  const { cart } = useCustomerContext(CartContext);

  const handldeOpenCart = () => {
    openCart.setSubject(true);
  };

  return (
    <Header>
      <LogoEcommerce />
      <SearchProduct />
      <ButtonCart
        onClick={handldeOpenCart}
        style={{ width: "10%" }}
        $mode={cart.length}
      >
        <BsCart />
      </ButtonCart>
    </Header>
  );
};

export default NavigatorEcomerce;
