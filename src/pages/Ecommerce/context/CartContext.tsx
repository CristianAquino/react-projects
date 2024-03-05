import { createContext, useReducer } from "react";
import { CartProviderProps, Product } from "../models";
import { STORE_TYPE, storeCart } from "../reducer";
import { initialCartContext } from "../helpers";

export const CartContext =
  createContext<CartProviderProps<Product>>(initialCartContext);

export const CartProvider = ({ children }: any) => {
  const [cart, dispatch] = useReducer(storeCart, []);
  const addToCart = (product: Product) => {
    dispatch({ type: STORE_TYPE.ADDTOCART, payload: product });
  };
  const deleteOneToCart = (product: Product) => {
    dispatch({ type: STORE_TYPE.DELETEONETOCART, payload: product });
  };
  const removeFromCart = (product: Product) => {
    dispatch({ type: STORE_TYPE.REMOVETOCART, payload: product });
  };
  const clearCart = () => dispatch({ type: STORE_TYPE.RESETCART });

  const sharedCart: CartProviderProps<Product> = {
    cart,
    addToCart,
    deleteOneToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={sharedCart}>{children}</CartContext.Provider>
  );
};
