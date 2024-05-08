"use client";

import { useState } from "react";
import { ItemPlayer, ListPlayer, Player } from "../Team/styled-components";
import { Banda, Content } from "./styled-components";

export type PlayerLineUpProps = {
  // types...
  len: number;
  players: string[];
};

const PlayerLineUp = ({ len, players }: PlayerLineUpProps) => {
  const initial = Array.from({ length: len }).fill(
    "https://i.postimg.cc/V6zbW55L/blank-profile-picture.png"
  ) as string[];
  const [titular, setTitular] = useState<string[]>(initial);

  function handleChange({ photo, pos }: { photo: string; pos: number }) {
    const nuevo = [...titular].map((e, i) => {
      if (i === pos) {
        return photo;
      }
      return e;
    });
    setTitular(nuevo);
  }

  return (
    <Banda>
      {Array.from({ length: len }).map((_, index) => (
        <Content key={index}>
          <Player>
            <img src={titular[index]} alt="" />
          </Player>
          <ListPlayer>
            {players.map((player: any) => (
              <ItemPlayer
                key={player.id}
                onClick={() =>
                  handleChange({ photo: player.photo, pos: index })
                }
              >
                <img src={player.photo} />
                {player.name}
              </ItemPlayer>
            ))}
          </ListPlayer>
        </Content>
      ))}
    </Banda>
  );
};

export default PlayerLineUp;
