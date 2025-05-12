function getHumanChoice(){
	const date = prompt("Rock, Paper o Scissors");
	if (date == "Rock"){
		console.log("You choice: Rock")
		return 0
	}else if (date == "Paper"){
		console.log("You choice: Paper")
		return 1
	}else if (date == "Scissors"){
		console.log("You choice: Scissors")
		return 2
	}else 
		getHumanChoice()
}
function getComputerChoice(){
	let date = Math.floor(Math.random() * (2 - 0 + 1) + 0)
	if (date == 0){
		console.log("The Computer choice: Rock")
		return 0
	}else if (date == 1){
		console.log("The Computer choice: Rock")
		return 1
	}else if (date == 2){
		console.log("The Computer choice: Rock")
		return 2
	}
}
function playRound(human, computer){

	if (human == computer)
		console.log("Draw")
	//. Humman win
	else if (human == 0 && computer == 2 || human == 2 && computer == 1 || human == 1 && computer == 0){

		console.log("You win!!")
	}

	//. Computer win
	else if (human == 2 && computer == 0 || human == 1 && computer == 0 || human == 0 && computer == 1){
		console.log("Computer win!!")
	}
}

let human = getHumanChoice()
let computer = getComputerChoice()
playRound(human, computer)