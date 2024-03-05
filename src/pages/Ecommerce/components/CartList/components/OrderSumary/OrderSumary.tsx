import { useCallback } from "react";
import { checkout } from "../../../../services";
import { useCustomerContext } from "@app/hooks";
import { CartContext } from "../../../../context/CartContext";
import { ButtonNavigate } from "../../../../style-components";
import {
  OrderSumaryContent,
  OrderSumaryDataBill,
  OrderSumaryHeader,
  OrderSumaryPrice,
  OrderSumaryTag,
} from "../../styled-component";
import { BsCart, BsTag } from "react-icons/bs";
import { Link } from "react-router-dom";

export type OrderSumaryProps = {};

const OrderSumary = ({}: OrderSumaryProps) => {
  const { cart } = useCustomerContext(CartContext);

  const checkoutCart = useCallback(async () => {
    const data = await checkout(cart);
    window.location.href = data.url;
  }, []);

  return (
    <OrderSumaryContent>
      <OrderSumaryHeader>
        <p
          style={{
            fontSize: "clamp(1rem,0.5rem + 1vw,2rem)",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          Resumen de pedido
        </p>
        <p
          style={{
            fontSize: "clamp(1rem,0.5rem + 0.75vw,1.5rem)",
            color: "#fff",
          }}
        >
          {cart.length} producto(s)
        </p>
      </OrderSumaryHeader>
      <OrderSumaryDataBill>
        <OrderSumaryTag>subtotal</OrderSumaryTag>
        <OrderSumaryPrice>
          s/.{" "}
          {cart.reduce((acc, curr) => acc + curr.unitPrice * curr.quantity, 0)}
        </OrderSumaryPrice>
      </OrderSumaryDataBill>
      <OrderSumaryDataBill>
        <OrderSumaryTag>total</OrderSumaryTag>
        <OrderSumaryPrice
          style={{
            fontWeight: "bold",
          }}
        >
          s/.{" "}
          {cart.reduce((acc, curr) => acc + curr.unitPrice * curr.quantity, 0)}
        </OrderSumaryPrice>
      </OrderSumaryDataBill>
      <br />
      <br />
      <Link
        to={"/proyects/ecommerce"}
        style={{
          paddingTop: "1rem",
          color: "var(--primary)",
          fontSize: "clamp(1rem,0.5rem + 0.75vw,1.5rem)",
          textDecoration: "none",
        }}
      >
        <BsCart /> Añadir mas productos al carrito
      </Link>
      <p
        style={{
          paddingTop: "1rem",
          fontSize: "clamp(1rem,0.5rem + 0.75vw,1.5rem)",
        }}
      >
        <BsTag /> ¡Agrega tu cupón en el siguiente paso!
      </p>
      <ButtonNavigate
        style={{
          width: "100%",
          marginTop: "1rem",
          fontSize: "clamp(1rem,0.5rem + 0.75vw,1.5rem)",
        }}
        onClick={checkoutCart}
      >
        Pagar
      </ButtonNavigate>
    </OrderSumaryContent>
  );
};

export default OrderSumary;
