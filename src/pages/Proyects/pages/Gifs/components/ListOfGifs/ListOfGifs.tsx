import { SingleGif } from "..";
import { Gif } from "../../models";
import { GifsContainer } from "./styled-components";

export type ListOfGifsProps = {
  gifs: Gif[];
};

const ListOfGifs = ({ gifs }: ListOfGifsProps) => {
  return (
    <GifsContainer>
      {gifs.map((gif, index) => (
        <SingleGif key={gif.id} gif={gif} index={index} />
      ))}
    </GifsContainer>
  );
};

export default ListOfGifs;
