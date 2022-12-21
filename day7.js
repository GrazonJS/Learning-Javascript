// THIS IS ABOUT CREATING AN APP CALLED ROCKPAPERSCISSOR

const totalScore = { 
   computerScore: 0,
   playerScore: 0
}


const getComputerChoice = () => {//--3
/* it is the first function to be called */

  let randomNumber = Number(Math.random()*2)
  let computerNumber = randomNumber.toFixed(0)
  let choiceArray = ['Rock','Paper','Scissor']
  const computerChoice = choiceArray[computerNumber]

  return computerChoice
}


  
let getResult = (playerChoice, computerChoice) => {//--4
  /*  it is the second function to be called. it compares
     the computer and the player's choice and produce a result
     */

  let score;
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

const showResult = (score, playerChoice, computerChoice) =>{//--5
  /*we show the result in the web through DOM*/ 

  const resultDiv = document.getElementById('result')
  const handDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('palyer-score')
  if(score == -1){
    resultDiv.innerText('You Lose this time')
  }
  else if(score == 1){
    resultDiv.innerText('You Win this time')
  }
  else {
    resultDiv.innerText('--DRAW--')
  }
   
  handDiv.innerText = `🧔🏻‍♂️${playerChoice} vs 🤖${computerChoice}`
  playerScoreDiv.innerText = `your Score:${totalScore.playerScore}`
}

 let onClickRPS = (playerChoice) => {//--2
/*the whole code for the game play is here
  all the logic functions are called here(MAIN function)*/ 

  const computerChoice = getComputerChoice() //-2-got computerchoice
  console.log(computerChoice)
  const score = getResult(playerChoice,computerChoice)  //-got who won this time
  totalScore.playerScore += score
  console.log(totalScore)
  showResult(score,playerChoice,computerChoice)

}

let playGame = () => {//--1
  /*the game starts here, we get the value and
  if it is rps button => goes to onCickRPS()
  else it is endGameButton => goes to endGameButton()
  */
  const rpsButton = document.querySelectorAll('.rpsButton')
  rpsButton.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)

    }) 

  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame(totalScore)
}

function endGame(totalScore) {//--6
  /* it is called by the playGame() if the user click endGameButton
     it clears all the values in the web using DOM */

  totalScore.playerScore = 0
  totalScore.computerScore = 0

  const resultDiv = document.getElementById('result')
  const handDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('palyer-score')

  resultDiv.innerText = ''
  handDiv.innerText = ''
  playerScoreDiv.innerText = ''
}

playGame()