import { useScore } from "hooks/useScore";
import * as S from "./styles.styled";

export const Score = () => {
  const score = useScore();

  return (
    <S.Score>
      <S.ScoreText>SCORE</S.ScoreText>
      <S.ScoreNumber>{score}</S.ScoreNumber>
    </S.Score>
  );
};
