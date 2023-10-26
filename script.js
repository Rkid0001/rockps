function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
  // Test the function
  //console.log(getComputerChoice());
  

  // function playRound(playerSelection, computerSelection) {
    
  // }
  function game(){
    let playerPoints = 0;
    let computerPoints = 0;
    let roundNumber = 0;

    while (roundNumber < 5){
      const computerSelection = getComputerChoice();
      const playerSelection = getPlayerChoice();
      console.log(playerSelection, computerSelection);
      if(computerSelection === playerSelection){
        console.log("drawn game");
        
      }
      else if(computerSelection === "rock"){
          if(playerSelection === "paper"){
            console.log("player wins!");
            playerPoints++;}
            else{
              console.log("computer wins!");
              computerPoints++;
            }
            
          }
          else if(computerSelection === "scissors"){
            if(playerSelection === "rock"){
              console.log("player wins!");
              playerPoints++;}
              else{
                console.log("computer wins!");
                computerPoints++;
              }
              
            }
            else if(computerSelection === "paper"){
              if(playerSelection === "scissors"){
                console.log("player wins!");
                playerPoints++;}
                else{
                  console.log("computer wins!");
                  computerPoints++;
                }
                
              }
              roundNumber++;
                console.log(roundNumber);
        
      }

console.log("player: "+playerPoints);
console.log("computer: "+computerPoints);
let whoWon = finalResult(playerPoints, computerPoints);
console.log(whoWon);


    }
  
   

function getPlayerChoice() {
  const playerChoice = prompt("rock, scissors or paper?").toLowerCase();
  if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors" ){
    
    alert("please try again");
    return getPlayerChoice();
  }
  else{
    return playerChoice;
  }
  
 }

function finalResult(playerFinal, computerFinal){
  
  if (playerFinal > computerFinal){
    console.log("Hello");
    let result = "Player is the winner!!!";
    return result;
  }
  else if(playerFinal < computerFinal){
    let result = "Computer is the winner!!!!";
    return result;
  }
  return "Draw!!!"
  }

  


game(); 
