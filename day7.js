3// THIS IS ABOUT CREATING AN APP CALLED ROCKPAPERSCISSOR

/*


rpsButton.forEach(rpsButton.onclick = () => {
    playerChoice = rpsButton.value

})*/

let result = document.getElementById('result')

const getComputerChoice = () => {

  let randomNumber = Number(Math.random()*2)
  let computerNumber = randomNumber.toFixed(0)
  let choiceArray = ['Rock','Paper','Scissor']
  const computerChoice = choiceArray[computerNumber]

  return computerChoice
}

let score;

let getResult = (playerChoice, computerChoice) => {
  
  if (playerChoice == computerChoice){
    score = 0 
  }
  else if((playerChoice === 'Rock' && computerChoice === 'Scissors')
  || (playerChoice === 'Scissors' && computerChoice === 'Paper')
  || (playerChoice === 'Paper' && computerChoice === 'Rock')
  ){
    score = 1
  }
  else{
    score = -1
  }
  return score
}

const showResult = (score, playerChoice, computerChoice) =>{
  
  if(score == -1){
    result.innerText('You Lose this time')
  }
  else if(score == 1){
    result.innerText('You Win this time')
  }
  else {
    result.innerText('--DRAW--')
  }
}

 let onClickRPS = (playerChoice) => { 
  
}

function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButton = document.querySelectorAll('.rpsButton')
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

 

  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  
}

playGame()