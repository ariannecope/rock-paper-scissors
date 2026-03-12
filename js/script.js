

// Get references to form, select, and result
const form = document.querySelector('form');
const choiceSelect = document.getElementById('choice');
const result = document.querySelector(".result");

// Listen for the user to click the button
form.addEventListener('submit', handleSubmit);

// Function that handles the submit
function handleSubmit(event) {
  event.preventDefault();

  const userChoice = choiceSelect.value;
  if (!userChoice) {
    result.textContent = "Please make a selection!";
    console.log("Please make a selection!");
    return;
  }

  const computerChoice = getComputerChoice();
  const winner = compareChoices(userChoice, computerChoice);
  showResults(userChoice, computerChoice, winner);
}

// Generate a random choice for computer
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Compare user and computer selections
function compareChoices(user, computer) {
  if (user === computer) return 'tie';

  if (
    (user === 'Rock' && computer === 'Scissors') ||
    (user === 'Paper' && computer === 'Rock') ||
    (user === 'Scissors' && computer === 'Paper')
  ) {
    return 'user';
  } else {
    return 'computer';
  }
}

// Show results to the user and log to console
function showResults(user, computer, winner) {
  let message = `<br> Your choice: ${user} <br>`;
  message += `Computer's choice: ${computer} <br>`;

  if (winner === 'tie') {
    message += "It's a tie!";
  } else if (winner === 'user') {
    message += "You WIN!";
  } else {
    message += "Computer wins!";
  }

  result.innerHTML = message;
  console.log(message); // This will now actually print
}