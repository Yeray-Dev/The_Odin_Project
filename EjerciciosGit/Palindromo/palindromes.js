const palindromes = function (str) {
	let i = 0
	str = str.toLowerCase()
	str = str.replace(/[^a-zA-Z0-9]/g, '')
	let len = str.length
	while(str[i]){
		if (str[i] != str[len - 1])
			return false
		i++
		len--
	}
	return true
};
// Do not edit below this line
module.exports = palindromes;