import { usePlayerContext } from "contexts/Player";
import { useComputerContext } from "contexts/Computer";
import { Move } from "@components/Move";
import { GameResult } from "@components/GameResult";
import { useResult } from "hooks/useResult";
import * as S from "./styles.styled";

export const BattleStage = () => {
  const { player } = usePlayerContext();
  const { computer } = useComputerContext();
  const { playerResult, computerResult } = useResult();

  return (
    <S.BattleStage>
      <S.PlayerChoice>
        <h2>YOU PICKED</h2>
        <Move move={player.playerMove} gameResult={playerResult} />
      </S.PlayerChoice>
      <GameResult result={playerResult} />
      <S.PlayerChoice>
        <h2>THE HOUSE PICKED</h2>
        <Move move={computer.computerMove} gameResult={computerResult} />
      </S.PlayerChoice>
    </S.BattleStage>
  );
};
