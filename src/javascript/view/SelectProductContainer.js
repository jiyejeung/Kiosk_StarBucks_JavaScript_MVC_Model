import Controller from '../controller/Controller.js';
import { $, $$, objElement } from '../utils/ElementTool.js';
import { spacingString } from '../utils/StringTool.js';

export default Object.create({
	printButtonCancel() {
		return objElement.createElement('BUTTON', 'CANCEL').setClassName('buttonCancel').complete();
	},
	printButtonPay() {
		return objElement.createElement('BUTTON', 'PAY').setClassName('buttonPay').complete();
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
	appendDivTotalNumberContainer() {
		const divTotalNumberContainer = this.printDivTotalNumberContainer();
		const spanTotalNumberText = this.printSpanTotalNumberText();
		const spanTotalNumberValue = this.printSpanTotalNumberValue();
		const fragment = document.createDocumentFragment();

		fragment.append(spanTotalNumberText, spanTotalNumberValue);

		divTotalNumberContainer.appendChild(fragment);

		return divTotalNumberContainer;
	},
	printSpanTotalAmountText() {
		return objElement.createElement('SPAN', 'TOTAL: ').setClassName('spanTotalAmountText').complete();
	},
	printSpanTotalAmountValue() {
		return objElement.createElement('SPAN', '0').setClassName('spanTotalAmountValue').complete();
	},
	printDivTotalAmountContainer() {
		return objElement.createElement('DIV').setClassName('divTotalAmountContainer').complete();
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
	printDivPayInfoContainer() {
		return objElement.createElement('DIV').setClassName('divPayInfoContainer').complete();
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
	printDivPayWrapperContainer() {
		return objElement.createElement('DIV').setClassName('divPayWrapperContainer').complete();
	},
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
	printLiItemPrice({ productPrice }) {
		return objElement.createElement('LI', productPrice).setClassName('liItemMinusCountContainer').complete();
	},
	printButtonItemMinusCount() {
		return objElement.createElement('BUTTON', '-').setClassName('buttonItemMinusCount').complete();
	},
	printLiItemMinusCountContainer() {
		return objElement.createElement('LI').setClassName('liItemMinusCountContainer').complete();
	},
	printLiItemCount() {
		return objElement.createElement('LI', '1').setClassName('liItemCount').complete();
	},
	printButtonItemAddCount() {
		return objElement.createElement('BUTTON', '+').setClassName('buttonItemAddCount').complete();
	},
	printLiItemAddCountContainer() {
		return objElement.createElement('LI').setClassName('liItemAddCountContainer').complete();
	},
	printLiItemName({ productName }) {
		return objElement.createElement('LI', productName).setClassName('liItemName').complete();
	},
	printButtonItemOption() {
		return objElement.createElement('BUTTON', 'OP').setClassName('buttonItemOption').complete();
	},
	printLiItemOptionContainer() {
		return objElement.createElement('LI').setClassName('liItemOptionContainer').complete();
	},
	printUlSelectedProductItemContainer() {
		return objElement.createElement('UL').setClassName('ulSelectedProductItemContainer').complete();
	},
	printUlSelectedProductListContainer() {
		return objElement.createElement('UL').setClassName('ulSelectedProductListContainer').complete();
	},
	printDivSelectedProductWrapperContainer() {
		return objElement.createElement('DIV').setClassName('divSelectedProductWrapperContainer').complete();
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
	printLiSelectProductImageItem({ productImage }) {
		return objElement.createElement('LI').setClassName('liSelectProductImageItem').setAttribute('style', `background-image: url(${productImage})`).complete();
	},
	printLiSelectProductNameItem({ productName }) {
		return objElement.createElement('LI', productName).setClassName('liSelectProductNameItem').complete();
	},
	printLiSelectProductPriceItem({ productPrice }) {
		return objElement.createElement('LI', productPrice).setClassName('liSelectProductPriceItem').complete();
	},
	printLiSelectProductItems(product) {
		const fragment = document.createDocumentFragment();

		fragment.append(this.printLiSelectProductImageItem(product), this.printLiSelectProductNameItem(product), this.printLiSelectProductPriceItem(product));

		return fragment;
	},
	printUlSelectProductItemContainer() {
		return objElement.createElement('UL').setClassName('ulSelectProductItemContainer').complete();
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
	printUlSelectProductListContainer() {
		return objElement.createElement('UL').setClassName('ulSelectProductListContainer').complete();
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
	printUlSelectProductWrapperContainer() {
		return objElement.createElement('UL').setClassName('ulSelectProductWrapperContainer').complete();
	},
	printLiSelectProductCategoryItem(category) {
		return objElement.createElement('LI', category).setClassName('liSelectProductCategoryItem').complete();
	},
	printLiSelectProductCategoryItems() {
		const fragment = document.createDocumentFragment();
		Controller.allProductCategoriesInfo()
			.map(category => spacingString(category))
			.forEach(category => void fragment.append(this.printLiSelectProductCategoryItem(category)));

		return fragment;
	},
	printUlSelectProductCategoryContainer() {
		return objElement.createElement('UL').setClassName('ulSelectProductCategoryContainer').complete();
	},
	printSectionSelectProductContainer() {
		return objElement.createElement('SECTION').setClassName('sectionSelectProductContainer').complete();
	},
	setup() {
		const sectionSelectProductContainer = this.printSectionSelectProductContainer();
		const ulSelectProductCategoryContainer = this.printUlSelectProductCategoryContainer();
		const liSelectProductCategoryItems = this.printLiSelectProductCategoryItems();
		const ulSelectProductWrapperContainer = this.printUlSelectProductWrapperContainer();
		const ulSelectProductListContainers = this.printUlSelectProductListContainers();
		const divSelectedProductWrapperContainer = this.appendDivSelectedProductWrapperContainer();
		const fragment = document.createDocumentFragment();

		ulSelectProductCategoryContainer.appendChild(liSelectProductCategoryItems);

		ulSelectProductWrapperContainer.appendChild(ulSelectProductListContainers);

		fragment.append(ulSelectProductCategoryContainer, ulSelectProductWrapperContainer, divSelectedProductWrapperContainer);

		sectionSelectProductContainer.appendChild(fragment);

		return sectionSelectProductContainer;
	},
	init() {},
	changeBackgroundColorLiSelectProductCategoryItem(target) {
		$$('.liSelectProductCategoryItem').forEach(li => void (li !== target && (li.style.backgroundColor = '#16584e')));
		target.style.backgroundColor = '#193c36';
	},
	showUlSelectProductListContainer(index01) {
		$$('.ulSelectProductListContainer').forEach(
			(ul, index02) =>
				void (
					index01 === index02 &&
					setTimeout(() => {
						ul.style.display = 'flex';
						setTimeout(() => {
							ul.style.opacity = 1;
						}, 300);
					}, 300)
				)
		);
	},
	hideUlSelectProductListContainer(index01) {
		$$('.ulSelectProductListContainer').forEach(
			(ul, index02) =>
				void (
					index01 !== index02 &&
					((ul.style.opacity = 0),
					setTimeout(() => {
						ul.style.display = 'none';
					}, 300))
				)
		);
	},
	showSectionSelectProductContainer() {
		$('.sectionSelectProductContainer').style.display = 'flex';
		setTimeout(() => {
			$('.sectionSelectProductContainer').style.opacity = 1;
		}, 0);
	},
	hideSectionSelectProductContainer() {
		$('.sectionSelectProductContainer').style.opacity = 0;
		setTimeout(() => {
			$('.sectionSelectProductContainer').style.display = 'none';
		}, 300);
	},
	printSectionProductOptionContainer() {},
	showSelectProductOptionContainer() {},
	hideSelectProductOptionContainer() {},
});
