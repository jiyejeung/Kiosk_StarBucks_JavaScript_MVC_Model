export default Object.create({
	allMenu: [],
	productCategory: [],
	async getAllMenu() {
		await fetch('http://localhost:3000/exampleAllMenu')
			.then(res => res.json())
			.then(res => void (this.allMenu = [...res]))
			.then(() => void (this.productCategory = [...new Set(this.allMenu.map(product => product['productCategory']))]))
			.catch(err => console.log(err));
	},
});
