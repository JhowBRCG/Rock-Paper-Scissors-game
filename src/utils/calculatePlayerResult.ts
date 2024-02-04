export const calculatePlayerResult = (
  playerMove: string,
  computerMove: string,
  handlePlayerResult: (gameResult: string) => void
) => {
  if (playerMove === "paper" && computerMove === "rock") {
    return handlePlayerResult("YOU WIN");
  } else if (playerMove === "rock" && computerMove === "scissors") {
    return handlePlayerResult("YOU WIN");
  } else if (playerMove === "paper" && computerMove === "rock") {
    return handlePlayerResult("YOU WIN");
  } else if (playerMove === computerMove) {
    return handlePlayerResult("DRAW");
  } else {
    return handlePlayerResult("YOU LOSE");
  }
};
