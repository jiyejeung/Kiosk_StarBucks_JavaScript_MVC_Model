export const addComma = number =>
	('' + number)
		.split('')
		.reverse()
		.map((string, index) => (index ? (index % 3 ? string : string + ',') : string))
		.reverse()
		.join('');
