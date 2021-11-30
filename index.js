const playerInput = document.getElementById('playerInput');                   //Grabbing the input box
let gameArray = [1,2,3,4,5,6,7,8,9,10];                                      //Initializing our game array
const winner = document.getElementById("winner");                           //Grabbing our h2 for when there's a winner
const playBtn = document.getElementById("playButton");                     //Grabbing button of hands played
playBtn.style.display = "none"; 
const startBtn = document.getElementById("startButton");                 //Grabbing button for starting game
const restartBtn = document.getElementById("restartButton");            //Grabbing restart button
restartBtn.style.display = "none";
let playerChoice = 0;                                                 //Initializing our player choice
let computerChoice = 0;                                              //Initializing our computer choice
let playerHand = 0;                                                 //Initializing player hand
let computerHand = 0;                                              //Initializing our computer hand
const handOfPlayer = document.getElementById("playerHand");       //For playerHand textContent
const handOfComputer = document.getElementById("computerHand");  //For computerHand textContent
const computerText = document.getElementById("computerChoice"); //For computerChoice textContent
const playerText = document.getElementById("playerChoice");    //For playerChoice textContent

startBtn.addEventListener("click", playGame);

//Function for determining player and computer hand
function playHand() {
    playerHand = Math.floor(Math.random() * 6);
    computerHand = Math.floor(Math.random() * 6);
    handOfPlayer.textContent = playerHand;
    handOfComputer.textContent = computerHand;
}

//Function to play/start the game
function playGame() {
    reset();
    startBtn.style.display = 'none';     //Making the start button invisible
    restartBtn.style.display = "block"; //Making the restart button visible

    makeChoice()
    playBtn.style.display = "block";
//Comparing if player or computer wins
    playBtn.addEventListener('click', () => {
        playerInput.value = " ";
        playHand();   
        if(playerHand + computerHand === playerChoice && playerChoice !== computerChoice) {  
        winner.textContent = "Player Wins! 🎉🎉";
    }else if (playerHand + computerHand === computerChoice && playerChoice !== computerChoice) {
        winner.textContent = "Computer Wins! 🎉🎉";
    }else {
        winner.textContent = "Keep Playing!";
    };
    });
    restartBtn.addEventListener("click", reset);

};

// Reseting most of the game to default
function reset() {
    startBtn.style.display = "block";   //Reset start button display to block
    restartBtn.style.display = "none"; //Reset restart button display to none
    playBtn.style.display = "none";   //Reset play button display to none
    computerChoice = 0;
    playerChoice = 0;
    playerHand = 0;
    computerHand = 0;
    handOfPlayer.textContent = " ";
    handOfComputer.textContent = " ";
    playerText.textContent = " ";
    computerText.textContent = " ";
    winner.textContent = " ";
    gameArray = [1,2,3,4,5,6,7,8,9,10]; //Reset game array
}

//Function to ensure player and computer do not make the same choice
function makeChoice() {
    let val = prompt("Enter Player Choice: ");  //Receiving player value as a prompt string
    playerInput.value = val;                   //Receiving player value in the input field
    playerChoice = parseInt(val);             //Converting to a number

    if(gameArray.includes(playerChoice)) {          //Using includes() to check if gameArray contains playerChoice
    let index = gameArray.indexOf(playerChoice);   //Getting the index of the playerChoice
    gameArray.splice(index, 1);                   //Removing the playerChoice from the gameArray
    computerChoice = gameArray[Math.floor(Math.random() * gameArray.length)]; //Getting the computerChoice from whatever is left of the gameArray
    }

    playerText.textContent = playerChoice;         //Printing the playerChoice
    computerText.textContent = computerChoice;    //Printing the computerChoice
}

