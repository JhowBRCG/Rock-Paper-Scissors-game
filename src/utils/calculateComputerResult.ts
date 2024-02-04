export const calculateComputerResult = (
  playerMove: string,
  computerMove: string,
  handleComputerResult: (gameResult: string) => void
) => {
  if (playerMove === "paper" && computerMove === "rock") {
    return handleComputerResult("YOU LOSE");
  } else if (playerMove === "rock" && computerMove === "scissors") {
    return handleComputerResult("YOU LOSE");
  } else if (playerMove === "paper" && computerMove === "rock") {
    return handleComputerResult("YOU LOSE");
  } else if (playerMove === computerMove) {
    return handleComputerResult("DRAW");
  } else {
    return handleComputerResult("YOU WIN");
  }
};
