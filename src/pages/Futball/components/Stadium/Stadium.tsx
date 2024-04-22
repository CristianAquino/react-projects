"use client";

import { useEffect, useState } from "react";
import {
  Banda,
  Cancha,
  Content,
  ItemPlayer,
  ListPlayer,
  Player,
} from "./styled-components";

export type StadiumProps = {
  // types...
};

const Stadium = ({}: StadiumProps) => {
  const [formation, setFormation] = useState("");
  const [hijos, setHijos] = useState<any>([]);
  const [col, setCol] = useState(0);
  const [{ team, players }, setPlayers] = useState<any>([]);
  const n = Array.from({ length: 11 }).fill(
    "https://i.postimg.cc/V6zbW55L/blank-profile-picture.png"
  ) as string[];
  const [urls, setUrl] = useState<string[]>(n);

  function handleFormation(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const rgx = /^([1-9]|-)+/gi;
    const m = value.match(rgx) || [""];

    if (m[0].charAt(0) === "-") {
      return setFormation("");
    }

    if (!m[0].includes("-")) {
      const a = m[0].split("");
      const t = a.reduce((acc, curr) => {
        acc += parseInt(curr);
        return acc;
      }, 0);
      if (t > 10) {
        return setFormation(m[0].slice(0, m[0].lastIndexOf("-")));
      } else {
        return setFormation(a.join("-"));
      }
    }

    if (m[0].includes("-")) {
      let t = m[0].split("-").reduce((acc, curr) => {
        acc += parseInt(curr);
        return acc;
      }, 0);

      if (t > 10) {
        return setFormation(m[0].slice(0, m[0].lastIndexOf("-")));
      } else {
        setCol(m[0].split("-").length - 1);
        return setFormation(m[0]);
      }
    }
  }

  function handleClick() {
    let n = 2;
    const l = formation.split("-");
    const check = [];
    for (let i = 0; i <= col; i++) {
      check.push(<Ja n={parseInt(l[i])} p={n} urls={urls} players={players} />);
      n = n + parseInt(l[i]);
    }
    setHijos(check);
  }

  useEffect(() => {
    async function getPlayers() {
      const url = await fetch("/data.json");
      const data = await url.json();
      setPlayers(data);
    }
    getPlayers();
  }, []);

  useEffect(() => {
    const li = document.querySelectorAll("label");
    function ac(this: any) {
      li.forEach((e) => {
        e.classList.remove("ja");
      });
      this.classList.add("ja");
    }
    li.forEach((e) => {
      e.addEventListener("click", ac);
    });
    return () => {
      removeEventListener("click", ac);
    };
  }, [hijos]);

  function handleChange({ photo, pos }: { photo: string; pos: number }) {
    const nuevo = [...urls].map((e, i) => {
      if (i === pos) {
        return photo;
      }
      return e;
    });
    setUrl(nuevo);
  }

  return (
    <>
      <input type="text" value={formation} onChange={handleFormation} />
      <button onClick={handleClick}>click</button>
      <p>{team?.name}</p>
      <img src={team?.logo} alt="" />

      <div style={{ display: "flex", placeContent: "center" }}>
        <Cancha>
          {hijos.length > 0 && (
            <>
              <Banda>
                <Content>
                  <Player>
                    <img
                      src={urls[0]}
                      alt=""
                      style={{
                        width: "4.5rem",
                        height: "4.5rem",
                        borderRadius: "50%",
                      }}
                    />
                  </Player>
                  <ListPlayer>
                    {players?.map((player: any) => (
                      <ItemPlayer
                        key={player.id}
                        onClick={() =>
                          handleChange({ photo: player.photo, pos: 0 })
                        }
                      >
                        <img src={player.photo} />
                        {player?.name}
                      </ItemPlayer>
                    ))}
                  </ListPlayer>
                </Content>
              </Banda>
              {hijos}
            </>
          )}
        </Cancha>
      </div>
    </>
  );
};

const Ja = ({
  n,
  p,
  urls,
  players,
}: {
  n: number;
  p: number;
  urls: string[];
  players: string[];
}) => {
  const [ja, setJa] = useState(urls.slice(0, n));
  function handleChange({ photo, pos }: { photo: string; pos: number }) {
    const nuevo = [...ja].map((e, i) => {
      if (i === pos) {
        return photo;
      }
      return e;
    });
    setJa(nuevo);
  }
  return (
    <Banda>
      {Array.from({ length: n }).map((_, index) => (
        <Content key={p + index}>
          <Player>
            <img
              src={ja[index]}
              alt=""
              style={{
                width: "4.5rem",
                height: "4.5rem",
                borderRadius: "50%",
              }}
            />
          </Player>
          <ListPlayer>
            {players?.map((player: any) => (
              <ItemPlayer
                key={player.id}
                onClick={() =>
                  handleChange({ photo: player.photo, pos: index })
                }
              >
                <img src={player.photo} />
                {player?.name}
              </ItemPlayer>
            ))}
          </ListPlayer>
        </Content>
      ))}
    </Banda>
  );
};
export default Stadium;
