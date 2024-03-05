import { Suspense, lazy, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavigatorEcomerce } from "..";
import { CartProvider } from "../../context/CartContext";
import { Helmet } from "react-helmet";
const Cart = lazy(() => import("../Cart/Cart"));

export type LayoutEcomerceProps = {};

const LayoutEcomerce = ({}: LayoutEcomerceProps) => {
  useEffect(() => {
    const root = document.getElementById("root") as HTMLElement;
    root.style.background = "#fff";
    return () => {
      const root = document.getElementById("root") as HTMLElement;
      root.style.background = "var(--darkMode)";
    };
  }, []);

  return (
    <CartProvider>
      {/* SEO */}
      <Helmet>
        <title>Home | Ecommerce</title>
        <meta
          name="description"
          content="main page of the e-commerce project created by CRdev where a list of products is displayed on the main page"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/ecomIcon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/ecomIcon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/ecomIcon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#121212" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#121212" />
      </Helmet>
      <NavigatorEcomerce />
      <Suspense fallback={<div>Loading...</div>}>
        <Cart />
      </Suspense>
      <Outlet />
    </CartProvider>
  );
};

export default LayoutEcomerce;
