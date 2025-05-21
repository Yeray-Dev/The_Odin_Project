function operations(num1, num2, symbol){
	num1 = parseFloat(num1)
	num2 = parseFloat(num2)
	if (symbol == 'add')
		return num1 + num2
	else if (symbol == 'rest')
		return num1 - num2
	else if (symbol == 'mul')
		return num1 * num2
	else if (symbol == 'div')
		return num1 / num2
	else if (symbol == 'mod')
		return num1 % num2
}
function main(){
	const contenedor = document.getElementById('key-container')
	let num1 = undefined
	let num2 = undefined
	let result = undefined
	let symbol = undefined
	let justCalculated = false
	contenedor.addEventListener('click', (event) =>{
		console.clear() //! TESTING
		const action = event.target.dataset.action;
		const value = event.target.dataset.value;
		console.log("Action = ", action) //! TESTING
		console.log("Value = ", value) //! TESTING

		if (action != undefined){
			if ((action === 'add' || action === 'rest' || action === 'mul' || action === 'div' || action === 'mod') && symbol === undefined)
				symbol = action
			else if ((action === 'add' || action === 'rest' || action === 'mul' || action === 'div' || action === 'mod') && symbol !== undefined){
				if (num1 == undefined || num2 == undefined)
					symbol = action
				else{
					result = operations(num1, num2, symbol)
					console.log(`El Resultado es = ${result}`) //! TESTING
					num1 = result
					num2 = undefined
					justCalculated = false
				}
			}	
			else if (action === 'calc'){			
				result = operations(num1, num2, symbol)
				console.log(`El Resultado es = ${result}`) //! TESTING
				num1 = result
				num2 = undefined
				symbol = undefined
				justCalculated = true
			}
		}
		else if (value != undefined){
			if (symbol == undefined  && result == undefined){
				if (justCalculated == true && symbol == undefined){
					num1 = undefined
					justCalculated = false
				}
				if (num1 == undefined)
					num1 =  value
				else
					num1 += value
			}
			else if (symbol != undefined){
				if (num2 == undefined)
					num2 =  value
				else
					num2 += value
			}
		}
		if (action === 'clear'){
			console.clear()
			num1 = undefined
			num2 = undefined
			result = undefined
			symbol = undefined
		}
		console.log("El numero 1 es: ", num1) //! TESTING
		console.log("El numero 2 es: ", num2) //! TESTING
		console.log("El symbol es; ", symbol) //! TESTING
	})

}
main()