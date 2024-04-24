"use client";

import { useEffect, useState } from "react";
import { Club, InputAlineation, PlayerLineUp, Team } from "..";
import { Cancha, Container, Data } from "./styled-components";

export type StadiumProps = {
  // types...
};

const Stadium = ({}: StadiumProps) => {
  const [formation, setFormation] = useState("");
  const [hijos, setHijos] = useState<any>([]);
  const [{ team, players }, setPlayers] = useState<any>([]);

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
        return setFormation(m[0]);
      }
    }
  }

  function handleRefresh() {
    setHijos([]);
    setFormation("");
  }

  function handleTeam() {
    let n = 2;
    const l = formation.split("-");
    l.unshift("1");
    const check = [];
    for (let i = 0; i <= l.length; i++) {
      check.push(
        <PlayerLineUp len={parseInt(l[i])} players={players}></PlayerLineUp>
      );
      n = n + parseInt(l[i]);
    }
    setHijos(check);
  }

  useEffect(() => {
    async function getPlayers() {
      const url = await fetch("/data/data.json");
      const data = await url.json();
      setPlayers(data);
    }
    getPlayers();
  }, []);

  useEffect(() => {
    if (hijos.length === 0) return;
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

  useEffect(() => {
    const details = document.querySelectorAll("details");
    function action(this: any) {
      details.forEach((e) => {
        e.removeAttribute("open");
      });
      this.setAttribute("open");
    }
    details.forEach((e) => {
      e.addEventListener("click", action);
    });
    return () => {
      removeEventListener("click", action);
    };
  }, []);

  return (
    <Container>
      <div>
        <Club team={team} />
        <Cancha>{hijos.length > 0 && hijos}</Cancha>
      </div>
      <Data>
        <InputAlineation
          formation={formation}
          handleFormation={handleFormation}
          handleRefresh={handleRefresh}
          handleTeam={handleTeam}
        />
        <hr />
        <Team players={players} />
      </Data>
    </Container>
  );
};

export default Stadium;
