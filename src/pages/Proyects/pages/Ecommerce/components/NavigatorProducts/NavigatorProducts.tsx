import { ButtonNavigate } from "../../style-components";

export type NavigatorProductsProps = {};

const NavigatorProducts = ({}: NavigatorProductsProps) => {
  return (
    <nav style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
      <ButtonNavigate>most recent</ButtonNavigate>
      <ButtonNavigate>lower price</ButtonNavigate>
      <ButtonNavigate>hightes price</ButtonNavigate>
    </nav>
  );
};

export default NavigatorProducts;
