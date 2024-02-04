import { usePlayerContext } from "contexts/Player";
import { useComputerContext } from "contexts/Computer";
import { Move } from "@components/Move";
import { GameResult } from "@components/GameResult";
import { calculatePlayerResult } from "utils/calculatePlayerResult";
import { calculateComputerResult } from "utils/calculateComputerResult";
import { useEffect } from "react";
import * as S from "./styles.styled";

export const BattleStage = () => {
  const { player, handlePlayerResult } = usePlayerContext();
  const { computer, handleComputerResult } = useComputerContext();

  useEffect(() => {
    calculatePlayerResult(
      player.playerMove,
      computer.computerMove,
      handlePlayerResult
    );

    calculateComputerResult(
      player.playerMove,
      computer.computerMove,
      handleComputerResult
    );
  }, []);

  const playerResult = player.result;
  const computerResult = computer.result;

  return (
    <S.BattleStage>
      <S.PlayerChoice>
        <h2>YOU PICKED</h2>
        <Move move={player.playerMove} gameResult={playerResult} />
      </S.PlayerChoice>
      <GameResult result={player.result} />
      <S.PlayerChoice>
        <h2>THE HOUSE PICKED</h2>
        <Move move={computer.computerMove} gameResult={computerResult} />
      </S.PlayerChoice>
    </S.BattleStage>
  );
};
