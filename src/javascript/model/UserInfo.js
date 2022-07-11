import Controller from '../controller/Controller.js';

export default Object.create({
	userInfo: { name: '', couponUsing: 'no', couponCount: 0, takeOut: '' },
	selectedProduct: {},
	getSelectedProductInfo() {},
	setSelectedProduct(selectedProductName) {
		this.selectedProduct = Controller.allProductsInfo().find(({ productName }) => productName === selectedProductName);
		console.log(this.selectedProduct);
	},
	selectedProducts: [
		// {
		// 	id: 1,
		// 	productName: 'example01',
		// 	productPrice: '4,000',
		// 	productCategory: 'recommendation',
		// 	productSize: 'Short',
		// 	productEspressoShot: '1',
		// 	productSyrup: { vanillaSyrup: 1, hazelnutSyrup: 0, caramelSyrup: 0 },
		// 	ice: 'none',
		// },
		// {
		// 	id: 2,
		// 	productName: 'example02',
		// 	productPrice: '3,000',
		// 	productCategory: 'recommendation',
		// 	productSize: 'Grande',
		// 	productEspressoShot: '1',
		// 	productSyrup: { vanillaSyrup: 1, hazelnutSyrup: 0, caramelSyrup: 0 },
		// 	ice: 'Default',
		// },
	],
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
