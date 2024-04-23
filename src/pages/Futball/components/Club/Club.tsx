"use client";
import { Logo, LogoData } from "./styled-components";

export type ClubProps = {
  // types...
  team: any;
};

const Club = ({ team }: ClubProps) => {
  return (
    <Logo>
      <img src={team?.logo} alt="" />
      <LogoData>
        <span>{team?.name}</span>
      </LogoData>
      {/* posible aqui del dt */}
    </Logo>
  );
};

export default Club;
