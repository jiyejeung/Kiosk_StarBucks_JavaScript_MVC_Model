export const subComma = string =>
	+string
		.split('')
		.filter(string => string !== ',')
		.join('');

export const spacingString = string =>
	string
		.split('')
		.map(string => string.replace(/[A-Z]/, ' ' + string))
		.map((string, index) => (index ? string : string.toUpperCase()))
		.join('');

export const subSpacingString = string =>
	string
		.split(' ')
		.map((string, index) => (index ? string : string.toLowerCase()))
		.join('');

export const confirmMobilePhoneNumber = string => !/^010-\d*/.test(string);
