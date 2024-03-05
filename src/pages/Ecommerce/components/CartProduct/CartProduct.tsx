import { BsTrash3 } from "react-icons/bs";
import { useCustomerContext } from "@hooks/index";
import { CartContext } from "../../context/CartContext";
import { Product } from "../../models";
import { ButtonRemoveToCart, QuantityCart } from "../../style-components";
import {
  BrandProduct,
  ButtonCountProduct,
  NameProduct,
  PriceProduct,
} from "../../style-components/Product.style";
import {
  CartProductActions,
  CartProductContainer,
  CartProductImg,
} from "./styled-components";

export type CartProductProps = {
  product: Product;
};

const CartProduct = ({ product }: CartProductProps) => {
  const { addToCart, deleteOneToCart, removeFromCart } =
    useCustomerContext(CartContext);
  return (
    <CartProductContainer>
      <CartProductImg src={product.image} alt={product.name} />
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexGrow: 2,
        }}
      >
        <div style={{ position: "relative", paddingRight: "2.5rem" }}>
          <BrandProduct style={{ fontSize: "1rem" }}>
            {product.brand}
          </BrandProduct>
          <NameProduct style={{ fontSize: "1.25rem", lineHeight: 1 }}>
            {product.name}
          </NameProduct>
          <PriceProduct style={{ fontSize: "1.75rem" }}>
            s/. {product.unitPrice}
          </PriceProduct>
          <ButtonRemoveToCart onClick={() => removeFromCart(product)}>
            <BsTrash3 />
          </ButtonRemoveToCart>
        </div>
        <CartProductActions>
          <ButtonCountProduct onClick={() => deleteOneToCart(product)}>
            -
          </ButtonCountProduct>
          <QuantityCart>{product.quantity}</QuantityCart>
          <ButtonCountProduct onClick={() => addToCart(product)}>
            +
          </ButtonCountProduct>
        </CartProductActions>
      </div>
    </CartProductContainer>
  );
};

export default CartProduct;
