import { createContext, useContext, useState } from "react";

type PlayerContext = {
  player: { playerMove: string; result: string };
  updateMove: (move: string) => void;
  resetPlayer: () => void;
  handlePlayerResult: (gameResult: string) => void;
};

type PlayerContextProviderProps = {
  children: React.ReactNode;
};

export const PlayerContext = createContext<PlayerContext | null>(null);

export const PlayerContextProvider = ({
  children,
}: PlayerContextProviderProps) => {
  const [player, setPlayer] = useState({
    playerMove: "",
    result: "",
  });

  const updateMove = (move: string) => {
    setPlayer((prevPlayer) => ({ ...prevPlayer, playerMove: move }));
  };

  const resetPlayer = () => {
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      playerMove: "",
      result: "",
    }));
  };

  const handlePlayerResult = (gameResult: string) => {
    setPlayer((prevPlayer) => ({ ...prevPlayer, result: gameResult }));
  };

  return (
    <PlayerContext.Provider
      value={{ player, updateMove, resetPlayer, handlePlayerResult }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerContext = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error(
      "usePlayerContext must be used within a PlayerContextProvider"
    );
  }
  return context;
};
