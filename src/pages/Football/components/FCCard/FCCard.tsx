"use client";

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
  card: string;
  overall: string;
  position: string;
  chemistry: string;
  playStyle: string[];
  skill: string;
  weak: string;
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
  return (
    <Box>
      <img src={card} alt="upscale-team_of_the_year" />
      <TopLeft>
        <span>{overall}</span>
        <span>{position}</span>
        <img src={chemistry} alt="" />
      </TopLeft>
      <LeftCenter>
        {playStyle.map((e) => (
          <img src={e} key={e} />
        ))}
      </LeftCenter>
      <RightCenter>
        <div>
          <p>skill</p>
          <p>
            {skill} <FaStar />
          </p>
        </div>
        <div>
          <p>weak</p>
          <p>
            {weak} <FaStar />
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
