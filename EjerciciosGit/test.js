const fibonacci = function(n) {
	let a = 0
	let b = 1
	let c = 1
	let i = 1
	while (i < n - 1){
		a = b
		b = c
		c = a + b
		i++
	}
	return c
};

// str = "abba"
console.log(fibonacci(4))