import { Score } from "@components/Score";
import logo from "@assets/imgs/logo.svg";
import * as S from "./styles.styled";

export const Header = () => {
  return (
    <S.ScoreContainer>
      <S.Logo>
        <img src={logo} alt="game logo" />
      </S.Logo>
      <Score />
    </S.ScoreContainer>
  );
};
