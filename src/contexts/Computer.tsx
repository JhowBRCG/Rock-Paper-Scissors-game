import { createContext, useContext, useState } from "react";

type ComputerContext = {
  computer: { computerMove: string; result: string };
  resetComputer: () => void;
  handleComputerResult: (gameResult: string) => void;
};

type ComputerContextProviderProps = {
  children: React.ReactNode;
};

export const ComputerContext = createContext<ComputerContext | null>(null);

const moves: string[] = ["paper", "scissors", "rock"];
const randomMove = Math.floor(Math.random() * moves.length);

export const ComputerContextProvider = ({
  children,
}: ComputerContextProviderProps) => {
  const [computer, setComputer] = useState({
    computerMove: moves[randomMove],
    result: "",
  });

  const resetComputer = () => {
    setComputer((prevComputer) => ({
      ...prevComputer,
      computerMove: moves[Math.floor(Math.random() * moves.length)],
      result: "",
    }));
  };

  const handleComputerResult = (gameResult: string) => {
    setComputer((prevComputer) => ({ ...prevComputer, result: gameResult }));
  };

  return (
    <ComputerContext.Provider
      value={{ computer, resetComputer, handleComputerResult }}
    >
      {children}
    </ComputerContext.Provider>
  );
};

export const useComputerContext = () => {
  const context = useContext(ComputerContext);

  if (!context) {
    throw new Error(
      "ComputerContext must be used within a PlayerContextProvider"
    );
  }
  return context;
};
