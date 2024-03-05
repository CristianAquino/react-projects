const { VITE_BASE_ROUTE } = import.meta.env;

export const BASE_API_ROUTE = {
  GIFS: "https://api.giphy.com/v1/",
};

const API_ROUTE = {
  PRODUCT: `${VITE_BASE_ROUTE}/product`,
  STRIPE: `${VITE_BASE_ROUTE}/stripe`,
  ORDER: `${VITE_BASE_ROUTE}/order`,
};

export const PRIVATE_ROUTE = {};
export const PUBLIC_ROUTE = {
  HOME: "/",
  PROYECTS: "/proyects",
  COMPONENTS: "/components",
};
export const SERVICE_ROUTE = {
  ALLPRODUCTS: `${API_ROUTE.PRODUCT}/all-products`,
  ADDPRODUCT: `${API_ROUTE.PRODUCT}/add-product`,
  UPDATEPRODUCT: `${API_ROUTE.PRODUCT}/update-product`,
  DELETEPRODUCT: `${API_ROUTE.PRODUCT}/delete-product`,
  SLUGPRODUCT: `${API_ROUTE.PRODUCT}/`,
  CHECKOUT: `${API_ROUTE.STRIPE}/create-checkout-session`,
};
export const PROYECTS_ROUTE = {
  ECOMMERCE: "/ecommerce",
  GIFS: "/gifs",
};

export const COMPONENTS_ROUTE = {};
