"use client";

import { DropdownWithSearch } from "@app/pages/ComponentsCollection/components";
import { ChangeEvent, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Powerhouse } from "../Chemistry";
import { FCCard } from "../FCCard";
import { Acrobatic, Aerial, Anticipate } from "../PlayStyle";
import {
  Attributes,
  Container,
  Content,
  ContentOption,
  Preview,
  Title,
} from "./styled-components";

export type CreateCardProps = {
  // types...
};

const CreateCard = ({}: CreateCardProps) => {
  // card
  const [cards, setCards] = useState<any>([]);
  const [card, setCard] = useState({
    card: {
      name: "team_of_the_year",
      image: "/data/FIFA/CARD/upscale-team_of_the_year.png",
      background: "#161a4f",
      color: "#f5db9b",
    },
  });
  // chemistry
  const chemistryName = [
    { name: "Anchor" },
    { name: "Architect" },
    { name: "Artist" },
    { name: "Backbone" },
    { name: "Basic" },
    { name: "Cat" },
    { name: "Catalyst" },
    { name: "Deadeye" },
    { name: "Engine" },
    { name: "Finisher" },
    { name: "Gladiator" },
    { name: "Glove" },
    { name: "Guardian" },
    { name: "Hawk" },
    { name: "Hunter" },
    { name: "Maestro" },
    { name: "Marksman" },
    { name: "Powerhouse" },
    { name: "Sentinel" },
    { name: "Shadow" },
    { name: "Shield" },
    { name: "Sniper" },
    { name: "Wall" },
  ];
  const [chemistry, setChemistry] = useState(<Powerhouse />);
  // playstyle
  const playstyleName = [
    { name: "Acrobatic" },
    { name: "Aerial" },
    { name: "Anticipate" },
    { name: "Block" },
    { name: "Bruiser" },
    { name: "ChipHot" },
    { name: "CrossLaimer" },
    { name: "DeadBall" },
    { name: "FarReach" },
    { name: "FarThrow" },
    { name: "FinesseShot" },
    { name: "FirstTouch" },
    { name: "Flair" },
    { name: "FootWork" },
    { name: "IncisivePass" },
    { name: "Intercept" },
    { name: "Jockey" },
    { name: "LongBallPass" },
    { name: "LongThrow" },
    { name: "PingedPass" },
    { name: "PowerHeader" },
    { name: "PowerShot" },
    { name: "PressProven" },
    { name: "QuickReflexes" },
    { name: "QuickStep" },
    { name: "Rapid" },
    { name: "Relentless" },
    { name: "RushOut" },
    { name: "SlideTackle" },
    { name: "Technical" },
    { name: "TikiTaka" },
    { name: "Trickster" },
    { name: "Trivela" },
    { name: "WhippedPass" },
  ];
  const [playStyle, setPlayStyle] = useState([
    <Acrobatic />,
    <Aerial />,
    <Anticipate />,
  ]);

  const [player, setPlayer] = useState("Maino");
  const [image, setImage] = useState("/data/th.png");
  const [skill, setSkill] = useState({
    card: { name: "4" },
  });
  const skillsName = [
    { name: "1", svg: <FaStar /> },
    { name: "2", svg: <FaStar /> },
    { name: "3", svg: <FaStar /> },
    { name: "4", svg: <FaStar /> },
    { name: "5", svg: <FaStar /> },
  ];
  const [weak, setWeak] = useState({
    card: { name: "5" },
  });
  const weaksName = [
    { name: "1", svg: <FaStar /> },
    { name: "2", svg: <FaStar /> },
    { name: "3", svg: <FaStar /> },
    { name: "4", svg: <FaStar /> },
    { name: "5", svg: <FaStar /> },
  ];
  const [work, setWork] = useState("H/M");
  const [overall, setOverall] = useState("92");
  const [position, setPosition] = useState("CDM");
  const [att, setAtt] = useState(["90", "86", "92", "86", "86", "85"]);

  function handleImage({ target }: ChangeEvent<HTMLInputElement>) {
    if (target.files == null) return setImage("/data/th.png");
    const img = target.files[0];
    setImage(URL.createObjectURL(img));
  }

  function handlePlayStyleChange({ card, pos }: { card: any; pos: number }) {
    import(`../PlayStyle/${card.name}.tsx`).then((element) => {
      const nuevo = playStyle.map((ele, index) => {
        if (index == pos) return element.default;
        return ele;
      });
      setPlayStyle(nuevo);
    });
  }

  function handleAttributesChange({ target }: ChangeEvent<HTMLInputElement>) {
    const name = parseInt(target.name);
    const nuevo = target.value;
    setAtt(
      att.map((e, i) => {
        if (i == name) return nuevo;
        return e;
      })
    );
  }

  function handleWorkChange({ card, pos }: { card: any; pos: number }) {
    if (pos == 0) {
      let n = card.name[0] + work.substring(1);
      setWork(n);
    }
    if (pos == 1) {
      let n = work.substring(0, 2) + card.name[0];
      setWork(n);
    }
  }

  const worksName = [{ name: "Low" }, { name: "Medium" }, { name: "High" }];

  // chemistry
  function handleChangeChemistry({ card }: { card: any }) {
    import(`../Chemistry/${card.name}.tsx`).then((element) => {
      setChemistry(element.default);
    });
  }

  useEffect(() => {
    const cards = [
      {
        name: "Team of the year",
        image: "/data/FIFA/CARD/upscale-team_of_the_year.png",
        background: "#161a4f",
        color: "#f5db9b",
      },
      {
        name: "Team of the season",
        image: "/data/FIFA/CARD/upscale-team_of_the_season_old.png",
        background: "#090f23",
        color: "#fbebab",
      },

      {
        name: "End of the era",
        image: "/data/FIFA/CARD/upscale-end_of_the_era.png",
        background: "#491e6f",
        color: "#00f6ff",
      },
    ];
    setCards(cards);
  }, []);

  useEffect(() => {
    const root = document.querySelector(":root") as any;
    if (!root) return;
    root.style.setProperty("--backgroundCardFC", card?.card.background);
    root.style.setProperty("--colorCardFC", card?.card.color);
  }, [card]);

  return (
    <Container>
      <Preview>
        <FCCard
          att={att}
          card={card}
          chemistry={chemistry}
          image={image}
          overall={overall}
          playStyle={playStyle}
          player={player}
          position={position}
          skill={skill}
          weak={weak}
          work={work}
        />
      </Preview>
      <Content>
        <Title>Card Design Elements</Title>
        <ContentOption>
          <label>select card</label>
          <DropdownWithSearch list={cards} type="image" onChange={setCard} />
        </ContentOption>
        <ContentOption>
          <label>chemistry style</label>
          <DropdownWithSearch
            list={chemistryName}
            onChange={handleChangeChemistry}
            placeholder="search your chemistry"
          />
        </ContentOption>
        <ContentOption>
          <label>playstyle1</label>
          <DropdownWithSearch
            list={playstyleName}
            onChange={handlePlayStyleChange}
            pos={0}
            placeholder="search your playstyle"
          />
        </ContentOption>
        <ContentOption>
          <label>playstyle2</label>
          <DropdownWithSearch
            list={playstyleName}
            onChange={handlePlayStyleChange}
            pos={1}
            placeholder="search your playstyle"
          />
        </ContentOption>
        <ContentOption>
          <label>playstyle3</label>
          <DropdownWithSearch
            list={playstyleName}
            onChange={handlePlayStyleChange}
            pos={2}
            placeholder="search your playstyle"
          />
        </ContentOption>
        <ContentOption>
          <label>Skill Moves</label>
          <DropdownWithSearch
            list={skillsName}
            onChange={setSkill}
            type="svg"
          />
        </ContentOption>
        <ContentOption>
          <label>Weak Foot</label>
          <DropdownWithSearch list={weaksName} onChange={setWeak} type="svg" />
        </ContentOption>
        <ContentOption>
          <label>Att Work Rate</label>
          <DropdownWithSearch
            list={worksName}
            onChange={handleWorkChange}
            pos={0}
          />
        </ContentOption>
        <ContentOption>
          <label>Def Work Rate</label>
          <DropdownWithSearch
            list={worksName}
            onChange={handleWorkChange}
            pos={1}
          />
        </ContentOption>
        <Title>Player Data Elements</Title>
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
          <label>rating - overall</label>
          <input
            type="text"
            value={overall}
            onChange={(e) => setOverall(e.target.value)}
          />
        </ContentOption>
        <ContentOption>
          <label>position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </ContentOption>
        <ContentOption>
          <label>club</label>
          <input type="text" name="" id="" />
        </ContentOption>
        <ContentOption>
          <label>league</label>
          <input type="text" name="" id="" />
        </ContentOption>
        <ContentOption>
          <label>nation</label>
          <input type="text" name="" id="" />
        </ContentOption>
        <label>Atributes</label>
        <Attributes>
          <ContentOption>
            <label>pace - pac</label>
            <input
              type="text"
              name="0"
              value={att[0]}
              onChange={handleAttributesChange}
            />
          </ContentOption>
          <ContentOption>
            <label>shooting - sho</label>
            <input
              type="text"
              name="1"
              value={att[1]}
              onChange={handleAttributesChange}
            />
          </ContentOption>
          <ContentOption>
            <label>passing - pass</label>
            <input
              type="text"
              name="2"
              value={att[2]}
              onChange={handleAttributesChange}
            />
          </ContentOption>
          <ContentOption>
            <label>dribbling - dri</label>
            <input
              type="text"
              name="3"
              value={att[3]}
              onChange={handleAttributesChange}
            />
          </ContentOption>
          <ContentOption>
            <label>defending - def</label>
            <input
              type="text"
              name="4"
              value={att[4]}
              onChange={handleAttributesChange}
            />
          </ContentOption>
          <ContentOption>
            <label>physicality - phy</label>
            <input
              type="text"
              name="5"
              value={att[5]}
              onChange={handleAttributesChange}
            />
          </ContentOption>
        </Attributes>
      </Content>
    </Container>
  );
};

export default CreateCard;
