import { SERVICE_ROUTE } from "@routes/index";
import { productData } from "../adapters";
import { ProductData } from "../models";

async function getproducts() {
  const url = await fetch(SERVICE_ROUTE.ALLPRODUCTS);
  const data = await url.json();
  return data.map((product: ProductData) => productData(product));
}

export { getproducts };
