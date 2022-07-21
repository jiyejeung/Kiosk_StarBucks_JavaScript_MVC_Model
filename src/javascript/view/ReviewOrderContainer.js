import Controller from '../controller/Controller.js';
import { $, objElement } from '../utils/ElementTool.js';
import { addComma } from '../utils/NumberTool.js';
import { spacingString } from '../utils/StringTool.js';

export default Object.create({
	init() {},
	setup() {
		const sectionReviewOrderContainer = this.printSectionReviewOrderContainer();
		const divDetailedReviewOrderContainer = this.printDivDetailedReviewOrderContainer();
		const divSimpleReviewOrderContainer = this.appendDivSimpleReviewOrderContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(divDetailedReviewOrderContainer, divSimpleReviewOrderContainer);

		sectionReviewOrderContainer.appendChild(fragment);

		return sectionReviewOrderContainer;
	},
	printSectionReviewOrderContainer() {
		return objElement.createElement('SECTION').setClassName('sectionReviewOrderContainer').complete();
	},
	appendDivSimpleReviewOrderContainer() {
		const divSimpleReviewOrderContainer = this.printDivSimpleReviewOrderContainer();
		const divSimpleReviewOrderCountContainer = this.appendDivSimpleReviewOrderCountContainer();
		const divSimpleReviewOrderTotalPriceContainer = this.appendDivSimpleReviewOrderTotalPriceContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(divSimpleReviewOrderCountContainer, divSimpleReviewOrderTotalPriceContainer);

		divSimpleReviewOrderContainer.appendChild(fragment);

		return divSimpleReviewOrderContainer;
	},
	printDivDetailedReviewOrderContainer() {
		return objElement.createElement('DIV').setClassName('divDetailedReviewOrderContainer').complete();
	},
	printDivSimpleReviewOrderContainer() {
		return objElement.createElement('DIV').setClassName('divSimpleReviewOrderContainer').complete();
	},
	appendDivSimpleReviewOrderCountContainer() {
		const divSimpleReviewOrderContainer = this.printDivSimpleReviewOrderCountContainer();
		const spanSimpleReviewOrderText = this.printSpanSimpleReviewOrderText();
		const spanSimpleReviewOrderCount = this.printSpanSimpleReviewOrderCount();
		const fragment = document.createDocumentFragment();

		fragment.append(spanSimpleReviewOrderText, spanSimpleReviewOrderCount);

		divSimpleReviewOrderContainer.appendChild(fragment);

		return divSimpleReviewOrderContainer;
	},
	printDivSimpleReviewOrderCountContainer() {
		return objElement.createElement('DIV').setClassName('divSimpleReviewOrderCountContainer').complete();
	},
	printSpanSimpleReviewOrderText() {
		return objElement.createElement('SPAN', 'Review Order ').setClassName('spanSimpleReviewOrderText').complete();
	},
	printSpanSimpleReviewOrderCount(orderCount = 0) {
		return objElement.createElement('SPAN', `(${orderCount})`).setClassName('spanSimpleReviewOrderCount').complete();
	},
	appendDivSimpleReviewOrderTotalPriceContainer() {
		const divSimpleReviewOrderTotalPriceContainer = this.printDivSimpleReviewOrderTotalPriceContainer();
		const spanSimpleReviewOrderTotalPriceText = this.printSpanSimpleReviewOrderTotalPriceText();
		const spanSimpleReviewOrderTotalPrice = this.printSpanSimpleReviewOrderTotalPrice();
		const fragment = document.createDocumentFragment();

		fragment.append(spanSimpleReviewOrderTotalPriceText, spanSimpleReviewOrderTotalPrice);

		divSimpleReviewOrderTotalPriceContainer.appendChild(fragment);

		return divSimpleReviewOrderTotalPriceContainer;
	},
	printDivSimpleReviewOrderTotalPriceContainer() {
		return objElement.createElement('DIV').setClassName('divSimpleReviewOrderTotalPriceContainer').complete();
	},
	printSpanSimpleReviewOrderTotalPriceText() {
		return objElement.createElement('SPAN', 'Total: ').setClassName('spanSimpleReviewOrderTotalPriceText').complete();
	},
	printSpanSimpleReviewOrderTotalPrice(totalPrice = 0) {
		return objElement.createElement('SPAN', addComma(totalPrice)).setClassName('spanSimpleReviewOrderTotalPrice').complete();
	},
	appendDivSimpleReviewOrderButtonContainer() {},
	printDivSimpleReviewOrderButtonContainer() {},
	printButtonSimpleReviewOrderPay() {},
	printButtonSimpleReviewOrderBack() {},
	// ==== createDivDetailedReview
	createDivDetailedReviewOrderSelectedProductInfoContainer() {
		const fragment = document.createDocumentFragment();

		Controller.selectedProductsInfo().forEach(selectedProduct => fragment.append(this.appendDivDetailedReviewOrderSelectedProductInfoContainer(selectedProduct)));

		$('.divDetailedReviewOrderContainer').append(fragment);
	},
	appendDivDetailedReviewOrderSelectedProductInfoContainer(selectedProduct) {
		const divDetailedReviewOrderSelectedProductInfoContainer = this.printDivDetailedReviewOrderSelectedProductInfoContainer();
		const divDetailedReviewOrderSelectedProductImageWrapperContainer = this.appendDivDetailedReviewOrderSelectedProductImageWrapperContainer(selectedProduct);
		const divDetailedReviewOrderSelectedProductOptionWrapperContainer = this.appendDivDetailedReviewOrderSelectedProductOptionWrapperContainer(selectedProduct);
		const fragment = document.createDocumentFragment();

		fragment.append(divDetailedReviewOrderSelectedProductImageWrapperContainer, divDetailedReviewOrderSelectedProductOptionWrapperContainer);

		divDetailedReviewOrderSelectedProductInfoContainer.appendChild(fragment);

		return divDetailedReviewOrderSelectedProductInfoContainer;
	},
	printDivDetailedReviewOrderSelectedProductInfoContainer() {
		return objElement.createElement('DIV').setClassName('divDetailedReviewOrderSelectedProductInfoContainer').complete();
	},
	// ===
	appendDivDetailedReviewOrderSelectedProductImageWrapperContainer({ productImage }) {
		const divDetailedReviewOrderSelectedProductImageWrapperContainer = this.printDivDetailedReviewOrderSelectedProductImageWrapperContainer();
		const divDetailedReviewOrderSelectedProductImageContainer = this.printDivDetailedReviewOrderSelectedProductImageContainer(productImage);

		divDetailedReviewOrderSelectedProductImageWrapperContainer.appendChild(divDetailedReviewOrderSelectedProductImageContainer);

		return divDetailedReviewOrderSelectedProductImageWrapperContainer;
	},
	printDivDetailedReviewOrderSelectedProductImageWrapperContainer() {
		return objElement.createElement('DIV').setClassName('divDetailedReviewOrderSelectedProductImageWrapperContainer').complete();
	},
	printDivDetailedReviewOrderSelectedProductImageContainer(productImage) {
		return objElement.createElement('DIV').setClassName('divDetailedReviewOrderSelectedProductImageContainer').setAttribute('style', `background-image: url(${productImage})`).complete();
	},
	// start2
	appendDivDetailedReviewOrderSelectedProductOptionWrapperContainer({ productName, productSize, productIce, productPrice, productAdditionalFee, productCount }) {
		const fragment = document.createDocumentFragment();
		const divDetailedReviewOrderSelectedProductOptionWrapperContainer = this.printDivDetailedReviewOrderSelectedProductOptionWrapperContainer();

		fragment.append(
			this.printSpanDetailedReviewOrderSelectedProductName(productName),
			this.printSpanDetailedReviewOrderSelectedProductOption(productSize, productIce),
			this.printSpanDetailedReviewOrderSelectedProductPrice(productPrice, productAdditionalFee),
			this.printSpanDetailedReviewOrderSelectedProductCount(productCount),
			this.printSpanDetailedReviewOrderSelectedProductTotalPrice(productPrice, productAdditionalFee, productCount)
		);

		divDetailedReviewOrderSelectedProductOptionWrapperContainer.appendChild(fragment);

		return divDetailedReviewOrderSelectedProductOptionWrapperContainer;
	},
	printDivDetailedReviewOrderSelectedProductOptionWrapperContainer() {
		return objElement.createElement('DIV').setClassName('divDetailedReviewOrderSelectedProductOptionWrapperContainer').complete();
	},
	printSpanDetailedReviewOrderSelectedProductName(productName = 'Product Name') {
		return objElement.createElement('SPAN', spacingString(productName)).setClassName('spanDetailedReviewOrderSelectedProductName').complete();
	},
	printSpanDetailedReviewOrderSelectedProductOption(productSize = 'Short', productIce = 'No Ice') {
		return objElement
			.createElement('SPAN', `${spacingString(productSize)}, ${spacingString(productIce)}`)
			.setClassName('spanDetailedReviewOrderSelectedProductOptions')
			.complete();
	},
	printSpanDetailedReviewOrderSelectedProductPrice(productPrice = 1000, productAdditionalFee = 300) {
		return objElement
			.createElement('SPAN', `Product Price: ${addComma(productPrice + productAdditionalFee)}`)
			.setClassName('spanDetailedReviewOrderSelectedProductPrice')
			.complete();
	},
	printSpanDetailedReviewOrderSelectedProductCount(productCount = 1) {
		return objElement.createElement('SPAN', `Count: ${productCount}`).setClassName('spanDetailedReviewOrderSelectedProductCount').complete();
	},
	printSpanDetailedReviewOrderSelectedProductTotalPrice(productPrice = 1000, productAdditionalFee = 300, productCount = 1) {
		return objElement
			.createElement('SPAN', `Total: ${addComma((productPrice + productAdditionalFee) * productCount)}`)
			.setClassName('spanDetailedReviewOrderSelectedProductTotalPrice')
			.complete();
	},
	showSectionReviewOrderContainer() {
		$('.sectionReviewOrderContainer').style.display = 'flex';
		setTimeout(() => ($('.sectionReviewOrderContainer').style.opacity = 1), 0);
	},
	hideSectionReviewOrderContainer() {
		$('.sectionReviewOrderContainer').style.opacity = 0;
		setTimeout(() => ($('.sectionReviewOrderContainer').style.display = 'none'), 300);
	},
	setSpanSimpleReviewOrderCount() {
		$('.spanSimpleReviewOrderCount').textContent = addComma(Controller.selectedProductsInfo().reduce((pre, cur) => pre + cur.productCount, 0));
	},
	setSpanSimpleReviewOrderTotalPrice() {
		$('.spanSimpleReviewOrderTotalPrice').textContent = addComma(Controller.selectedProductsInfo().reduce((pre, cur) => pre + (cur.productPrice + cur.productAdditionalFee) * cur.productCount, 0));
	},
	onClickButtonPay() {
		this.showSectionReviewOrderContainer();
		this.createDivDetailedReviewOrderSelectedProductInfoContainer();
		this.setSpanSimpleReviewOrderCount();
		this.setSpanSimpleReviewOrderTotalPrice();
	},
});
