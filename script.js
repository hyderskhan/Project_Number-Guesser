let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
  };
  console.log(generateTarget());
  
  const compareGuesses = (userGuess, computerGuess, secretTarget) => {
    let userDifference = Math.abs(secretTarget - userGuess);
    let computerDifference = Math.abs(secretTarget - computerGuess);
    return userDifference <= computerDifference;
  };
  
  const updateScore = (winner) => {
    if (winner === "human") {
      humanScore++;
    } else if (winner === "computer") {
      computerScore++;
    }
  };
  
  const advanceRound = () => {
    currentRoundNumber++;
  };
  
