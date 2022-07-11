export default Object.create({
	allProducts: [],
	allProductCategories: [],
	async getAllProducts() {
		await fetch('http://localhost:3000/exampleAllMenu')
			.then(res => res.json())
			.then(res => void (this.allProducts = [...res]))
			.then(() => void (this.allProductCategories = [...new Set(this.allProducts.map(product => product['productCategory']))]))
			.catch(err => console.log(err));
	},
});
