"use client";

import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaXTwitter,
} from "react-icons/fa6";
import { AvatarImage } from "../Avatar/Avatar";
import { SocialIcon } from "../Social/Social";
import {
  Container,
  ContentLeft,
  ContentRight,
  ContentRightBotton,
  ContentRightTop,
} from "./styled-components";
import { getRandomColor } from "./util";

export type CardProps = {
  // types...
};

const Card = ({}: CardProps) => {
  const skills = ["html", "css", "javascript", "react", "typescript", "python"];
  const socials = [
    {
      url: "#",
      icon: <FaFacebookF />,
    },
    {
      url: "#",
      icon: <FaInstagram />,
    },
    {
      url: "#",
      icon: <FaXTwitter />,
    },
  ];

  return (
    <Container background="#a34">
      <ContentLeft>
        <AvatarImage
          shape="circle"
          size="6rem"
          src="https://unavatar.io/youtube/casey"
        />
        <div>
          <h1>Lorem, ipsum.</h1>
          <h5>Lorem, ipsum.</h5>
        </div>
        <div>
          <p>
            <FaLocationDot />
            Lorem, ipsum.
          </p>
          <p>
            <FaEnvelope />
            lorem@ipsum.com
          </p>
        </div>
      </ContentLeft>
      <ContentRight>
        <ContentRightTop>
          <p>skills:</p>
          <p>
            {skills.map((skill) => {
              let color = getRandomColor();
              return (
                <span style={{ backgroundColor: color }} key={skill}>
                  {skill}
                </span>
              );
            })}
          </p>
        </ContentRightTop>
        <ContentRightBotton>
          {socials.map((social, index) => (
            <SocialIcon
              url={social.url}
              style={{ fontSize: "1.5rem", background: "var(--darkMode)" }}
              shape="circle"
              size="2.5rem"
              icon={social.icon}
              key={index}
            />
          ))}
        </ContentRightBotton>
      </ContentRight>
    </Container>
  );
};

// https://dev.to/jon_snow789/css-card-gradient-hover-effect-228n
// https://dev.to/ahmadbassamemran/css-clip-path-card-hover-effects-only-using-html-css-2dk6
// https://dev.to/frontendsolutions/13-css-blog-cards-54d7
// https://dev.to/deadlybyte/css-animations-inspired-by-bbcs-match-of-the-day-192o
// https://dev.to/sfundomhlungu/ultimate-css-guide-for-beginners-build-3-card-components-4doh
// https://css-tricks.com/transformer-tabs/
// https://css-tricks.com/functional-css-tabs-revisited/
export default Card;
