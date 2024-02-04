import { Moves } from "@components/Moves";
import { BattleStage } from "@components/BattleStage";
import { usePlayerContext } from "contexts/Player";
import * as S from "./styles.styled";

export const Jokenpo = () => {
  const { player } = usePlayerContext();

  return (
    <S.BoardContainer>
      {player.playerMove ? <BattleStage /> : <Moves />}
    </S.BoardContainer>
  );
};
