const findTheOldest = function(people) {
	let older = 0
	let olderName = undefined
	people.forEach(Element => {
		if (Element.yearOfDeath == undefined)
			Element.yearOfDeath = 2025
		if (Element.yearOfDeath - Element.yearOfBirth > older){
			older = Element.yearOfDeath - Element.yearOfBirth
			olderName = Element
		}
	});
	return olderName
	}

// Do not edit below this line
module.exports = findTheOldest;