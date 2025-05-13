
function playRound(human){
	let human_score = 0
	let computer_score = 0
	let computer = Math.floor(Math.random() * (2 - 0 + 1) + 0)
	if (human == computer){
		console.log("Draw")
		alert("Draw")
	}
	//. Humman win
	else if (human == 0 && computer == 2 || human == 2 && computer == 1 
		|| human == 1 && computer == 0){
			console.log("You win!!")
			human_score++
		}
		//. Computer win
		else if (human == 2 && computer == 0 || human == 1 && computer == 0 
			|| human == 0 && computer == 1){
				console.log("Computer win!!")
				computer_score++
			}
			
			if (human_score > computer_score)
				alert("You win!!")
			else if (computer_score > human_score)
				alert("Computer win!!")
			else
			alert("Draw")
	}

const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		playRound(button.id)
	})
})
