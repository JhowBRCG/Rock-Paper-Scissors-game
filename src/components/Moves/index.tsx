import { Move } from "@components/Move";
import { usePlayerContext } from "contexts/Player";
import * as S from "./styles.styled";

export const Moves = () => {
  const { updateMove } = usePlayerContext();

  return (
    <S.Moves>
      <Move move="paper" updateMove={updateMove} />
      <Move move="scissors" updateMove={updateMove} />
      <Move move="rock" updateMove={updateMove} />
    </S.Moves>
  );
};
