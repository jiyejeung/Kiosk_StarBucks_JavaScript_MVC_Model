export default Object.create({
	currentUser: { name: '', couponUsing: 'no', couponCount: 0 },
	currentSelectedProduct: [
		{
			id: 1,
			productName: 'example01',
			productPrice: '4,000',
			productCategory: 'recommendation',
			productSize: 'Short',
			productEspressoShot: '1',
			productSyrup: { vanillaSyrup: 1, hazelnutSyrup: 0, caramelSyrup: 0 },
			ice: 'none',
		},
		{
			id: 2,
			productName: 'example02',
			productPrice: '3,000',
			productCategory: 'recommendation',
			productSize: 'Grande',
			productEspressoShot: '1',
			productSyrup: { vanillaSyrup: 1, hazelnutSyrup: 0, caramelSyrup: 0 },
			ice: 'Default',
		},
	],
});
