import Controller from '../controller/Controller.js';

export default Object.create({
	userInfo: { name: '', couponUsing: 'no', couponCount: 0, takeOut: '' },
	selectedProduct: {},
	selectedProducts: [],
	addSelectedProduct() {
		this.selectedProducts.push({ ...this.selectedProduct });
	},
	initSelectedProduct(selectedProductName) {
		this.selectedProduct = { ...Controller.allProductsInfo().find(({ productName }) => productName === selectedProductName) };
		this.selectedProduct.id = Date.now();
	},
	setSelectedProductCount(productCountValue) {
		this.selectedProduct.productCount = productCountValue;
	},
	setSelectedProductPrice(productPriceValue) {
		this.selectedProduct.productPrice = productPriceValue;
	},
	setSelectedProductAdditionalFee() {
		const sizePrice = Controller.optionPriceInfo().size[this.selectedProduct.productSize];
		const espressoPrice = Controller.optionPriceInfo().espresso * this.selectedProduct.productEspressoShot;
		const syrupPrice = Controller.optionPriceInfo().syrup * this.selectedProduct.productSyrupCount;

		this.selectedProduct.productAdditionalFee = sizePrice + espressoPrice + syrupPrice;
	},
	setSelectedProductSize(productSizeValue) {
		this.selectedProduct.productSize = productSizeValue;
	},
	setSelectedProductEspressoShot(productEspressoShotValue) {
		this.selectedProduct.productEspressoShot = productEspressoShotValue;
	},
	setSelectedProductEspressoRoast(productEspressoRoastValue) {
		this.selectedProduct.productEspressoRoast = productEspressoRoastValue;
	},
	setSelectedProductSyrup(productSyrupValue) {
		this.selectedProduct.productSyrup = productSyrupValue;
	},
	setSelectedProductSyrupCount(productSyrupCountValue) {
		this.selectedProduct.productSyrupCount = productSyrupCountValue;
	},
	setSelectedProductIce(productIceValue) {
		this.selectedProduct.productIce = productIceValue;
	},
	confirmSelectedProductNotEspresso() {
		return this.selectedProduct.productEspressoRoast === 'notEspresso';
	},
	confirmSelectedProductCountMax() {
		return this.selectedProduct.productCount < 99;
	},
	confirmSelectedProductCountMin() {
		return this.selectedProduct.productCount > 1;
	},
	confirmSelectedProductEspressoShotMax() {
		return this.selectedProduct.productEspressoShot < 3;
	},
	confirmSelectedProductEspressoShotMin() {
		return this.selectedProduct.productEspressoShot > 0;
	},
	confirmSelectedProductSyrupCountMax() {
		return this.selectedProduct.productSyrupCount < 3;
	},
	confirmSelectedProductSyrupCountMin() {
		return this.selectedProduct.productSyrupCount > 0;
	},
	// addSelectedProducts() {
	// 	this.confirmBakery() && this.confirmExistSameName() && this.selectedProducts.push({ ...this.selectedProduct });
	// },
	// confirmExistSameName() {
	// 	return this.selectedProducts.some(({ productName }) => productName === this.selectedProduct.productName);
	// },
	// confirmBakery() {
	// 	return this.selectedProduct.productCategory === 'bakery';
	// },
	// addSelectedProductCount() {
	// 	this.selectedProducts.map(selectedProduct => {
	// 		if (selectedProduct.productName === this.selectedProduct.productName) {
	// 			selectedProduct.productCount = selectedProduct.productCount === 99 ? selectedProduct.productName : selectedProduct.productCount + 1;
	// 			return selectedProduct;
	// 		} else return selectedProduct;
	// 	});
	// },
	// subSelectedProductCount() {
	// 	this.selectedProducts.map(selectedProduct => {
	// 		if (selectedProduct.productName === this.selectedProduct.productName) {
	// 			selectedProduct.productCount = selectedProduct.productCount === 99 ? selectedProduct.productName : selectedProduct.productCount + 1;
	// 			return selectedProduct;
	// 		} else return selectedProduct;
	// 	});
	// },
});
