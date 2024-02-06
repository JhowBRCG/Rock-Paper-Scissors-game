import { useEffect } from "react";
import { useScoreContext } from "contexts/Score";
import { usePlayerContext } from "contexts/Player";
import { useComputerContext } from "contexts/Computer";
import * as S from "./styles.styled";

export const Score = () => {
  const { score, updateCount } = useScoreContext();
  const { player } = usePlayerContext();
  const { computer } = useComputerContext();

  useEffect(() => {
    if (player.result === "YOU WIN") {
      updateCount("add");
    } else if (computer.result === "YOU WIN") {
      updateCount("subtract");
    }
  }, [player.result]);

  return (
    <S.Score>
      <S.ScoreText>SCORE</S.ScoreText>
      <S.ScoreNumber>{score}</S.ScoreNumber>
    </S.Score>
  );
};
