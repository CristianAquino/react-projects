"use client";

import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import {
  Attribute,
  Attributes,
  Bottom,
  Box,
  Flags,
  LeftCenter,
  Player,
  RightCenter,
  TopLeft,
} from "./styled-components";

export type FCCardProps = {
  // types...
  card: any;
  overall: string;
  position: string;
  chemistry: any;
  playStyle: any[];
  skill: any;
  weak: any;
  work: string;
  player: string;
  att: string[];
  image: string;
};

const FCCard = ({
  card,
  overall,
  position,
  chemistry,
  playStyle,
  skill,
  weak,
  work,
  player,
  att,
  image,
}: FCCardProps) => {
  useEffect(() => {
    const content = document.querySelector(".svgContent");
    if (!content) return;
    const svgs = content.querySelectorAll("svg");
    svgs.forEach((svg) => {
      let path = svg.querySelectorAll("path");
      path.forEach((p, index) => {
        if (index == 0) {
          p.setAttribute("fill", card.card.background);
        } else {
          p.setAttribute("fill", card.card.color);
        }
      });
    });
  }, [card, playStyle]);

  useEffect(() => {
    const content = document.querySelector(".chemistry svg");
    if (!content) return;
    content.querySelector("g")?.setAttribute("fill", card.card.color);
  }, [card, chemistry]);

  return (
    <Box>
      <img src={card?.card.image} alt="upscale-team_of_the_year" />
      <TopLeft className="chemistry">
        <span>{overall}</span>
        <span>{position}</span>
        {chemistry}
      </TopLeft>
      <LeftCenter className="svgContent">
        {playStyle.map((ele) => {
          if (typeof ele === "function") return ele();
          return ele;
        })}
      </LeftCenter>
      <RightCenter>
        <div>
          <p>skill</p>
          <p>
            {skill.card.name} <FaStar />
          </p>
        </div>
        <div>
          <p>weak</p>
          <p>
            {weak.card.name} <FaStar />
          </p>
        </div>
        <div>
          <p>work</p>
          <p>{work}</p>
        </div>
      </RightCenter>
      <Bottom>
        <p>{player}</p>
        <Attributes>
          <Attribute>
            <span>PAC</span>
            <span>{att[0]}</span>
          </Attribute>
          <Attribute>
            <span>SHO</span>
            <span>{att[1]}</span>
          </Attribute>
          <Attribute>
            <span>PAS</span>
            <span>{att[2]}</span>
          </Attribute>
          <Attribute>
            <span>DRI</span>
            <span>{att[3]}</span>
          </Attribute>
          <Attribute>
            <span>DEF</span>
            <span>{att[4]}</span>
          </Attribute>
          <Attribute>
            <span>PHY</span>
            <span>{att[5]}</span>
          </Attribute>
        </Attributes>
        <Flags>
          <img src="/data/FIFA/COUNTRY/england.png" alt="" />
          <img src="/data/FIFA/LEAGUE/pl.png" alt="" />
          <img src="/data/FIFA/TEAM/mu.png" alt="" />
        </Flags>
      </Bottom>
      <Player>
        <img src={image} alt="" className="user" />
      </Player>
    </Box>
  );
};

export default FCCard;
