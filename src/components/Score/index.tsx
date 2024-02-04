import { useEffect } from "react";
import { useScoreContext } from "contexts/Score";
import { usePlayerContext } from "contexts/Player";
import * as S from "./styles.styled";

export const Score = () => {
  const { score, addScore } = useScoreContext();
  const { player } = usePlayerContext();

  useEffect(() => {
    if (player.result === "YOU WIN") {
      addScore();
    }
  }, [player.result]);

  return (
    <S.Score>
      <S.ScoreText>SCORE</S.ScoreText>
      <S.ScoreNumber>{score}</S.ScoreNumber>
    </S.Score>
  );
};
