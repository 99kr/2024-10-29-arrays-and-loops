const exercices = {}
// exercices object to better keep track of them
// rather than functions named exercices1..n etc.
// focused on quick readability

exercices[1] = function () {
	const names = ['Zlatan', 'Beckham', 'Zidane', 'Maradona', 'Pele', 'Ronaldo']
	console.log(names[3]) // Maradona
}

exercices[2] = function () {
	const names = ['Zlatan', 'Beckham', 'Zidane', 'Maradona', 'Pele', 'Ronaldo']
	const returnValue = names.push('Drogba') // returns length of array
	console.log(returnValue) // 7
}

exercices[3] = function () {
	const names = ['Zlatan', 'Beckham', 'Zidane', 'Maradona', 'Pele', 'Ronaldo', 'Drogba']
	const returnValue = names.unshift('Figo') // Add to start of array
	console.log(returnValue) // returns length of array - 8
}

exercices[4] = function () {
	const names = ['Figo', 'Zlatan', 'Beckham', 'Zidane', 'Maradona', 'Pele', 'Ronaldo', 'Drogba']
	const returnValue = names.pop() // Remove last element from array
	console.log(returnValue) // Drogba
}

exercices[5] = function () {
	const names = ['Figo', 'Zlatan', 'Beckham', 'Zidane', 'Maradona', 'Pele', 'Ronaldo']

	const lastElement = names.pop() // Remove last element and get it
	names.unshift(lastElement) // and push it to the beginning of the array

	console.log(names) // ['Ronaldo', 'Figo', 'Zlatan', 'Beckham', 'Zidane', 'Maradona', 'Pele']
}

exercices[6] = function () {
	// Since you can't reassign a const-variable, you are not able to
	// change their primitive value/type.
	// The reference to the value is immutable, but the value itself
	// is not immutable, thus allowing us to perform changes to
	// the value if it is a array/object
	// All the primitive types are immutable, but not arrays and objects
}

exercices[7] = function () {
	const players = ['Zlatan', 'Beckham', 'Zidane', 'Ronaldo', 'Romario', 'Maradona']
	const hasMessi = players.includes('Messi')
	console.log(hasMessi) // false, since there is no "Messi" element
	// in the array
}

exercices[8] = function () {
	const players = ['Zlatan', 'Beckham', 'Zidane', 'Ronaldo', 'Romario', 'Maradona']
	const hasZlatan = players.includes('Zlatan')

	if (hasZlatan) {
		console.log('Zlatan is in the list')
	} else {
		console.log('Zlatan is not in the list :(') // Never runs
	}
}

exercices[9] = function () {
	const players = ['Zlatan', 'Beckham', 'Zidane', 'Ronaldo', 'Romario', 'Maradona']
	const index = players.indexOf('Maradona') // Tries to find the index
	// of the inputted search, in this case "Maradona", then returns the index
	// of the element, or -1 if not found
	console.log(index) // 5
}

exercices[10] = function () {
	const players = ['Zlatan', 'Beckham', 'Zidane', 'Ronaldo', 'Romario', 'Maradona']
	const index = players.indexOf('Messi') // Like said earlier,
	// will return -1 if element is not found otherwise it's index
	console.log(index) // -1
}

exercices[11] = function () {
	const players = ['Zlatan', 'Beckham', 'Zidane', 'Ronaldo', 'Romario', 'Maradona']
	const playersString = players.join(', ') // join the array with a
	// comma (,) and space ( )
	console.log(playersString) // Zlatan, Beckham, Zidane, Ronaldo, Romario, Maradona
}

exercices[12] = function () {
	const players = ['Zlatan', 'Beckham', 'Zidane', 'Ronaldo', 'Romario', 'Maradona']
	const playersString = players.join(' - ') // join the array with a
	// dash (-) and surrounded by spaces ( )
	// i think it should be surrounded by spaces, idk,
	// didn't understand instructions entirely
	console.log(playersString) // Zlatan - Beckham - Zidane - Ronaldo - Romario - Maradona
}

exercices[13] = function () {
	const players = ['Zlatan', 'Beckham', 'Zidane', 'Ronaldo', 'Romario', 'Maradona']
	const result = players.splice(1, 2) // Start removing at index 1,
	// then delete 2 items, which will delete both "Beckham" & "Zidane"
	console.log(result) // ["Beckham", "Zidane"]
	console.log(players) // ["Zlatan", "Ronaldo", "Romario", "Maradona"]
}

exercices[14] = function () {
	const players = ['Zlatan', 'Ronaldo', 'Romario', 'Maradona']
	const result = players.splice(2, 0, 'Ronaldinho') // Start at index 2, and remove 0 elements
	// and add "Ronaldinho". Since we set the deleteCount to 0
	// no element will be removed, only add
	console.log(result) // [] - Returns the deleted items, since
	// there was no deleted items, returns an empy array
	console.log(players) // ['Zlatan', 'Ronaldo', 'Ronaldinho', 'Romario', 'Maradona']
}

exercices[15] = function () {
	const players = ['Zlatan', 'Ronaldo', 'Ronaldinho', 'Romario', 'Maradona']
	const index = players.indexOf('Ronaldo')
	players.splice(index, 1) // Start at the index of the found element
	// from .indexOf() and them remove 1 element
	console.log(players) // ['Zlatan', 'Ronaldinho', 'Romario', 'Maradona']
}

// Copying methods

exercices[16] = function () {
	const players = ['Zlatan', 'Ronaldinho', 'Romario', 'Maradona']
	const firstThreePlayers = players.slice(0, 3) // Start at index 0
	// and stop at index 3 (exclusive), so it will slice indexes, 0, 1 and 2
	// of from the original array then return
	// a shallow copy of the array after modifications
	// since it is a so called "copying method" and not a
	// "mutating method" like the other ones we've used so far.
	console.log(firstThreePlayers) // ['Zlatan', 'Ronaldinho', 'Romario']
}

exercices[17] = function () {
	const players = ['Zlatan', 'Ronaldinho', 'Romario', 'Maradona']
	const newPlayers = players.slice(2)
	console.log(newPlayers) // ['Romario', 'Maradona']
	console.log(players) // ['Zlatan', 'Ronaldinho', 'Romario', 'Maradona']
}

exercices[18] = function () {
	const players = ['Zlatan', 'Ronaldinho', 'Romario', 'Maradona']
	const result = players.with(1, 'Mbappé')
	console.log(result) // ['Zlatan', 'Mbappé', 'Romario', 'Maradona']
	console.log(players) // Isn't affected
}

// Loops

exercices[19] = function () {
	const numbers = [5, 8, 12, 20, 3]

	for (let i = 0; i < numbers.length; i++) {
		console.log(numbers[i])
	}
}

exercices[20] = function () {
	const numbers = [5, 8, 12, 20, 3]
	let sum = 0

	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i]
	}

	console.log(sum) // 48
}

exercices[21] = function () {
	const numbers = [5, 8, 12, 20, 3]
	let biggestNumber = null

	for (let i = 0; i < numbers.length; i++) {
		const number = numbers[i]

		// if biggestNumber is not yet set,
		// (could technically set it to the first element of the array,
		// and then start from index 1) OR if current number is
		// greater than biggestNumber so far
		if (biggestNumber == null || number > biggestNumber) {
			biggestNumber = number
		}
	}

	console.log(biggestNumber) // 20
}

exercices[22] = function () {
	const numbers = [5, 8, 12, 20, 3]
	const doubledNumbers = []

	for (let i = 0; i < numbers.length; i++) {
		const doubledNumber = numbers[i] * 2
		doubledNumbers[i] = doubledNumber
	}

	console.log(doubledNumbers) // [10, 16, 24, 40, 6]
}

exercices[23] = function () {
	const numbers = [5, 8, 12, 20, 3]
	let sum = 0

	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i]
	}

	const averageValue = sum / numbers.length
	console.log(averageValue) // 9.6
}

exercices[24] = function () {
	const numbers = [5, 8, 12, 20, 3]
	let smallestNumber = null

	for (let i = 0; i < numbers.length; i++) {
		const number = numbers[i]

		if (smallestNumber == null || number < smallestNumber) {
			smallestNumber = number
		}
	}

	console.log(smallestNumber) // 3
}

exercices[25] = function () {
	const mixedNumbers = [3, -5, 12, -1, 8, -6]
	const positiveNumbers = []

	for (let i = 0; i < mixedNumbers.length; i++) {
		const number = mixedNumbers[i]

		if (number > 0) {
			positiveNumbers.push(number)
		}
	}

	console.log(positiveNumbers) // [3, 12, 8]
}

exercices[26] = function () {
	const mixedNumbers = [3, -5, 12, -1, 8, -6]

	for (const number of mixedNumbers) {
		if (number > 0) {
			console.log(number)
		}
	} // 3  12  8
}

exercices[27] = function () {
	const numbers = [5, 8, 12, 20, 3]
	let index = 0

	while (index < numbers.length) {
		const number = numbers[index]

		if (number > 10) {
			break
		}

		index++
	}

	console.log(index) // Stops at index 2, since it's value is 12 (>10)
}

exercices[28] = function () {
	const mixedNumbers = [3, -5, 12, -1, 8, -6]
	let index = 0
	let amountOfNegatives = 0

	while (index < mixedNumbers.length) {
		const number = mixedNumbers[index]

		if (number < 0) {
			amountOfNegatives++
		}

		index++
	}

	console.log(amountOfNegatives) // 3
}

exercices[29] = function () {
	const words = ['banana', 'apple', 'kiwi', 'strawberry', 'peach']

	for (const word of words) {
		console.log(`${word} (${word.length})`) // for example: banana (6)
	}
}

exercices[30] = function () {
	const words = ['banana', 'apple', 'kiwi', 'strawberry', 'peach']
	let newWord = ''

	for (const word of words) {
		newWord += word[0] // add first character to newWord
	}

	console.log(newWord) // baksp
}

exercices[31] = function () {
	const numbers = [5, 8, 12, 20, 3]
	let index = 0
	let sum = 0

	while (index < numbers.length) {
		const number = numbers[index]
		console.log(number)

		sum += number
		if (sum > 25) {
			break
		}

		index++
	}

	console.log('stopped at', index) // stopped at index 3
}

exercices[32] = function () {
	const mixedNumbers = [3, -5, 12, -1, 8, -6]
	let sum = 0

	for (const number of mixedNumbers) {
		sum += number
	}

	console.log(sum) // 11
}

exercices[33] = function () {
	const temperatures = [15, 22, 19, 30, 28, 18, 25]
	let highestTemperature = null
	let highestTemperatureIndex = -1

	for (let i = 0; i < temperatures.length; i++) {
		const temperature = temperatures[i]

		if (highestTemperature == null || temperature > highestTemperature) {
			highestTemperature = temperature
			highestTemperatureIndex = i
		}
	}

	console.log(`${highestTemperature} at index ${highestTemperatureIndex}`)
	// 30 at index 3
}

exercices[34] = function () {
	const words = ['banana', 'apple', 'kiwi', 'strawberry', 'peach']
	let wordsSurpassing5Characters = 0

	for (const word of words) {
		if (word.length > 5) {
			wordsSurpassing5Characters++
		}
	}

	console.log(wordsSurpassing5Characters) // 2
}

exercices[35] = function () {
	const numbers = [5, 8, 12, 20, 3]
	let index = 0

	while (index < numbers.length) {
		const number = numbers[index]

		if (number % 2 == 1) {
			break // is odd
		}

		index++
	}

	console.log(`index ${index} is odd (${numbers[index]})`)
	// index 0 is odd (5)
}

for (const exercice of Object.keys(exercices)) {
	console.group(`Exercice ${exercice}`)
	exercices[exercice]()
	console.groupEnd()
}
