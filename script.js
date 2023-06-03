var game_arr = ["rock","paper","scissors"];
var yourPoints = 0;
var computerPoints = 0;

function getComputerChoice(){
    var Computer_guess = game_arr[Math.floor(Math.random() * 3)];
    return Computer_guess;
}


function playRound(playerSelection,computerSelection){
    if(playerSelection === computerSelection){
        return "Its a Tie";
    }
    else if(playerSelection == null || playerSelection == undefined){
        console.log("cancel");
    }
    else if((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock"))
    {
        computerPoints++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
        
    }
    else{
        yourPoints++;
        return `You Won! ${playerSelection} beats ${computerSelection}`;
        
    }
}
function game(){
    console.log(playRound(playerSelection,computerSelection));
}

for(let i=1;i<=5;i++)
{
    var playerSelection = prompt("Enter Your Choice");
    var computerSelection = getComputerChoice();
    game();
}

if(yourPoints>computerPoints){
    console.log("You won the game");
}
else if(yourPoints == computerPoints){
    console.log("Its a Tie, Refresh and try again");
}
else{
    console.log("You lose the game");
}