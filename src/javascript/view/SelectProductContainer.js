import Controller from '../controller/Controller.js';
import { $, $$, objElement } from '../utils/ElementTool.js';
import { addComma } from '../utils/NumberTool.js';
import { spacingString } from '../utils/StringTool.js';

export default Object.create({
	init() {},
	setup() {
		const sectionSelectProductContainer = this.printSectionSelectProductContainer();
		const ulSelectProductCategoryContainer = this.appendUlSelectProductCategoryContainer();
		const ulSelectProductWrapperContainer = this.printUlSelectProductWrapperContainer();
		const ulSelectProductListContainers = this.printUlSelectProductListContainers();
		const divSelectedProductWrapperContainer = this.appendDivSelectedProductWrapperContainer();
		const fragment = document.createDocumentFragment();

		ulSelectProductWrapperContainer.appendChild(ulSelectProductListContainers);

		fragment.append(ulSelectProductCategoryContainer, ulSelectProductWrapperContainer, divSelectedProductWrapperContainer);

		sectionSelectProductContainer.appendChild(fragment);

		return sectionSelectProductContainer;
	},
	printSectionSelectProductContainer() {
		return objElement.createElement('SECTION').setClassName('sectionSelectProductContainer').complete();
	},
	appendUlSelectProductCategoryContainer() {
		const ulSelectProductCategoryContainer = this.printUlSelectProductCategoryContainer();
		const fragment = document.createDocumentFragment();

		Controller.allProductCategoriesInfo()
			.map(category => spacingString(category))
			.forEach(category => void fragment.append(this.printLiSelectProductCategoryItem(category)));

		ulSelectProductCategoryContainer.appendChild(fragment);

		return ulSelectProductCategoryContainer;
	},
	printUlSelectProductCategoryContainer() {
		return objElement.createElement('UL').setClassName('ulSelectProductCategoryContainer').complete();
	},
	printLiSelectProductCategoryItem(category) {
		return objElement.createElement('LI', category).setClassName('liSelectProductCategoryItem').complete();
	},
	printUlSelectProductWrapperContainer() {
		return objElement.createElement('UL').setClassName('ulSelectProductWrapperContainer').complete();
	},
	printUlSelectProductListContainers() {
		const fragment = document.createDocumentFragment();

		Controller.allProductCategoriesInfo().forEach(category => {
			const ulSelectProductListContainer = this.printUlSelectProductListContainer();

			ulSelectProductListContainer.appendChild(this.printUlSelectProductItemContainers(category));

			fragment.appendChild(ulSelectProductListContainer);
		});

		return fragment;
	},
	printUlSelectProductListContainer() {
		return objElement.createElement('UL').setClassName('ulSelectProductListContainer').complete();
	},
	printUlSelectProductItemContainers(category) {
		const fragment = document.createDocumentFragment();

		Controller.allProductsInfo()
			.filter(({ productCategory }) => productCategory === category)
			.forEach(product => {
				const ulSelectProductItemContainer = this.printUlSelectProductItemContainer();

				ulSelectProductItemContainer.appendChild(this.printLiSelectProductItems(product));
				fragment.appendChild(ulSelectProductItemContainer);
			});

		return fragment;
	},
	printUlSelectProductItemContainer() {
		return objElement.createElement('UL').setClassName('ulSelectProductItemContainer').complete();
	},
	printLiSelectProductItems(product) {
		const fragment = document.createDocumentFragment();

		fragment.append(this.printLiSelectProductImageItem(product), this.printLiSelectProductNameItem(product), this.printLiSelectProductPriceItem(product));

		return fragment;
	},
	printLiSelectProductImageItem({ productImage }) {
		return objElement.createElement('LI').setClassName('liSelectProductImageItem').setAttribute('style', `background-image: url(${productImage})`).complete();
	},
	printLiSelectProductNameItem({ productName }) {
		return objElement.createElement('LI', spacingString(productName)).setClassName('liSelectProductNameItem').complete();
	},
	printLiSelectProductPriceItem({ productPrice }) {
		return objElement.createElement('LI', addComma(productPrice)).setClassName('liSelectProductPriceItem').complete();
	},
	appendDivSelectedProductWrapperContainer() {
		const divSelectedProductWrapperContainer = this.printDivSelectedProductWrapperContainer();
		const ulSelectedProductListContainer = this.printUlSelectedProductListContainer();
		const divPayWrapperContainer = this.appendDivPayWrapperContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(ulSelectedProductListContainer, divPayWrapperContainer);

		divSelectedProductWrapperContainer.appendChild(fragment);

		return divSelectedProductWrapperContainer;
	},
	printDivSelectedProductWrapperContainer() {
		return objElement.createElement('DIV').setClassName('divSelectedProductWrapperContainer').complete();
	},
	printUlSelectedProductListContainer() {
		return objElement.createElement('UL').setClassName('ulSelectedProductListContainer').complete();
	},
	// important!! start
	appendUlSelectedProductItemContainer({ id, productName, productPrice, productAdditionalFee, productCount }) {
		const ulSelectedProductItemContainer = this.printUlSelectedProductItemContainer();
		const liItemId = this.printLiItemId(id);
		const liItemName = this.printLiItemName(productName);
		const liWrapperContainer = this.appendLiWrapperItemContainer((productPrice + productAdditionalFee) * productCount, productCount);
		const liItemButtonContainer = this.appendLiItemButtonContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(liItemId, liItemName, liWrapperContainer, liItemButtonContainer);

		ulSelectedProductItemContainer.appendChild(fragment);

		return ulSelectedProductItemContainer;
	},
	printUlSelectedProductItemContainer() {
		return objElement.createElement('UL').setClassName('ulSelectedProductItemContainer').complete();
	},
	printLiItemId(id) {
		return objElement.createElement('LI', id).setClassName('liItemId').setAttribute('style', 'display: none').complete();
	},
	printLiItemName(productName) {
		return objElement.createElement('LI', spacingString(productName)).setClassName('liItemName').complete();
	},
	appendLiWrapperItemContainer(productPrice, productCount) {
		const liWrapperItemContainer = this.printLiWrapperItemContainer();
		const spanItemPrice = this.printSpanItemPrice(productPrice);
		const spanItemMinusCountContainer = this.appendSpanItemMinusCountContainer();
		const spanItemCount = this.printSpanItemCount(productCount);
		const spanItemAddCountContainer = this.appendSpanItemAddCountContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(spanItemPrice, spanItemMinusCountContainer, spanItemCount, spanItemAddCountContainer);

		liWrapperItemContainer.appendChild(fragment);

		return liWrapperItemContainer;
	},
	printLiWrapperItemContainer() {
		return objElement.createElement('LI').setClassName('liWrapperItemContainer').complete();
	},
	printSpanItemPrice(productPrice) {
		return objElement.createElement('SPAN', addComma(productPrice)).setClassName('spanItemPrice').complete();
	},
	appendSpanItemMinusCountContainer() {
		const spanItemMinusCountContainer = this.printSpanItemMinusCountContainer();
		const buttonItemMinusCount = this.printButtonItemMinusCount();
		const divMinusImageContainer = this.printDivMinusImageContainer();

		buttonItemMinusCount.appendChild(divMinusImageContainer);

		spanItemMinusCountContainer.appendChild(buttonItemMinusCount);

		return spanItemMinusCountContainer;
	},
	printSpanItemMinusCountContainer() {
		return objElement.createElement('SPAN').setClassName('spanItemMinusCountContainer').complete();
	},
	printButtonItemMinusCount() {
		return objElement.createElement('BUTTON').setClassName('buttonItemMinusCount').complete();
	},
	printDivMinusImageContainer() {
		return objElement.createElement('DIV').setClassName('divMinusImageContainer').complete();
	},
	printSpanItemCount(productCount) {
		return objElement.createElement('SPAN', productCount).setClassName('spanItemCount').complete();
	},
	appendSpanItemAddCountContainer() {
		const spanItemAddCountContainer = this.printSpanItemAddCountContainer();
		const buttonItemAddCount = this.printButtonItemAddCount();
		const divAddImageContainer = this.printDivAddImageContainer();

		buttonItemAddCount.appendChild(divAddImageContainer);

		spanItemAddCountContainer.appendChild(buttonItemAddCount);

		return spanItemAddCountContainer;
	},
	printSpanItemAddCountContainer() {
		return objElement.createElement('SPAN').setClassName('spanItemAddCountContainer').complete();
	},
	printButtonItemAddCount() {
		return objElement.createElement('BUTTON').setClassName('buttonItemAddCount').complete();
	},
	printDivAddImageContainer() {
		return objElement.createElement('DIV').setClassName('divAddImageContainer').complete();
	},
	appendLiItemButtonContainer() {
		const liItemButtonContainer = this.printLiItemButtonContainer();
		const buttonItemOption = this.printButtonItemOption();
		const buttonItemDelete = this.printButtonItemDelete();
		const fragment = document.createDocumentFragment();

		fragment.append(buttonItemOption, buttonItemDelete);

		liItemButtonContainer.appendChild(fragment);

		return liItemButtonContainer;
	},
	printLiItemButtonContainer() {
		return objElement.createElement('LI').setClassName('liItemButtonContainer').complete();
	},
	printButtonItemOption() {
		return objElement.createElement('BUTTON', 'Show Options').setClassName('buttonItemOption').complete();
	},
	printButtonItemDelete() {
		return objElement.createElement('BUTTON', 'Delete Item').setClassName('buttonItemDelete').complete();
	},
	// important!! end
	appendDivPayWrapperContainer() {
		const divPayWrapperContainer = this.printDivPayWrapperContainer();
		const divPayInfoContainer = this.appendDivPayInfoContainer();
		const buttonCancel = this.printButtonCancel();
		const buttonPay = this.printButtonPay();
		const fragment = document.createDocumentFragment();

		fragment.append(divPayInfoContainer, buttonPay, buttonCancel);

		divPayWrapperContainer.appendChild(fragment);

		return divPayWrapperContainer;
	},
	printDivPayWrapperContainer() {
		return objElement.createElement('DIV').setClassName('divPayWrapperContainer').complete();
	},
	appendDivPayInfoContainer() {
		const divPayInfoContainer = this.printDivPayInfoContainer();
		const divTotalAmountContainer = this.appendDivTotalAmountContainer();
		const divTotalNumberContainer = this.appendDivTotalNumberContainer();

		const fragment = document.createDocumentFragment();

		fragment.append(divTotalNumberContainer, divTotalAmountContainer);

		divPayInfoContainer.appendChild(fragment);

		return divPayInfoContainer;
	},
	printDivPayInfoContainer() {
		return objElement.createElement('DIV').setClassName('divPayInfoContainer').complete();
	},
	appendDivTotalAmountContainer() {
		const divTotalAmountContainer = this.printDivTotalAmountContainer();
		const spanTotalAmountText = this.printSpanTotalAmountText();
		const spanTotalAmountValue = this.printSpanTotalAmountValue();
		const fragment = document.createDocumentFragment();

		fragment.append(spanTotalAmountText, spanTotalAmountValue);

		divTotalAmountContainer.appendChild(fragment);

		return divTotalAmountContainer;
	},
	printDivTotalAmountContainer() {
		return objElement.createElement('DIV').setClassName('divTotalAmountContainer').complete();
	},
	printSpanTotalAmountText() {
		return objElement.createElement('SPAN', 'TOTAL: ').setClassName('spanTotalAmountText').complete();
	},
	printSpanTotalAmountValue() {
		return objElement.createElement('SPAN', '0').setClassName('spanTotalAmountValue').complete();
	},
	appendDivTotalNumberContainer() {
		const divTotalNumberContainer = this.printDivTotalNumberContainer();
		const spanTotalNumberText = this.printSpanTotalNumberText();
		const spanTotalNumberValue = this.printSpanTotalNumberValue();
		const fragment = document.createDocumentFragment();

		fragment.append(spanTotalNumberText, spanTotalNumberValue);

		divTotalNumberContainer.appendChild(fragment);

		return divTotalNumberContainer;
	},
	printSpanTotalNumberValue() {
		return objElement.createElement('SPAN', '0').setClassName('spanTotalNumberValue').complete();
	},
	printSpanTotalNumberText() {
		return objElement.createElement('SPAN', 'No. of items: ').setClassName('spanTotalNumberText').complete();
	},
	printDivTotalNumberContainer() {
		return objElement.createElement('DIV').setClassName('divTotalNumberContainer').complete();
	},
	printButtonCancel() {
		return objElement.createElement('BUTTON', 'CANCEL').setClassName('buttonCancel').complete();
	},
	printButtonPay() {
		return objElement.createElement('BUTTON', 'PAY').setClassName('buttonPay').complete();
	},
	changeBackgroundColorLiSelectProductCategoryItem(target) {
		$$('.liSelectProductCategoryItem').forEach(li => void (li !== target && (li.style.backgroundColor = '#16584e')));
		target.style.backgroundColor = '#193c36';
	},
	showUlSelectProductListContainer(index01) {
		$$('.ulSelectProductListContainer').forEach((ul, index02) => index01 === index02 && ((ul.style.display = 'flex'), setTimeout(() => (ul.style.opacity = 1), 300)));
	},
	hideUlSelectProductListContainer(index01) {
		$$('.ulSelectProductListContainer').forEach((ul, index02) => {
			index01 !== index02 && ((ul.style.opacity = 0), setTimeout(() => (ul.style.display = 'none'), 300));
		});
	},
	showSectionSelectProductContainer() {
		$('.sectionSelectProductContainer').style.display = 'flex';
		setTimeout(() => ($('.sectionSelectProductContainer').style.opacity = 1), 0);
	},
	hideSectionSelectProductContainer() {
		$('.sectionSelectProductContainer').style.opacity = 0;
		setTimeout(() => ($('.sectionSelectProductContainer').style.display = 'none'), 300);
	},
	removeUlSelectedProductListContainer() {
		$$('.ulSelectedProductItemContainer').forEach(ul => ul.remove());
	},
	createUlSelectProductListContainer() {
		const fragment = document.createDocumentFragment();

		Controller.selectedProductsInfo().forEach(selectedProductInfo => fragment.appendChild(this.appendUlSelectedProductItemContainer(selectedProductInfo)));

		$('.ulSelectedProductListContainer').appendChild(fragment);
	},
	onClickButtonTakeOut() {
		this.showSectionSelectProductContainer();
	},
	onClickButtonStore() {
		this.showSectionSelectProductContainer();
	},
	onClickLiSelectProductCategoryItem(target, index) {
		this.changeBackgroundColorLiSelectProductCategoryItem(target);
		this.hideUlSelectProductListContainer(index);
		this.showUlSelectProductListContainer(index);
	},
	onClickButtonPay() {
		this.hideSectionSelectProductContainer();
	},
	onClickButtonCancel() {
		this.hideSectionSelectProductContainer();
	},
	onClickButtonItemMinusCount(countValue, priceValue, currentTarget) {
		currentTarget.parentElement.parentElement.querySelector('.spanItemCount').textContent = countValue;
		currentTarget.parentElement.parentElement.querySelector('.spanItemPrice').textContent = addComma(priceValue * countValue);
		this.setSpanTotalAmountValue(Controller.totalAmountValue());
		this.setSpanTotalNumberValue(Controller.totalNumberValue());
	},
	onClickButtonItemAddCount(countValue, priceValue, currentTarget) {
		currentTarget.parentElement.parentElement.querySelector('.spanItemCount').textContent = countValue;
		currentTarget.parentElement.parentElement.querySelector('.spanItemPrice').textContent = addComma(priceValue * countValue);
		this.setSpanTotalAmountValue(Controller.totalAmountValue());
		this.setSpanTotalNumberValue(Controller.totalNumberValue());
	},
	onClickButtonItemOption(selectedProductInfo) {
		console.log(selectedProductInfo);
		// notEspresso인 경우
		// productName, productImage, productPrice, productAdditionalFee, productSize, productCount 만 display

		// espresso인 경우
		// productName, productImage, productPrice, productAdditionalFee ,productSize, productEspressoRoast, productEspressoShot, productSyrup, productSyrupCount, productCount
	},
	onClickButtonItemDelete(currentTarget, handler) {
		currentTarget.parentElement.parentElement.remove();
		this.setSpanTotalAmountValue(Controller.totalAmountValue());
		this.setSpanTotalNumberValue(Controller.totalNumberValue());
		this.setButtonPay(handler);
	},
	onClickButtonAddToCart(handler) {
		this.showSectionSelectProductContainer();
		this.removeUlSelectedProductListContainer();
		this.createUlSelectProductListContainer();
		this.setSpanTotalAmountValue(Controller.totalAmountValue());
		this.setSpanTotalNumberValue(Controller.totalNumberValue());
		this.setButtonPay(handler);
	},
	onClickButtonCancelAddingToCart() {
		this.showSectionSelectProductContainer();
	},
	onClickButtonSimpleReviewOrderBack() {
		this.showSectionSelectProductContainer();
	},
	setSpanTotalAmountValue(totalAmountValue) {
		$('.spanTotalAmountValue').textContent = addComma(totalAmountValue);
	},
	setSpanTotalNumberValue(totalNumberValue) {
		$('.spanTotalNumberValue').textContent = addComma(totalNumberValue);
	},
	setButtonPay(handler) {
		if (handler) $('.divPayWrapperContainer .buttonPay').style.cursor = 'pointer';
		else $('.divPayWrapperContainer .buttonPay').style.cursor = 'not-allowed';
	},
});
