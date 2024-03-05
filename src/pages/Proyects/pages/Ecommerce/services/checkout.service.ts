import { SERVICE_ROUTE } from "@routes/index";
import { Product } from "../models";

async function checkout(product: Product[]) {
  console.log(JSON.stringify(product));
  const url = await fetch(SERVICE_ROUTE.CHECKOUT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return await url.json();
}

export { checkout };
