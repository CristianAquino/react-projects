"use client";

import { ChangeEvent, useState } from "react";
import { FCCard } from "../FCCard";
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
  const [player, setPlayer] = useState("Maino");
  const [image, setImage] = useState("/data/th.png");
  const [chemistry, setChemistry] = useState(
    "/data/FIFA/CHEMISTRY_STYLE/Midfield/powerhouse.svg"
  );
  const [playStyle, setPlayStyle] = useState([
    "/data/FIFA/PLAYSTYLE/TIROS_A_PUERTA/chip_hot.svg",
    "/data/FIFA/PLAYSTYLE/TIROS_A_PUERTA/dead_ball.svg",
    "/data/FIFA/PLAYSTYLE/TIROS_A_PUERTA/finesse_shot.svg",
  ]);
  const [card, setCard] = useState(
    "/data/FIFA/CARD/upscale-team_of_the_year.png"
  );
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

  function handlePlayStyleChange(e: ChangeEvent<HTMLSelectElement>) {
    const name = parseInt(e.target.name);
    const nuevo = e.target.value;
    setPlayStyle(
      playStyle.map((e, i) => {
        if (i == name) return nuevo;
        return e;
      })
    );
  }
  function handleAttributesChange(e: ChangeEvent<HTMLInputElement>) {
    const name = parseInt(e.target.name);
    const nuevo = e.target.value;
    setAtt(
      att.map((e, i) => {
        if (i == name) return nuevo;
        return e;
      })
    );
  }

  function handleWorkChange(e: ChangeEvent<HTMLSelectElement>) {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "att") {
      let n = value + work.substring(1);
      setWork(n);
    }
    if (name == "def") {
      let n = work.substring(0, 2) + value;
      setWork(n);
    }
  }

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
          <select
            name="card"
            value={card}
            onChange={(e) => setCard(e.target.value)}
          >
            <option value="/data/FIFA/CARD/upscale-team_of_the_year.png">
              team year
            </option>
            <option value="/data/FIFA/CARD/upscale-team_of_the_season_old.png">
              team season
            </option>
          </select>
        </ContentOption>
        <ContentOption>
          <label>chemistry style</label>
          <select
            name="chemistry"
            value={chemistry}
            onChange={(e) => setChemistry(e.target.value)}
          >
            <option value="/data/FIFA/CHEMISTRY_STYLE/Midfield/powerhouse.svg">
              powerhouse
            </option>
            <option value="/data/FIFA/CHEMISTRY_STYLE/Midfield/artist.svg">
              artist
            </option>
          </select>
        </ContentOption>
        <ContentOption>
          <label>playstyle1</label>
          <select
            name="0"
            value={playStyle[0]}
            onChange={handlePlayStyleChange}
          >
            <option value="/data/FIFA/PLAYSTYLE/PASES/incisive_pass.svg">
              incisive_pass
            </option>
            <option value="/data/FIFA/PLAYSTYLE/PASES/long_ball_pass.svg">
              lon ball pass
            </option>
          </select>
        </ContentOption>
        <ContentOption>
          <label>playstyle2</label>
          <select
            name="1"
            value={playStyle[1]}
            onChange={handlePlayStyleChange}
          >
            <option value="/data/FIFA/PLAYSTYLE/GUARDAMETA/cross_laimer.svg">
              cross_lamier
            </option>
            <option value="/data/FIFA/PLAYSTYLE/GUARDAMETA/far_reach.svg">
              far reach
            </option>
          </select>
        </ContentOption>
        <ContentOption>
          <label>playstyle3</label>
          <select
            name="2"
            value={playStyle[2]}
            onChange={handlePlayStyleChange}
          >
            <option value="/data/FIFA/PLAYSTYLE/DEFENSA/anticipate.svg">
              anticipate
            </option>
            <option value="/data/FIFA/PLAYSTYLE/DEFENSA/block.svg">
              block
            </option>
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
            <option value="3">3*</option>
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
            <option value="3">3*</option>
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
