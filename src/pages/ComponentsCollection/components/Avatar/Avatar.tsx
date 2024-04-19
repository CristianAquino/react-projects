"use client";

import { AiFillAccountBook } from "react-icons/ai";
import {
  BaseAvatar,
  BaseAvatarIcon,
  BaseAvatarImage,
  Container,
} from "./styled-components";

export type AvatarProps = {
  // types...
  thumbnails: string[];
};

const Avatar = ({ thumbnails }: AvatarProps) => {
  return (
    <>
      <AvatarText shape="circle" text="sdasd" />
      <AvatarIcon icon={<AiFillAccountBook />} />
      <AvatarImage src="https://unavatar.io/youtube/casey" />
      <AvatarGroup type="hover-scale">
        {thumbnails.map((e) => (
          <AvatarImage shape="circle" src={e} />
        ))}
        <AvatarText shape="circle" text="+2" />
      </AvatarGroup>
      <AvatarGroup>
        {thumbnails.map((e) => (
          <AvatarImage shape="circle" src={e} />
        ))}
        <AvatarText shape="circle" text="2" />
      </AvatarGroup>
    </>
  );
};

export const AvatarText = ({
  text,
  shape,
  style,
}: {
  text: string;
  shape?: string;
  style?: React.CSSProperties;
}) => {
  const i = text.trim().charAt(0);
  let initial;

  if (/^[+-.*\/]/gi.test(i)) {
    initial = text.trim();
  } else {
    initial = text.trim().charAt(0).toLocaleUpperCase();
  }

  return (
    <BaseAvatar shape={shape} style={style}>
      <span>{initial}</span>
    </BaseAvatar>
  );
};
export const AvatarIcon = ({
  icon,
  shape,
  style,
}: {
  shape?: string;
  icon: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <BaseAvatarIcon shape={shape} style={style}>
      {icon}
    </BaseAvatarIcon>
  );
};
export const AvatarImage = ({
  src,
  shape,
  size,
  style,
}: {
  src: string;
  shape?: string;
  size?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <BaseAvatarImage shape={shape} size={size} style={style}>
      <img src={src} alt="" />
    </BaseAvatarImage>
  );
};
export const AvatarGroup = ({
  children,
  type,
  style,
}: {
  type?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <Container type={type} style={style}>
    {children}
  </Container>
);

export default Avatar;
