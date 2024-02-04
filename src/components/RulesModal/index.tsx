import { useEffect, useRef } from "react";
import icon_close from "@assets/imgs/icon-close.svg";
import rules_img from "@assets/imgs/image-rules.svg";
import * as S from "./styles.styled";

type RulesModalProps = {
  isModalOpen: boolean;
  handleModal: () => void;
};

export const RulesModal = ({ isModalOpen, handleModal }: RulesModalProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isModalOpen) return dialogRef.current?.showModal();
    return dialogRef.current?.close();
  }, [isModalOpen]);

  return (
    <S.Modal ref={dialogRef}>
      <S.Header>
        <h3>RULES</h3>
        <button onClick={handleModal}>
          <img src={icon_close} alt="close icon" />
        </button>
      </S.Header>
      <S.RulesImg>
        <img src={rules_img} alt="Rules" />
      </S.RulesImg>
    </S.Modal>
  );
};
