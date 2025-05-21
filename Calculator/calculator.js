function operations(num1, num2, symbol){
	num1 = parseFloat(num1)
	num2 = parseFloat(num2)
	if (symbol === 'add')
		return num1 + num2
	else if (symbol === 'rest')
		return num1 - num2
	else if (symbol === 'mul')
		return num1 * num2
	else if (symbol === 'div')
		return num1 / num2
	else if (symbol === 'mod')
		return num1 % num2
}
function handleAction(state, action){
	const isOperator = ['add', 'rest', 'mul', 'div', 'mod'].includes(action)
	if (state.num1 === undefined){
		symbol = undefined
	}else if (isOperator && state.symbol === undefined){
		state.symbol = action
	}else if (isOperator && state.symbol !== undefined){
		if (state.num1 === undefined || state.num2 === undefined){
			state.symbol = action
		}else{
			state.result = operations(state.num1, state.num2, state.symbol)
			console.log(`El Resultado es = ${state.result}`) //! TESTING
			state.num1 = state.result
			state.result = undefined
			state.num2 = undefined
			state.justCalculated = false
		}
	}else if (action === 'calc'){
		if (state.num2 !== undefined){
			state.result = operations(state.num1, state.num2, state.symbol)
			console.log(`El Resultado es = ${state.result}`) //! TESTING
			state.num1 = state.result
			state.result = undefined
			state.num2 = undefined
			state.symbol = undefined
			state.justCalculated = true
		}
	}
}
function handleValue(state, value){
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
function main(){
	const contenedor = document.getElementById('key-container')
	let state= { 
		num1: undefined,
		num2: undefined,
		result: undefined,
		symbol: undefined,
		justCalculated: false
	}
	contenedor.addEventListener('click', (event) =>{
		console.clear() //! TESTING
		const action = event.target.dataset.action;
		const value = event.target.dataset.value;
		console.log("Action = ", action) //! TESTING
		console.log("Value = ", value) //! TESTING
		if (action === 'clear'){
			console.clear()
			state.num1 = undefined
			state.num2 = undefined
			state.result = undefined
			state.symbol = undefined
		}else if (action !== undefined){
			handleAction(state, action)
		}else if (value !== undefined) {
			handleValue(state, value)
		}
		console.log("El numero 1 es: ", state.num1) //! TESTING
		console.log("El numero 2 es: ", state.num2) //! TESTING
		console.log("El symbol es; ", state.symbol) //! TESTING
	})

}
main()
