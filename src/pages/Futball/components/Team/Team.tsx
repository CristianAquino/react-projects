"use client";

import { Details, ItemPlayer, ListPlayerData } from "./styled-components";

export type TeamProps = {
  // types...
  players: string[];
};

const Team = ({ players }: TeamProps) => {
  return (
    <div>
      <h3>players</h3>
      <Details open>
        <summary>goalkeeper</summary>
        <ListPlayerData>
          {players
            ?.filter(
              (e: any) => e.position.toLocaleLowerCase() === "goalkeeper"
            )
            .map((player: any) => (
              <ItemPlayer key={player.id}>
                <img src={player.photo} />
                {player.name}
              </ItemPlayer>
            ))}
        </ListPlayerData>
      </Details>
      <Details>
        <summary>defender</summary>
        <ListPlayerData>
          {players
            ?.filter((e: any) => e.position.toLocaleLowerCase() === "defender")
            .map((player: any) => (
              <ItemPlayer key={player.id}>
                <img src={player.photo} />
                {player.name}
              </ItemPlayer>
            ))}
        </ListPlayerData>
      </Details>
      <Details>
        <summary>midfielder</summary>
        <ListPlayerData>
          {players
            ?.filter(
              (e: any) => e.position.toLocaleLowerCase() === "midfielder"
            )
            .map((player: any) => (
              <ItemPlayer key={player.id}>
                <img src={player.photo} />
                {player.name}
              </ItemPlayer>
            ))}
        </ListPlayerData>
      </Details>
      <Details>
        <summary>attacker</summary>
        <ListPlayerData>
          {players
            ?.filter((e: any) => e.position.toLocaleLowerCase() === "attacker")
            .map((player: any) => (
              <ItemPlayer key={player.id}>
                <img src={player.photo} />
                {player.name}
              </ItemPlayer>
            ))}
        </ListPlayerData>
      </Details>
    </div>
  );
};

export default Team;
