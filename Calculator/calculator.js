function operations(num1, num2, symbol){
	if (symbol == '+')
		return num1 + num2
	else if (symbol == '-')
		return num1 - num2
	else if (symbol == '*')
		return num1 * num2
	else if (symbol == '%')
		return num1 / num2
}
function main(){
	const contenedor = document.getElementById('key-container')
	let num1 = undefined
	let num2 = undefined
	let result = undefined
	let symbol = undefined
	contenedor.addEventListener('click', (event) =>{
		const action = event.target.dataset.action;
		const value = event.target.dataset.value;
	
		if (action === 'add')
			symbol = action

		else if (symbol == undefined)
			if (num1 == undefined)
				num1 =  value
			else
				num1 += value

		else if (symbol != undefined)
			if (num2 == undefined)
				num2 =  value
			else
				num2 += value

		console.log("El numero 1 es: ", num1) //! TESTING
		console.log("El numero 2 es: ", num2) //! TESTING
		console.log("El symbol es; ", symbol) //! TESTING
	})

}
main()