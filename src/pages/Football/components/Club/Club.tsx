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
        <p>{team?.name}</p>
      </LogoData>
      {/* posible aqui del dt */}
      <LogoData>
        <p>{team?.manager}</p>
        <span>DT</span>
      </LogoData>
      <img src={team?.photo} alt="" />
    </Logo>
  );
};

export default Club;
