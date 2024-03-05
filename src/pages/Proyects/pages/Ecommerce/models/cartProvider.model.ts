export interface CartProviderProps<T> {
  cart: T[];
  addToCart: (product: T) => void;
  deleteOneToCart: (product: T) => void;
  removeFromCart: (product: T) => void;
  clearCart: () => void;
}
