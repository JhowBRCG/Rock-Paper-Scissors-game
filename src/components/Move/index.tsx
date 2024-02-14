import paper from "@assets/imgs/icon-paper.svg";
import scissors from "@assets/imgs/icon-scissors.svg";
import rock from "@assets/imgs/icon-rock.svg";
import * as S from "./styles.styled";

type MoveProps = {
  move: string;
  updateMove?: (move: string) => void | undefined;
  gameResult?: string;
};

export const Move = ({ move, updateMove, gameResult }: MoveProps) => {
  let moveImage: string = "";
  if (move === "paper") moveImage = paper;
  if (move === "scissors") moveImage = scissors;
  if (move === "rock") moveImage = rock;

  return (
    <S.Move
      aria-label={move}
      $move={move}
      $gameResult={gameResult}
      onClick={() => updateMove?.(move)}
    >
      <img src={moveImage} alt={move} />
    </S.Move>
  );
};
