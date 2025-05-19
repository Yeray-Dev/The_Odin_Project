const fibonacci = function(n) {
	let a = 0
	let b = 1
	let c = 1
	let i = 1
	if (n == 0)
		return 0
	else if (n < 0)
		return ("OOPS")
	while (i < n - 1){
		a = b
		b = c
		c = a + b
		i++
	}
	return c
};


// Do not edit below this line
module.exports = fibonacci;