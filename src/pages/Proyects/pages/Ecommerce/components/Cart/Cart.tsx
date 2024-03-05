import { useCustomerContext } from "@hooks/index";
import { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { CartProduct } from "..";
import { CartContext } from "../../context/CartContext";
import { openCart } from "../../services";
import { ButtonClose, GoToPay } from "../../style-components";
import {
  BackgroundCartFixed,
  CartContent,
  EmptyCart,
  ProductsCartContent,
  SubtotalProductsCart,
} from "./styled-component";

export type CartProps = {};

const Cart = ({}: CartProps) => {
  const { cart } = useCustomerContext(CartContext);
  const [open, setOpen] = useState(false);
  const subscription = openCart.getSubject();

  const handldeCloseCart = () => {
    openCart.setSubject(false);
  };

  useEffect(() => {
    subscription.subscribe((data) => {
      data ? setOpen(true) : setOpen(false);
    });
  }, []);

  return (
    <BackgroundCartFixed $open={open}>
      <CartContent $open={open}>
        <ButtonClose
          style={{
            position: "fixed",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
          }}
          onClick={handldeCloseCart}
        >
          x
        </ButtonClose>
        {cart.length == 0 ? (
          <EmptyCart>
            <p>
              <AiOutlineInfoCircle />
              <br />
              Usted aun no tiene productos agregados a su carrito de compras
            </p>
          </EmptyCart>
        ) : (
          <>
            <ProductsCartContent>
              {cart.map((product) => (
                <CartProduct key={product.id} product={product} />
              ))}
            </ProductsCartContent>
            <SubtotalProductsCart>
              <p>subtotal</p>
              <p>
                S/.{" "}
                {cart.reduce(
                  (acc, curr) => acc + curr.unitPrice * curr.quantity,
                  0
                )}
              </p>
            </SubtotalProductsCart>
            <GoToPay to={"cart"}>ir a pagar</GoToPay>
          </>
        )}
      </CartContent>
    </BackgroundCartFixed>
  );
};

export default Cart;
