function playRound(human){
	let human_score = 0
	let computer_score = 0
	let computer = Math.floor(Math.random() * (2 - 0 + 1) + 0)
	
	if (human == computer){
		console.log("Draw")
	}else if (human == 0 && computer == 2 || human == 2 && computer == 1 
		|| human == 1 && computer == 0){
			console.log("You win!!")
			human_score++
	}else if (human == 2 && computer == 0 || human == 1 && computer == 0 
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
setInterval(() => {
	comprobarContador()
}, 1000)
let counterDisplay = document.getElementById("contador")
function actualizarContador(){
	counterDisplay.textContent = counter
}
function comprobarContador(){
	if (counter == 5){
		alert("Partida acabada")
		counter = 0
		actualizarContador()
	}
}
const buttons = document.querySelectorAll("button")
let counter = 0
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		if(counter < 5){
			console.log(counter)
			playRound(button.id)
			counter++
			actualizarContador()
		}
	})
})