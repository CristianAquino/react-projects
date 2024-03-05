import { EcomerceLogo } from "@app/assets/ecomerceLogo";
import { PROYECTS_ROUTE } from "@app/routes";
import { Link } from "react-router-dom";

export type LogoEcommerceProps = {};

const LogoEcommerce = ({}: LogoEcommerceProps) => {
  return (
    <>
      <Link
        to={PROYECTS_ROUTE.ECOMMERCE}
        className="logo"
        style={{
          margin: "0 auto",
          width: "20%",
          textAlign: "center",
        }}
      >
        <EcomerceLogo />
      </Link>
    </>
  );
};

export default LogoEcommerce;
