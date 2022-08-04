export default Object.create({
	allProducts: [],
	allProductCategories: [],
	async getAllProducts() {
		await fetch('./php/controller.php?page=productInfo')
			.then(res => res.json())
			.then(res => void (this.allProducts = [...res]))
			.then(
				() =>
					void (this.allProducts = this.allProducts.map(productInfo => ({
						...productInfo,
						id: +productInfo.id,
						productAdditionalFee: +productInfo.productAdditionalFee,
						productCount: +productInfo.productCount,
						productEspressoShot: +productInfo.productEspressoShot,
						productPrice: +productInfo.productPrice,
						productSyrupCount: +productInfo.productSyrupCount,
					})))
			)
			.then(() => console.log(this.allProducts))
			.then(() => void (this.allProductCategories = [...new Set(this.allProducts.map(product => product['productCategory']))]))
			.catch(err => console.log(err));
	},
});
