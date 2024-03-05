import { memo } from "react";
import { Gif } from "../../models";
import { GifElement, GifImage, GifTitleImage } from "./styled-components";
import { Link } from "react-router-dom";

export type SingleGifProps = {
  gif: Gif;
  index: number;
};
// tomar en cuenta el title en img for seo
const SingleGif = ({ gif, index }: SingleGifProps) => {
  return (
    <GifElement $c={index}>
      <Link to={`?img=${gif.id}`} aria-label={gif.title}>
        <GifImage src={gif.url} alt={gif.title} title={gif.title} />
      </Link>
      <GifTitleImage>{gif.title}</GifTitleImage>
    </GifElement>
  );
};

export default memo(SingleGif);
