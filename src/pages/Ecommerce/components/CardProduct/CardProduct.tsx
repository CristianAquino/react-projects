import { unitDecimal } from "@helpers/index";
import { useCustomerContext } from "@hooks/index";
import { CartContext } from "../../context/CartContext";
import { Product } from "../../models";
import { ButtonAddToCart } from "../../style-components";
import {
  BrandProduct,
  CartToProduct,
  NameProduct,
  PriceProduct,
} from "../../style-components/Product.style";
import { CardImageProduct } from "./styled-component";

export type CardProductProps = {
  product: Product;
};

const CardProduct = ({ product }: CardProductProps) => {
  const { addToCart, cart } = useCustomerContext(CartContext);
  const newPrice = unitDecimal(product.unitPrice);
  const isInCart = cart.some((p) => p.id == product.id);

  const [label, clase] = isInCart
    ? ["agregado", "inCart"]
    : ["agregar al carrito", ""];

  return (
    <CartToProduct className={clase}>
      {/* <CartToProduct data-parent={product.dsc}> */}
      <CardImageProduct src={product.image} alt={product.name} />
      <div style={{ padding: ".5rem 0" }}>
        <BrandProduct>{product.brand}</BrandProduct>
        <NameProduct>{product.name}</NameProduct>
        <PriceProduct>s/. {newPrice}</PriceProduct>
      </div>
      <ButtonAddToCart onClick={() => addToCart(product)}>
        {label}
      </ButtonAddToCart>
    </CartToProduct>
  );
};

export default CardProduct;
