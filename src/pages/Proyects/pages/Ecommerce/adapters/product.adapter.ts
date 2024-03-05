import { ProductData } from "../models";

function productData(data: ProductData) {
  return {
    brand: data.brand,
    // category: data.category,
    // date: data.createdAt,
    description: data.description,
    id: data.id,
    image: data.images[0],
    name: data.name,
    // slug: data.slug,
    // stock: data.unitInStock,
    unitPrice: data.unitPrice,
    quantity: 0,
  };
}

export { productData };
