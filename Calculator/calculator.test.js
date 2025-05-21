
// calculator.test.js
const { main, operations, handleAction, handleValue } = require('./calculator')

beforeEach(() => {
	// Crear el contenedor con id 'key-container' para que no sea null
	document.body.innerHTML = `
	<div id="key-container">
		<button data-action="add" data-value="1">1</button>
		<!-- Más botones o elementos que necesites -->
	</div>
	`;
	main()
});


describe('Edge cases and logical errors in calculator', () => {
	let state;
  
	beforeEach(() => {
	  state = {
		num1: undefined,
		num2: undefined,
		result: undefined,
		symbol: undefined,
		justCalculated: false,
	  };
	});
  
	test('hacer calc sin operador no cambia el estado', () => {
	  handleValue(state, '5');
	  handleAction(state, 'calc'); // pulsar "=" sin operador
  
	  expect(state.num1).toBe('5');
	  expect(state.result).toBe(undefined);
	  expect(state.symbol).toBe(undefined);
	});
  
	test('hacer calc sin num2 no realiza operación', () => {
	  handleValue(state, '8');
	  handleAction(state, 'mul'); // operador válido
	  handleAction(state, 'calc'); // sin introducir num2
  
	  expect(state.num1).toBe('8');
	  expect(state.num2).toBe(undefined);
	  expect(state.result).toBe(undefined);
	  expect(state.symbol).toBe('mul'); // operador no borrado
	});
  
	test('división entre cero debe devolver Infinity o error controlado', () => {
	  handleValue(state, '9');
	  handleAction(state, 'div');
	  handleValue(state, '0');
	  handleAction(state, 'calc');
  
	  // Puedes adaptar según cómo manejes esto (Infinity, mensaje, etc)
	  expect(state.num1).toBe(Infinity);
	  expect(state.symbol).toBe(undefined);
	});
  
	test('acción desconocida no debe romper el flujo', () => {
	  handleValue(state, '4');
	  handleAction(state, 'nada'); // acción inválida
	  handleValue(state, '2');
  
	  expect(state.num1).toBe('42');
	  expect(state.symbol).toBe(undefined);
	});
  
	test('hacer múltiples "calc" seguidos no cambia el resultado', () => {
	  handleValue(state, '6');
	  handleAction(state, 'add');
	  handleValue(state, '3');
	  handleAction(state, 'calc'); // 6 + 3 = 9
  
	  const resultadoPrimero = state.num1;
  
	  handleAction(state, 'calc'); // otro calc sin cambios
	  expect(state.num1).toBe(resultadoPrimero); // sigue siendo 9
	  expect(state.num2).toBe(undefined);
	  expect(state.symbol).toBe(undefined);
	});
  
	test('empezar directamente con operador no debería hacer nada', () => {
	  handleAction(state, 'rest');
	  expect(state.symbol).toBe(undefined); // no puede operar sin num1
	});
  
	test('hacer una operación completa y luego otra nueva funciona', () => {
	  handleValue(state, '7');
	  handleAction(state, 'mod');
	  handleValue(state, '4');
	  handleAction(state, 'calc');
  
	  expect(state.num1).toBe(3); // 7 % 4 = 3
	  expect(state.justCalculated).toBe(true);
  
	  // Ahora empieza otra operación con el resultado
	  handleAction(state, 'add');
	  handleValue(state, '2');
	  handleAction(state, 'calc');
  
	  expect(state.num1).toBe(5); // 3 + 2 = 5
	});
  });
  