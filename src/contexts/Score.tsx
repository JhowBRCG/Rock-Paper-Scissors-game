import { createContext, useContext, useEffect, useState } from "react";

type ScoreContext = {
  score: number;
  updateCount: (operation: string) => void;
};

type ScoreContextProvider = {
  children: React.ReactNode;
};

export const ScoreContext = createContext<ScoreContext | null>(null);

export const ScoreContextProvider = ({ children }: ScoreContextProvider) => {
  const storedScore = Number(localStorage.getItem("score"));
  const [score, setScore] = useState<number>(0 || storedScore);

  const updateCount = (operation: string) => {
    if (operation === "add") {
      setScore((prevScore) => prevScore + 1);
    } else if (operation === "subtract") {
      setScore((prevScore) => prevScore - 1);
    }
  };

  useEffect(() => {
    localStorage.setItem("score", String(score));
  }, [score]);

  return (
    <ScoreContext.Provider value={{ score, updateCount }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScoreContext = () => {
  const context = useContext(ScoreContext);

  if (!context) {
    throw new Error("ScoreContext must be used within a PlayerContextProvider");
  }
  return context;
};
