"use client";

import { ReactNode } from "react";
import { BaseSocialIcon } from "./styled-components/Social.style";

export type SocialProps = {
  // types...
};

const Social = ({}: SocialProps) => {
  return <div>Social works!</div>;
};

export const SocialIcon = ({
  url,
  icon,
  shape,
  size,
  style,
}: {
  url: string;
  icon: ReactNode;
  shape?: string;
  size?: string;
  style?: React.CSSProperties;
}) => (
  <BaseSocialIcon
    href={url}
    target="_blank"
    shape={shape}
    size={size}
    style={style}
  >
    {icon}
  </BaseSocialIcon>
);

export default Social;
