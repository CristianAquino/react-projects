"use client";

import { Avatar } from "../Avatar";
import { Card } from "../Card";

export type HomeProps = {
  // types...
};

const Home = ({}: HomeProps) => {
  const thumbnails = [
    "https://unavatar.io/youtube/casey",
    "https://unavatar.io/twitter/kikobeats",
    "https://unavatar.io/soundcloud/gorillaz",
    "https://unavatar.io/youtube/casey",
    "https://unavatar.io/twitter/kikobeats",
    "https://unavatar.io/soundcloud/gorillaz",
    "https://unavatar.io/youtube/casey",
    "https://unavatar.io/twitter/kikobeats",
    "https://unavatar.io/soundcloud/gorillaz",
    "https://unavatar.io/youtube/casey",
    "https://unavatar.io/twitter/kikobeats",
    "https://unavatar.io/soundcloud/gorillaz",
    "https://unavatar.io/youtube/casey",
    "https://unavatar.io/twitter/kikobeats",
    "https://unavatar.io/soundcloud/gorillaz",
  ];
  return (
    <div>
      {/* <Avatar thumbnails={thumbnails} /> */}
      <Card />
    </div>
  );
};

// https://css-tricks.com/a-fancy-hover-effect-for-your-avatar/
// https://css-tricks.com/react-component-tests-for-humans/
// https://unavatar.io/#/?id=json

export default Home;
