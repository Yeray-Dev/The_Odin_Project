const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(a) {
	let i = 0
	let n = 0
	while (a[i]){
		n = n + a[i]
		i++
	}
	return Number(n)
};

const multiply = function(a) {
	let multiply = a[0]
	let i = 1
	while (a[i]){
		multiply = multiply * a[i]
		i++
	}
	return multiply
};

const power = function(a, x) {
	let n = a
	for (let i = 1; x > i; i++)
		n = a * n
	return Number(n)
};

const factorial = function(n) {
	let i = n - 1
	if (n == 0)
		return 1;
	while (i > 0){
		n = n * i
		i--
	}
	return n
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
};