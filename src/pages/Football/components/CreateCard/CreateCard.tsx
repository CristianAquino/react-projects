"use client";

import { DropdownWithPreviewImage } from "@app/pages/ComponentsCollection/components";
import { ChangeEvent, useEffect, useState } from "react";
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
    },
    style: {
      background: "#161a4f",
      color: "#f5db9b",
    },
  });
  // chemistry
  const chemistryName = [
    "Anchor",
    "Architect",
    "Artist",
    "Backbone",
    "Basic",
    "Cat",
    "Catalyst",
    "Deadeye",
    "Engine",
    "Finisher",
    "Gladiator",
    "Glove",
    "Guardian",
    "Hawk",
    "Hunter",
    "Maestro",
    "Marksman",
    "Powerhouse",
    "Sentinel",
    "Shadow",
    "Shield",
    "Sniper",
    "Wall",
  ];
  const [chemistry, setChemistry] = useState(<Powerhouse />);
  // playstyle
  const playstyleName = [
    "Acrobatic",
    "Aerial",
    "Anticipate",
    "Block",
    "Bruiser",
    "ChipHot",
    "CrossLaimer",
    "DeadBall",
    "FarReach",
    "FarThrow",
    "FinesseShot",
    "FirstTouch",
    "Flair",
    "FootWork",
    "IncisivePass",
    "Intercept",
    "Jockey",
    "LongBallPass",
    "LongThrow",
    "PingedPass",
    "PowerHeader",
    "PowerShot",
    "PressProven",
    "QuickReflexes",
    "QuickStep",
    "Rapid",
    "Relentless",
    "RushOut",
    "./SlideTackle",
    "Technical",
    "TikiTaka",
    "Trickster",
    "Trivela",
    "WhippedPass",
  ];
  const [playStyle, setPlayStyle] = useState([
    <Acrobatic />,
    <Aerial />,
    <Anticipate />,
  ]);

  const [player, setPlayer] = useState("Maino");
  const [image, setImage] = useState("/data/th.png");
  const [skill, setSkill] = useState("4");
  const [weak, setWeak] = useState("5");
  const [work, setWork] = useState("H/M");
  const [overall, setOverall] = useState("92");
  const [position, setPosition] = useState("CDM");
  const [att, setAtt] = useState(["90", "86", "92", "86", "86", "85"]);

  function handleImage({ target }: ChangeEvent<HTMLInputElement>) {
    if (target.files == null) return setImage("/data/th.png");
    const img = target.files[0];
    setImage(URL.createObjectURL(img));
  }

  function handlePlayStyleChange({ target }: ChangeEvent<HTMLSelectElement>) {
    const name = parseInt(target.name);
    const value = target.value;

    import(`../PlayStyle/${value}.tsx`).then((element) => {
      const nuevo = playStyle.map((ele, index) => {
        if (index == name) return element.default;
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

  function handleWorkChange({ target }: ChangeEvent<HTMLSelectElement>) {
    const name = target.name;
    const value = target.value;
    if (name == "att") {
      let n = value + work.substring(1);
      setWork(n);
    }
    if (name == "def") {
      let n = work.substring(0, 2) + value;
      setWork(n);
    }
  }

  // chemistry
  function handleChangeChemistry({ target }: ChangeEvent<HTMLSelectElement>) {
    const value = target.value;
    import(`../Chemistry/${value}.tsx`).then((element) => {
      setChemistry(element.default);
    });
  }

  useEffect(() => {
    const cards = [
      {
        card: {
          name: "team_of_the_year",
          image: "/data/FIFA/CARD/upscale-team_of_the_year.png",
        },
        style: {
          background: "#161a4f",
          color: "#f5db9b",
        },
      },
      {
        card: {
          name: "team_of_the_season",
          image: "/data/FIFA/CARD/upscale-team_of_the_season_old.png",
        },
        style: {
          background: "#090f23",
          color: "#fbebab",
        },
      },
      {
        card: {
          name: "end_of_the_era",
          image: "/data/FIFA/CARD/upscale-end_of_the_era.png",
        },
        style: {
          background: "#491e6f",
          color: "#00f6ff",
        },
      },
    ];
    setCards(cards);
  }, []);

  useEffect(() => {
    const root = document.querySelector(":root") as any;
    if (!root) return;
    root.style.setProperty("--backgroundCardFC", card.style.background);
    root.style.setProperty("--colorCardFC", card.style.color);
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
          <DropdownWithPreviewImage list={cards} onchange={setCard} />
        </ContentOption>
        <ContentOption>
          <label>chemistry style</label>
          <select name="chemistry" onChange={handleChangeChemistry}>
            {chemistryName.map((chemis) => (
              <option key={chemis} value={chemis}>
                {chemis}
              </option>
            ))}
          </select>
        </ContentOption>
        <ContentOption>
          <label>playstyle1</label>
          <select name="0" onChange={handlePlayStyleChange}>
            {playstyleName.map((ele) => (
              <option key={ele} value={ele}>
                {ele}
              </option>
            ))}
          </select>
        </ContentOption>
        <ContentOption>
          <label>playstyle2</label>
          <select name="1" onChange={handlePlayStyleChange}>
            {playstyleName.map((ele) => (
              <option key={ele} value={ele}>
                {ele}
              </option>
            ))}
          </select>
        </ContentOption>
        <ContentOption>
          <label>playstyle3</label>
          <select name="2" onChange={handlePlayStyleChange}>
            {playstyleName.map((ele) => (
              <option key={ele} value={ele}>
                {ele}
              </option>
            ))}
          </select>
        </ContentOption>
        <ContentOption>
          <label>Skill Moves</label>
          <select
            name="skill"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          >
            <option value="1">1*</option>
            <option value="2">2*</option>
            <option value="3">3*</option>
            <option value="4">4*</option>
            <option value="5">5*</option>
          </select>
        </ContentOption>
        <ContentOption>
          <label>Weak Foot</label>
          <select
            name="weak"
            value={weak}
            onChange={(e) => setWeak(e.target.value)}
          >
            <option value="1">1*</option>
            <option value="2">2*</option>
            <option value="3">3*</option>
            <option value="4">4*</option>
            <option value="5">5*</option>
          </select>
        </ContentOption>
        <ContentOption>
          <label>Att Work Rate</label>
          <select name="att" value={work[0]} onChange={handleWorkChange}>
            <option value="L">low</option>
            <option value="M">medium</option>
            <option value="H">high</option>
          </select>
        </ContentOption>
        <ContentOption>
          <label>Def Work Rate</label>
          <select name="def" value={work[2]} onChange={handleWorkChange}>
            <option value="L">low</option>
            <option value="M">medium</option>
            <option value="H">high</option>
          </select>
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
            <label htmlFor="12">physicality - phy</label>
            <input
              type="text"
              name="5"
              value={att[5]}
              onChange={handleAttributesChange}
              id="12"
            />
          </ContentOption>
        </Attributes>
      </Content>
    </Container>
  );
};

export default CreateCard;
