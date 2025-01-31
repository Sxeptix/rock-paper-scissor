console.log("Hello World");
console.log(getComputerChoice(3));

//genererate computer choice
function getComputerChoice(Max) {
    let computerChoice = Math.floor(Math.random() *Max);
    
    if (computerChoice == 0){
        let computerSelection = "Rock"
        return  computerSelection
    }

    else if (computerChoice == 1){
        const computerSelection = "Paper"
        return computerSelection
    }

    else {
        let computerSelction = "Scissors"
        return computerSelction
    }

}


//get human choice

//set logic for play round(total 5 rounds)

//keep track of scores

//announce the winner