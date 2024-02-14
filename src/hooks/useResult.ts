import { useEffect } from "react";
import { useComputerContext } from "contexts/Computer";
import { usePlayerContext } from "contexts/Player";
import { calculateComputerResult } from "utils/calculateComputerResult";
import { calculatePlayerResult } from "utils/calculatePlayerResult";

export function useResult() {
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

  return { playerResult, computerResult };
}
