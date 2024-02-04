import { Header } from "@components/Header";
import { Jokenpo } from "@components/Jokenpo";
import { RulesButton } from "@components/RulesButton";
import { RulesModal } from "@components/RulesModal";
import { useState } from "react";
import * as S from "./styles.styled";

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModal = () => setIsModalOpen((prevModal) => !prevModal);

  return (
    <S.Main>
      <S.Container>
        <Header />
        <Jokenpo />
      </S.Container>
      <RulesButton handleModal={handleModal} />
      <RulesModal isModalOpen={isModalOpen} handleModal={handleModal} />
    </S.Main>
  );
};
