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

for (const exercice of Object.keys(exercices)) {
	console.group(`Exercice ${exercice}`)
	exercices[exercice]()
	console.groupEnd()
}
