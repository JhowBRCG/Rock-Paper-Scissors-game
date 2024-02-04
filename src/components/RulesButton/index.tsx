import * as S from "./styles.styled";

type RulesButtonProps = {
  handleModal: () => void;
};

export const RulesButton = ({ handleModal }: RulesButtonProps) => {
  return <S.Button onClick={handleModal}>RULES</S.Button>;
};
