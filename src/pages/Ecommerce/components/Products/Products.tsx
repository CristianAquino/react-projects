import { useEffect, useState } from "react";
import { Brands, FilterProducts } from "..";
import { Product } from "../../models";
import { getproducts } from "../../services";
import { GridProducts } from "../../style-components";
import { Main } from "../../style-components/General.style";
import { CardProduct } from "../CardProduct";

export type ProductsProps = {};

const Products = ({}: ProductsProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function callAllProducts() {
      const data = await getproducts();
      setProducts(data);
    }
    callAllProducts();
  }, []);

  return (
    <Main>
      <FilterProducts />
      <div style={{ width: "80%" }}>
        <div
          style={{
            color: "black",
            padding: "1rem 0",
            display: "flex",
            position: "sticky",
            top: "96px",
            zIndex: 3,
            background: "#fff",
            borderBottom: "1px solid var(--primary)",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(1rem, 1rem + 0.7vw, 2rem)",
              display: "inline",
            }}
          >
            Brands:
          </h3>
          <Brands />
        </div>
        <GridProducts>
          {products.length > 0 ? (
            products.map((product: Product) => (
              <CardProduct key={product.id} product={product} />
            ))
          ) : (
            <p style={{ color: "black" }}>No hay productos</p>
          )}
        </GridProducts>
      </div>
    </Main>
  );
};

export default Products;
