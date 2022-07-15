export default Object.freeze({
	sizeOptions: [
		{ size: 'short', measurement: 8 },
		{ size: 'tall', measurement: 12 },
		{ size: 'grande', measurement: 16 },
		{ size: 'venti', measurement: 20 },
	],
	defaultOptions: ['size', 'ice'],
	detailedOptions: ['espresso', 'syrup'],
	espressoRoastOptions: ['signatureRoast', 'blondeRoast', 'decafRoast'],
	syrupOptions: ['vanillaSyrup', 'hazelnutSyrup', 'caramelSyrup'],
	iceOptions: ['noIce', 'lightIce', 'ice', 'extraIce'],
	optionPrice: { size: { short: 0, tall: 500, grande: 1000, venti: 1500 }, syrup: 200, espresso: 500 },
});
