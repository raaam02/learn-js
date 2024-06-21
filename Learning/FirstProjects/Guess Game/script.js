const form = document.querySelector("form");
const restart = document.getElementById("restart");
const myNumber = Math.floor(Math.random() * 100 + 1);

let previousGuesses = [];
let remainingAttempt = 10;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = document.querySelector("input");
  const userGuessNum = parseInt(userInput.value);
  const detail = document.querySelector(".details");
  const win = document.querySelector(".win");

  //   validate
  if (
    userGuessNum === "" ||
    userGuessNum < 0 ||
    userGuessNum > 100 ||
    isNaN(userGuessNum)
  ) {
    detail.innerHTML = `<span style ="color:red;">Please Enter Only Number Between 0-100</span>`;
    userInput.value = "";
  } else if (userGuessNum === myNumber) {
    win.innerHTML = `Congratutions You Won 🥳🥳🥳`;
    win.classList.add("won");
    userInput.value = "";
  } else if (remainingAttempt === 0) {
    win.innerHTML = `<span style="color: red;">Sorry, You Lost 😞😞</span>`;
    userInput.value = "";
  } else {
    userInput.value = "";
    if (remainingAttempt > 0) {
      previousGuesses[10 - remainingAttempt] = userGuessNum;
    }
    if (userGuessNum > myNumber) {
      detail.innerHTML = `<span>Your Number Was Large</span>
            <span>Previous Guesses: ${previousGuesses}</span>
        <span>Remaining attemps: ${remainingAttempt}</span>`;
    } else {
      detail.innerHTML = `<span>Your Number Was Small</span>
            <span>Previous Guesses: ${previousGuesses}</span>
        <span>Remaining attemps: ${remainingAttempt}</span>`;
    }
    remainingAttempt--;
  }
});

restart.addEventListener("click", (e) => {
  location.reload();
});
