import Controller from '../controller/Controller.js';

export default Object.create({
	userInfo: { pointUsing: 'no', takeOut: '' },
	selectedProduct: {},
	selectedProducts: [],
	addSelectedProduct() {
		const handler = this.selectedProducts.some(
			selectedProduct =>
				selectedProduct.productName === this.selectedProduct.productName &&
				selectedProduct.productSize === this.selectedProduct.productSize &&
				selectedProduct.productIce === this.selectedProduct.productIce &&
				selectedProduct.productEspressoShot === this.selectedProduct.productEspressoShot &&
				selectedProduct.productEspressoRoast === this.selectedProduct.productEspressoRoast &&
				selectedProduct.productSyrup === this.selectedProduct.productSyrup &&
				selectedProduct.productSyrup === this.selectedProduct.productSyrup
		);
		if (handler)
			this.selectedProducts.map(selectedProduct => {
				selectedProduct.productName === this.selectedProduct.productName &&
					selectedProduct.productSize === this.selectedProduct.productSize &&
					selectedProduct.productIce === this.selectedProduct.productIce &&
					selectedProduct.productEspressoShot === this.selectedProduct.productEspressoShot &&
					selectedProduct.productEspressoRoast === this.selectedProduct.productEspressoRoast &&
					selectedProduct.productSyrup === this.selectedProduct.productSyrup &&
					selectedProduct.productSyrup === this.selectedProduct.productSyrup &&
					selectedProduct.productCount++;
			});
		else this.selectedProducts.push({ ...this.selectedProduct });
	},
	pickSelectedProduct(selectedProductId) {
		return this.selectedProducts.find(({ id }) => id === selectedProductId);
	},
	deleteSelectedProduct(selectedProductId) {
		this.selectedProducts = this.selectedProducts.filter(selectedProduct => selectedProduct.id != selectedProductId);
	},
	initSelectedProduct(selectedProductName) {
		this.selectedProduct = { ...Controller.allProductsInfo().find(({ productName }) => productName === selectedProductName) };
		this.selectedProduct.id = Date.now();
	},
	initSelectedProducts() {
		this.selectedProducts = [];
	},
	totalAmountValue() {
		return this.selectedProducts.reduce((pre, cur) => pre + cur.productCount * (cur.productPrice + cur.productAdditionalFee), 0);
	},
	totalNumberValue() {
		return this.selectedProducts.reduce((pre, cur) => pre + cur.productCount, 0);
	},
	setSelectedProductAddCount(productId) {
		const selectedProduct = { ...this.selectedProducts.find(({ id }) => id === productId) };

		selectedProduct.productCount = selectedProduct.productCount < 99 ? selectedProduct.productCount + 1 : selectedProduct.productCount;

		this.selectedProducts = this.selectedProducts.map(selectedProductInfo => (selectedProductInfo.id == productId ? { ...selectedProduct } : selectedProductInfo));

		return [selectedProduct.productCount, selectedProduct.productPrice + selectedProduct.productAdditionalFee];
	},
	setSelectedProductMinusCount(productId) {
		const selectedProduct = { ...this.selectedProducts.find(({ id }) => id === productId) };

		selectedProduct.productCount = selectedProduct.productCount > 1 ? selectedProduct.productCount - 1 : selectedProduct.productCount;

		this.selectedProducts = this.selectedProducts.map(selectedProductInfo => (selectedProductInfo.id == productId ? { ...selectedProduct } : selectedProductInfo));

		return [selectedProduct.productCount, selectedProduct.productPrice + selectedProduct.productAdditionalFee];
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
	confirmEmptySelectedProducts() {
		return this.selectedProducts.length;
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
