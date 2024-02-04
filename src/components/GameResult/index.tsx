import { PlayAgainButton } from "@components/PlayAgainButton";
import * as S from "./styles.styled";

type GameResultProps = {
  result: string;
};

export const GameResult = ({ result }: GameResultProps) => {
  return (
    <S.GameResult>
      <h2>{result}</h2>
      <PlayAgainButton />
    </S.GameResult>
  );
};
