"use client";

import { Details, ItemPlayer, ListPlayerData } from "./styled-components";

export type TeamProps = {
  // types...
  players: string[];
};

const Team = ({ players }: TeamProps) => {
  return (
    <div>
      <h3>Players</h3>
      <Details open>
        <summary>Goalkeeper</summary>
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
        <summary>Defender</summary>
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
        <summary>Midfielder</summary>
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
        <summary>Attacker</summary>
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
