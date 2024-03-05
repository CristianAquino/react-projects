import { Product } from "../models";

const enum STORE_TYPE {
  ADDTOCART = "addtocart",
  DELETEONETOCART = "deleteonetocart",
  REMOVETOCART = "removetocart",
  RESETCART = "resetccart",
}

const storeCart = (state: Product[], action: any): Product[] => {
  switch (action.type) {
    case STORE_TYPE.ADDTOCART: {
      const productInCart = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (productInCart >= 0) {
        const newState = state.slice();
        newState[productInCart].quantity += 1;
        return newState;
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case STORE_TYPE.DELETEONETOCART: {
      const productInCart = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (action.payload.quantity > 1) {
        const newState = state.slice();
        newState[productInCart].quantity -= 1;
        return newState;
      }
      return state.filter((item) => item.id !== action.payload.id);
    }
    case STORE_TYPE.REMOVETOCART: {
      return state.filter((item) => item.id !== action.payload.id);
    }
    case STORE_TYPE.RESETCART: {
      return [];
    }
    default:
      return state;
  }
};

export { STORE_TYPE, storeCart };
