import { usePlayerContext } from "contexts/Player";
import { useComputerContext } from "contexts/Computer";
import * as S from "./styles.styled";

export const PlayAgainButton = () => {
  const { resetPlayer } = usePlayerContext();
  const { resetComputer } = useComputerContext();

  const resetGame = () => {
    resetPlayer();
    resetComputer();
  };
  return <S.Button onClick={() => resetGame()}>PLAY AGAIN</S.Button>;
};
