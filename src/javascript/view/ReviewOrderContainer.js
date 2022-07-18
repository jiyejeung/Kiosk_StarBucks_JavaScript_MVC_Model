import { $, objElement } from '../utils/ElementTool.js';
import { addComma } from '../utils/NumberTool.js';
import { spacingString } from '../utils/StringTool.js';

export default Object.create({
	init() {},
	setup() {
		const sectionReviewOrderContainer = this.printSectionReviewOrderContainer();
		const divSimpleReviewOrderContainer = this.appendDivSimpleReviewOrderContainer();
		const divDetailedReviewOrderContainer = this.appendDivDetailedReviewOrderContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(divSimpleReviewOrderContainer, divDetailedReviewOrderContainer);

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
	appendDivDetailedReviewOrderContainer() {
		const divDetailedReviewOrderContainer = this.printDivDetailedReviewOrderContainer();
		const fragment = document.createDocumentFragment();

		fragment.append();

		divDetailedReviewOrderContainer.appendChild(fragment);

		return divDetailedReviewOrderContainer;
	},
	printDivDetailedReviewOrderContainer() {
		return objElement.createElement('DIV').setClassName('divDetailedReviewOrderContainer').complete();
	},
	appendDivDetailedReviewOrderSelectedProductInfoContainer() {
		const fragment = document.createDocumentFragment();
		fragment.append();
	},
	// start!!
	printDivDetailedReviewOrderSelectedProductInfoContainer() {
		return objElement.createElement('DIV').setClassName('divDetailedReviewOrderSelectedProductInfoContainer').complete();
	},
	appendDivDetailedReviewOrderSelectedProductImageWrapperContainer() {
		const divDetailedReviewOrderSelectedProductImageWrapperContainer = this.printDivDetailedReviewOrderSelectedProductImageWrapperContainer();
		const divDetailedReviewOrderSelectedProductImageContainer = this.printDivDetailedReviewOrderSelectedProductImageContainer();

		divDetailedReviewOrderSelectedProductImageWrapperContainer.appendChild(divDetailedReviewOrderSelectedProductImageContainer);

		return divDetailedReviewOrderSelectedProductImageWrapperContainer;
	},
	printDivDetailedReviewOrderSelectedProductImageWrapperContainer() {
		return objElement.createElement('DIV').setClassName('divDetailedReviewOrderSelectedProductImageWrapperContainer').complete();
	},
	printDivDetailedReviewOrderSelectedProductImageContainer(imageUrl) {
		return objElement.createElement('DIV').setClassName('divDetailedReviewOrderSelectedProductImageContainer').setAttribute('style', `background-image: url(${imageUrl})`).complete();
	},
	// start2
	appendDivDetailedReviewOrderSelectedProductOptionWrapperContainer() {
		const fragment = document.createDocumentFragment();
		fragment.append();
	},
	printDivDetailedReviewOrderSelectedProductOptionWrapperContainer() {
		return objElement.createElement('DIV').setClassName('divDetailedReviewOrderSelectedProductOptionWrapperContainer').complete();
	},
	printSpanDetailedReviewOrderSelectedProductName(productName) {
		return objElement.createElement('', spacingString(productName)).setClassName('').complete();
	},
	printSpanDetailedReviewOrderSelectedProductOption(productSize, productIce) {
		return objElement.createElement('', spacingString()).setClassName('').complete();
	},
	printSpanDetailedReviewOrderSelectedProductPrice() {
		return objElement.createElement('', spacingString()).setClassName('').complete();
	},
	printSpanDetailedReviewOrderSelectedProductCount() {
		return objElement.createElement('', spacingString()).setClassName('').complete();
	},
	printSpanDetailedReviewOrderSelectedProductTotalPrice() {
		return objElement.createElement('', spacingString()).setClassName('').complete();
	},
	showSectionReviewOrderContainer() {
		$('.sectionReviewOrderContainer').style.display = 'flex';
		setTimeout(() => ($('.sectionReviewOrderContainer').style.opacity = 1), 0);
	},
	hideSectionReviewOrderContainer() {
		$('.sectionReviewOrderContainer').style.opacity = 0;
		setTimeout(() => ($('.sectionReviewOrderContainer').style.display = 'none'), 300);
	},
	onClickButtonPay() {
		this.showSectionReviewOrderContainer();
	},
});
