"use client";

import { useState } from "react";
import { DropdownWithSearch } from "../Dropdown";

export type HomeProps = {
  // types...
};

const Home = ({}: HomeProps) => {
  // const thumbnails = [
  //   "https://unavatar.io/youtube/casey",
  //   "https://unavatar.io/twitter/kikobeats",
  //   "https://unavatar.io/soundcloud/gorillaz",
  //   "https://unavatar.io/youtube/casey",
  //   "https://unavatar.io/twitter/kikobeats",
  //   "https://unavatar.io/soundcloud/gorillaz",
  //   "https://unavatar.io/youtube/casey",
  //   "https://unavatar.io/twitter/kikobeats",
  //   "https://unavatar.io/soundcloud/gorillaz",
  //   "https://unavatar.io/youtube/casey",
  //   "https://unavatar.io/twitter/kikobeats",
  //   "https://unavatar.io/soundcloud/gorillaz",
  //   "https://unavatar.io/youtube/casey",
  //   "https://unavatar.io/twitter/kikobeats",
  //   "https://unavatar.io/soundcloud/gorillaz",
  // ];
  const card1 = [
    { name: "Card 1", image: "https://unavatar.io/youtube/casey" },
    { name: "Card 2", image: "https://unavatar.io/twitter/kikobeats" },
    { name: "Card 3", image: "https://unavatar.io/youtube/casey" },
    { name: "Card 4", image: "https://unavatar.io/twitter/kikobeats" },
    { name: "Card 11", image: "https://unavatar.io/youtube/casey" },
    { name: "Card 22", image: "https://unavatar.io/twitter/kikobeats" },
    { name: "Card 33", image: "https://unavatar.io/youtube/casey" },
    { name: "Card 44", image: "https://unavatar.io/twitter/kikobeats" },
    { name: "Card 111", image: "https://unavatar.io/youtube/casey" },
    { name: "Card 222", image: "https://unavatar.io/twitter/kikobeats" },
    { name: "Card 333", image: "https://unavatar.io/youtube/casey" },
    { name: "Card 444", image: "https://unavatar.io/twitter/kikobeats" },
  ];
  // const card2 = [{ name: "Card 1", svg: <Test /> }];
  // const [value1, setValue1] = useState("");
  // const [value2, setValue2] = useState<React.ReactNode | null>(null);
  return (
    <div>
      {/* <Avatar thumbnails={thumbnails} /> */}
      {/* <Card /> */}
      {/* {value2}
      <DropdownWithPreviewImage list={card1} onchange={setValue1} />
      <DropdownWithSVG list={card2} onchange={setValue2} />
      <input type="text" /> */}
      {/* <DropdownWithSearch list={card1} searh={value1} /> */}
    </div>
  );
};

// https://css-tricks.com/a-fancy-hover-effect-for-your-avatar/
// https://css-tricks.com/react-component-tests-for-humans/
// https://unavatar.io/#/?id=json

export default Home;
