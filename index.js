console.log(`----->Game Starts<-----`)

//genererate computer choice
function getComputerChoice(Max) {
    let computChoice = Math.floor(Math.random() *Max);
    
    if (computChoice == 0){
        let computSelection = "Rock";
        return  computSelection;
    }

    else if (computChoice == 1){
        let computSelection = "Paper";
        return computSelection;
    }

    else {
        let computSelection = "Scissors";
        return computSelection;
    }
}

//get human choice
function getHumanChoice(){
    let humanChoice = window.prompt("select your (Rock , Paper , Scissors)").trim().toLowerCase();
    return humanChoice;
}

// create global variables for human and computer scores
let humanScore=0;
let computerScore=0;
//set logic for play 1 round
function playRound(humanChoice,computerChoice){

    computerChoice = computerChoice.toLowerCase();
    

    if(humanChoice === computerChoice){
        console.log(`it's a Tie!!`);
        console.log(`You => ${humanScore} , Computer => ${computerScore}`);
        return[humanScore , computerScore];
    }
    else if((humanChoice === 'rock' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'rock')){
                computerScore++;
                console.log(`${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`)
                console.log(`You => ${humanScore} , Computer => ${computerScore}`)
                return computerScore;
            }

    else{
        humanScore++;
        console.log(`${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`)
        console.log(`You => ${humanScore} , Computer => ${computerScore}`)
        return humanScore;
    }
}


//set logic to play 5 rounds and announce winner
function PlayGame(){
    for(let i = 0 ; i<5 ; i++){
        let humanSelction = getHumanChoice();
        let computerSelction = getComputerChoice(3);

        if (humanSelction === 'rock' || humanSelction === 'paper' || humanSelction === 'scissors'){
            console.log(`Round : ${i+1}`);

            playRound(humanSelction , computerSelction);
        }
        else{
            alert(`Wrong Input!!`);
            i--;
            continue
        }

    }

    console.log(`----->GAME ENDS<-----`)

    if (humanScore == computerScore){
        console.log(`it's a tie`)
    }

    else if(humanScore > computerScore){
        console.log(`You Win !!`)
    }

    else{
        console.log(`You losse`)
    }

    console.log(`Final Scores : You => ${humanScore} , Computer => ${computerScore}`)
}

PlayGame()