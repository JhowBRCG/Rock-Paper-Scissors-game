import { useComputerContext } from "contexts/Computer";
import { usePlayerContext } from "contexts/Player";
import { useScoreContext } from "contexts/Score";
import { useEffect } from "react";

export function useScore() {
  const { score, updateCount } = useScoreContext();
  const { player } = usePlayerContext();
  const { computer } = useComputerContext();

  useEffect(() => {
    if (player.result === "YOU WIN") {
      updateCount("add");
    } else if (computer.result === "YOU WIN") {
      updateCount("subtract");
    }
  }, [player.result]);

  return score;
}
