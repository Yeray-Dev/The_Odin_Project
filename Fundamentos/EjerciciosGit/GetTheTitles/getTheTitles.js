const getTheTitles = function(object) {
	let arrayTitles = []
	object.forEach(Element => {
		arrayTitles.push(Element.title) 
	});
	return arrayTitles
};

// Do not edit below this line
module.exports = getTheTitles;