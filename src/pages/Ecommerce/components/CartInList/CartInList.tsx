import { useCustomerContext } from "@hooks/index";
import { useEffect } from "react";
import { BsTrash3 } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import { Product } from "../../models";
import { openCart } from "../../services";
import {
  BrandProduct,
  ButtonCountProduct,
  NameProduct,
  PriceProduct,
  QuantityCart,
} from "../../style-components";
import {
  CartInListActions,
  CartInListActionsContent,
  CartInListBoxImg,
  CartInListImg,
  CartInListLi,
} from "./styled-component";

export type CartInListProps = {
  product: Product;
};

const CartInList = ({ product }: CartInListProps) => {
  const { addToCart, deleteOneToCart, removeFromCart } =
    useCustomerContext(CartContext);

  useEffect(() => {
    const ecommerceParams = window.location.pathname.endsWith("ecommerce");
    if (!ecommerceParams) {
      openCart.setSubject(false);
    }
  }, []);

  return (
    <CartInListLi>
      <CartInListBoxImg>
        <CartInListImg src={product.image} alt={product.name} />
      </CartInListBoxImg>
      <div style={{ flexGrow: 2, width: "50%" }}>
        <BrandProduct style={{ fontSize: "1rem" }}>
          {product.brand}
        </BrandProduct>
        <NameProduct style={{ fontSize: "1.5rem" }}>{product.name}</NameProduct>
      </div>
      <PriceProduct
        style={{
          alignSelf: "center",
          flexGrow: 1,
          width: "10%",
        }}
      >
        s/. {product.unitPrice}
      </PriceProduct>
      <CartInListActions>
        <CartInListActionsContent>
          <ButtonCountProduct onClick={() => deleteOneToCart(product)}>
            -
          </ButtonCountProduct>
          <QuantityCart>{product.quantity}</QuantityCart>
          <ButtonCountProduct onClick={() => addToCart(product)}>
            +
          </ButtonCountProduct>
        </CartInListActionsContent>
        <BsTrash3
          style={{ fontSize: "36px", color: "var(--primary)" }}
          onClick={() => removeFromCart(product)}
        />
      </CartInListActions>
    </CartInListLi>
  );
};

export default CartInList;
