import { CartProviderProps, Product } from "../models";

export const initialCartContext: CartProviderProps<Product> = {
  cart: [],
  addToCart: () => {},
  deleteOneToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
};
