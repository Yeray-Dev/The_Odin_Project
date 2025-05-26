function operations(num1, num2, symbol){
	num1 = parseFloat(num1)
	num2 = parseFloat(num2)
	if (symbol === '+')
		return num1 + num2
	else if (symbol === '-')
		return num1 - num2
	else if (symbol === '*')
		return num1 * num2
	else if (symbol === '/')
		return num1 / num2
	else if (symbol === 'mod')
		return num1 % num2
}
function handleAction(state, action){
	const isOperator = ['+', '-', '*', '/', 'mod'].includes(action)
	if (state.num1 === undefined){
				state.clean = 1
	resultDisplay(state)
		symbol = undefined
	}else if (isOperator && state.symbol === undefined){
				state.clean = 1 //* Con esto hacemos que el display secundario se borre.
	resultDisplay(state)
		state.symbol = action
	}else if (isOperator && state.symbol !== undefined){
		if (state.num1 === undefined || state.num2 === undefined){
			state.symbol = action //* Si seleccionamos un operador y antes de introducir ningun numero seleccionamos otro operador, este cambiara.
		}else{ 	//* En este Else se entra cuando se concatenan mas de una operacion. 
				//* Se muestra el resultado de la anterior y se usa el resultado de esta como num1
			state.result = operations(state.num1, state.num2, state.symbol)
			console.log(`El Resultado es = ${state.result}`) //! TESTING
			resultDisplay(state)
			state.num1 = state.result
			state.result = undefined
			state.num2 = undefined
			state.symbol = action
			state.justCalculated = false
		}
	}else if (action === 'calc'){ //* Y aqui se entra cuando solo queremos hacer una operacion. Y usamos = o enter para mostrar el resultado
		if (state.num2 !== undefined){
			state.result = operations(state.num1, state.num2, state.symbol)
			console.log(`El Resultado es = ${state.result}`) //! TESTING
			resultDisplay(state)
			state.num1 = state.result
			state.result = undefined
			state.num2 = undefined
			state.symbol = undefined
			state.justCalculated = true
		}
	}
}
function handleValue(state, value){
	state.clean = 1
	resultDisplay(state)
	if (state.symbol === undefined  && state.result === undefined){
		if (state.justCalculated === true && state.symbol === undefined){
			state.num1 = undefined
			state.justCalculated = false
		}
		if (state.num1 === undefined){
			state.num1 =  value
		}else{
			state.num1 += value
		}
	}
	else if (state.symbol !== undefined){
		if (state.num2 === undefined){
			state.num2 =  value
		}else{
			state.num2 += value
		}
	}
}
function operationDisplay(state){
	const displayElement = document.getElementById("low_display")
	let display = 0
	let formatNum1 = Number(state.num1).toLocaleString('es-ES')
	let formatNum2 = Number(state.num2).toLocaleString('es-ES')
	if (state.num1 !== undefined && state.symbol === undefined)
		display = formatNum1
	else if (state.symbol !== undefined && state.num2 === undefined)
		display = formatNum1 + state.symbol
	else if (state.symbol !== undefined && state.num2 !== undefined)
		display = formatNum1 + state.symbol + formatNum2
	displayElement.innerText = display
}
function resultDisplay(state){
	const displayElement = document.getElementById("hight_display")
	let display = state.num1 + state.symbol + state.num2
	if (state.clean === 1){
		display = " "
	}
	displayElement.innerText = display.toLocaleString('es-ES')
}
function clear(state){
	console.clear()
	state.num1 = undefined
	state.num2 = undefined
	state.result = undefined
	state.symbol = undefined
	state.clean = 1 //* Usamos este operador a modo de Bool para saber cuando borrar el display secundario y cuando mantenerlo
	resultDisplay(state)
}
function main(){
	const contenedor = document.getElementById('key-container')
	let state= { 
		num1: undefined,
		num2: undefined,
		result: undefined,
		symbol: undefined,
		clean: 0,
		justCalculated: false
	}
	contenedor.addEventListener('click', (event) =>{
		console.clear() //! TESTING
		const action = event.target.dataset.action;
		const value = event.target.dataset.value;
		console.log("Action = ", action) //! TESTING
		console.log("Value = ", value) //! TESTING
		if (action === 'clear'){
			clear(state)
		}else if (action !== undefined){
			state.clean = 0
			handleAction(state, action)
		}else if (value !== undefined) {
			handleValue(state, value)
		}
		operationDisplay(state)
		console.log("El numero 1 es: ", state.num1) //! TESTING
		console.log("El numero 2 es: ", state.num2) //! TESTING
		console.log("El symbol es; ", state.symbol) //! TESTING
	})
	document.addEventListener('keydown', (event) =>{
		const key = event.key
		if (!isNaN(key)){
			handleValue(state, key)
		}else if (key === '+' || key === '-' || key === '/' || key === '*' || key === '%'){
			state.clean = 0
			handleAction(state, key)
		}else if (key === 'Enter' || key === '=') {
			state.clean = 0
			handleAction(state, 'calc');
		}else if (key === 'Escape' || key.toLowerCase() === 'c') {
			clear(state)
		}
		operationDisplay(state)
	})
}
main()
