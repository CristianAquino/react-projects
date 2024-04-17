"use client";

import { ReactNode } from "react";
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

const AvatarText = ({ text, shape }: { text: string; shape?: string }) => {
  const i = text.trim().charAt(0);
  let initial;

  if (/^[+-.*\/]/gi.test(i)) {
    initial = text.trim();
  } else {
    initial = text.trim().charAt(0).toLocaleUpperCase();
  }

  return (
    <BaseAvatar shape={shape}>
      <span>{initial}</span>
    </BaseAvatar>
  );
};
const AvatarIcon = ({ icon, shape }: { icon: ReactNode; shape?: string }) => {
  return <BaseAvatarIcon shape={shape}>{icon}</BaseAvatarIcon>;
};
const AvatarImage = ({ src, shape }: { src: string; shape?: string }) => {
  return (
    <BaseAvatarImage shape={shape}>
      <img src={src} alt="" />
    </BaseAvatarImage>
  );
};
const AvatarGroup = ({
  children,
  type,
}: {
  children: ReactNode;
  type?: string;
}) => <Container type={type}>{children}</Container>;

export default Avatar;
