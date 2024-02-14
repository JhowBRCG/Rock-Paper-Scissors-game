import * as S from "./styles.styled";

type RulesButtonProps = {
  handleModal: () => void;
};

export const RulesButton = ({ handleModal }: RulesButtonProps) => {
  return (
    <S.Button aria-label="open rules" onClick={handleModal}>
      RULES
    </S.Button>
  );
};
