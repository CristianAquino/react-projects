"use client";

import { ChangeEvent, useState } from "react";
import {
  Attribute,
  Attributes,
  Bottom,
  Box,
  Container,
  Content,
  ContentOption,
  Flags,
  LeftCenter,
  Player,
  Preview,
  RightCenter,
  TopLeft,
} from "./styled-components";
import { FaStar } from "react-icons/fa";

export type CreateCardProps = {
  // types...
};

const CreateCard = ({}: CreateCardProps) => {
  const [player, setPlayer] = useState("Maino");
  const [image, setImage] = useState("/data/th.png");

  function handleImage({ target }: ChangeEvent<HTMLInputElement>) {
    if (target.files == null) return setImage("/data/th.png");
    const img = target.files[0];
    setImage(URL.createObjectURL(img));
  }

  return (
    <Container>
      <Preview>
        <Box>
          <img
            src="/data/FIFA/CARD/upscale-team_of_the_year.png"
            alt="upscale-team_of_the_year"
          />
          <TopLeft>
            <span>92</span>
            <span>CDM</span>
            <img
              src="/data/FIFA/CHEMISTRY_STYLE/Midfield/powerhouse.svg"
              alt=""
            />
          </TopLeft>
          <LeftCenter>
            <img
              src="/data/FIFA/PLAYSTYLE/TIROS_A_PUERTA/chip_hot.svg"
              alt=""
            />
            <img
              src="/data/FIFA/PLAYSTYLE/TIROS_A_PUERTA/dead_ball.svg"
              alt=""
            />
            <img
              src="/data/FIFA/PLAYSTYLE/TIROS_A_PUERTA/finesse_shot.svg"
              alt=""
            />
          </LeftCenter>
          <RightCenter>
            <div>
              <p>skill</p>
              <p>
                4 <FaStar />
              </p>
            </div>
            <div>
              <p>weak</p>
              <p>
                4 <FaStar />
              </p>
            </div>
            <div>
              <p>work</p>
              <p>H/W</p>
            </div>
          </RightCenter>
          <Bottom>
            <p>{player}</p>
            <Attributes>
              <Attribute>
                <span>PAC</span>
                <span>90</span>
              </Attribute>
              <Attribute>
                <span>SHO</span>
                <span>86</span>
              </Attribute>
              <Attribute>
                <span>PAS</span>
                <span>92</span>
              </Attribute>
              <Attribute>
                <span>DRI</span>
                <span>86</span>
              </Attribute>
              <Attribute>
                <span>DEF</span>
                <span>86</span>
              </Attribute>
              <Attribute>
                <span>PHY</span>
                <span>85</span>
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
      </Preview>
      <Content>
        <ContentOption>
          <label>select card</label>
          <input type="text" />
        </ContentOption>
        <ContentOption>
          <label>name</label>
          <input
            type="text"
            placeholder="insert your name"
            value={player}
            onChange={(e) => setPlayer(e.target.value)}
          />
        </ContentOption>
        <ContentOption>
          <label>image</label>
          <input type="file" onChange={handleImage} />
        </ContentOption>
        <ContentOption>
          <label>chemistry style</label>
          {/*select 1*/}
        </ContentOption>
        <ContentOption>
          <label>playstyle</label>
          {/*select max 3*/}
          <input type="text" />
        </ContentOption>
        <ContentOption>
          <label>Att Workrate</label>
        </ContentOption>
        <ContentOption>
          <label>Def Workrate</label>
          <input type="text" />
        </ContentOption>
        <ContentOption>
          <label>Skill Moves</label>
          {/*select max 5 stars*/}
          <input type="text" />
        </ContentOption>
        <ContentOption>
          <label>Weak Foot</label>
          {/*select max 5 stars*/}
          <input type="text" />
        </ContentOption>
        <ContentOption>
          <label>rating - overall</label>
        </ContentOption>
        <ContentOption>
          <label>position</label>
        </ContentOption>
        <ContentOption>
          <label>club</label>
        </ContentOption>
        <ContentOption>
          <label>league</label>
        </ContentOption>
        <ContentOption>
          <label>nation</label>
        </ContentOption>
        <ContentOption>
          <label>atributes</label>
        </ContentOption>
        <ContentOption>
          <label>pace - pac</label>
        </ContentOption>
        <ContentOption>
          <label>shooting - sho</label>
        </ContentOption>
        <ContentOption>
          <label>passing - pass</label>
        </ContentOption>
        <ContentOption>
          <label>dribbling - dri</label>
        </ContentOption>
        <ContentOption>
          <label>defending - def</label>
        </ContentOption>
        <ContentOption>
          <label>physicality - phy</label>
        </ContentOption>
      </Content>
    </Container>
  );
};

export default CreateCard;
