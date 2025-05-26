function colorGenerate(){
	return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

let numberOfGrid = prompt("Numero de casillas (1 - 100): ")
numberOfGrid = parseInt(numberOfGrid)

let size = 100 / numberOfGrid
let sizeStr = size.toString()
sizeStr = sizeStr + "%"

const container = document.querySelector(".container")

//. Genera las casillas exponenciales al numero que se introduce
for (let i = 0; i < numberOfGrid * numberOfGrid; i++){
	const newDiv = document.createElement("div")
	newDiv.className = "div_grid"
	newDiv.id = i + ""
	newDiv.style.width = sizeStr
	newDiv.style.height = sizeStr

	//. Modifica el color del DIV cuando pasamos el cursor por encima
	newDiv.addEventListener("mouseover", () => {
		newDiv.style.backgroundColor = colorGenerate()
	})
	//. Actualiza el DOM.
	container.appendChild(newDiv)
}

const startButton = document.querySelector("button")
startButton.addEventListener("click", () => {
	location.reload()
} )


document.body.appendChild(container);