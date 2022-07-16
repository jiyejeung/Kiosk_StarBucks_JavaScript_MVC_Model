export const addComma = number =>
	('' + number)
		.split('')
		.reverse()
		.map((string, index) => (index ? (index % 3 ? string : string + ',') : string))
		.reverse()
		.join('');

export const convertTime = number => '0' + Math.floor(number / 60) + ':' + (number % 60 >= 10 ? number % 60 : '0' + (number % 60));
