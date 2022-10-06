const username = prompt("What's your name?")

/* Initialized variables */
score = 0;
stage = 1;
nextNum = 1;

/* Num they are to guess */
correctNum = Math.floor(Math.random() * 2) + nextNum;

/* Increment score, move to the next stage, etc */
const increment = () => {
    score++;
    stage++;
    nextNum++;
}

/* Loop to keep the game going */
while (stage) {
  /* The guess user makes */
  let guess = prompt(`Guess the number in my mind? Pick from range 1 to ${stage + 1}`);

  /* Check if it's correct OR wrong */
  if (guess != correctNum) {
    console.log("Wrong! Try again!");
    console.log(`Your score: ${score}`);
    correctNum = correctNum;
  } else if (guess == correctNum) { 
    correctNum = Math.floor(Math.random() * 2) + nextNum;
    increment();
    console.log(`Your score: ${score}`);
  console.log(`Correct! you can now move to stage ${stage}.`);
    /* End game when score reaches 10 */
    if (score == 10) {
      console.log("Finished!");
      stage = 0;
      break;
    }
}
}
console.log(`${username}, You Won!`) // Final message!
