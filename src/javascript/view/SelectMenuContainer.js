import FooterKioskContainer from '../components/FooterKioskContainer.js';
import NavKioskContainer from '../components/NavKioskContainer.js';
import Controller from '../controller/Controller.js';
import { $, $$, objElement } from '../utils/ElementTool.js';

export default Object.create({
	printFooterKioskContainer() {
		return FooterKioskContainer.setup();
	},
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
	printDivSelectedMenuWrapperContainer() {
		return objElement.createElement('DIV').setClassName('divSelectedMenuWrapperContainer').complete();
	},
	appendDivSelectedMenuWrapperContainer() {
		const divSelectedMenuWrapperContainer = this.printDivSelectedMenuWrapperContainer();
		const ulSelectedProductListContainer = this.printUlSelectedProductListContainer();
		const divPayWrapperContainer = this.appendDivPayWrapperContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(ulSelectedProductListContainer, divPayWrapperContainer);

		divSelectedMenuWrapperContainer.appendChild(fragment);

		return divSelectedMenuWrapperContainer;
	},
	printLiSelectMenuImageItem({ productImage }) {
		return objElement.createElement('LI').setClassName('liSelectMenuImageItem').setAttribute('style', `background-image: url(${productImage})`).complete();
	},
	printLiSelectMenuNameItem({ productName }) {
		return objElement.createElement('LI', productName).setClassName('liSelectMenuNameItem').complete();
	},
	printLiSelectMenuPriceItem({ productPrice }) {
		return objElement.createElement('LI', productPrice).setClassName('liSelectMenuPriceItem').complete();
	},
	printLiSelectMenuItems(product) {
		const fragment = document.createDocumentFragment();

		fragment.append(this.printLiSelectMenuImageItem(product), this.printLiSelectMenuNameItem(product), this.printLiSelectMenuPriceItem(product));

		return fragment;
	},
	printUlSelectMenuItemContainer() {
		return objElement.createElement('UL').setClassName('ulSelectMenuItemContainer').complete();
	},
	printUlSelectMenuItemContainers(category) {
		const fragment = document.createDocumentFragment();

		Controller.getAllMenuInfo()
			.allMenu.filter(({ productCategory }) => productCategory === category)
			.forEach(product => {
				const ulSelectMenuItemContainer = this.printUlSelectMenuItemContainer();

				ulSelectMenuItemContainer.appendChild(this.printLiSelectMenuItems(product));
				fragment.appendChild(ulSelectMenuItemContainer);
			});

		return fragment;
	},
	printUlSelectMenuListContainer() {
		return objElement.createElement('UL').setClassName('ulSelectMenuListContainer').complete();
	},
	printUlSelectMenuListContainers() {
		const fragment = document.createDocumentFragment();

		Controller.getAllMenuInfo().productCategory.forEach(category => {
			const ulSelectMenuListContainer = this.printUlSelectMenuListContainer();

			ulSelectMenuListContainer.appendChild(this.printUlSelectMenuItemContainers(category));

			fragment.appendChild(ulSelectMenuListContainer);
		});

		return fragment;
	},
	printUlSelectMenuWrapperContainer() {
		return objElement.createElement('UL').setClassName('ulSelectMenuWrapperContainer').complete();
	},
	printLiSelectMenuCategoryItem(category) {
		return objElement.createElement('LI', category).setClassName('liSelectMenuCategoryItem').complete();
	},
	printLiSelectMenuCategoryItems() {
		const fragment = document.createDocumentFragment();
		Controller.getAllMenuInfo()
			.productCategory.map(category =>
				category
					.split('')
					.map(str => str.replace(/[A-Z]/, ' ' + str))
					.map((str, index) => (index ? str : str.toUpperCase()))
					.join('')
			)
			.forEach(category => void fragment.append(this.printLiSelectMenuCategoryItem(category)));

		return fragment;
	},
	printUlSelectMenuCategoryContainer() {
		return objElement.createElement('UL').setClassName('ulSelectMenuCategoryContainer').complete();
	},
	printNavKioskContainer() {
		return NavKioskContainer.setup();
	},
	printSectionSelectMenuContainer() {
		return objElement.createElement('SECTION').setClassName('sectionSelectMenuContainer').complete();
	},
	setup() {
		const sectionSelectMenuContainer = this.printSectionSelectMenuContainer();
		const navKioskContainer = this.printNavKioskContainer();
		const ulSelectMenuCategoryContainer = this.printUlSelectMenuCategoryContainer();
		const liSelectMenuCategoryItems = this.printLiSelectMenuCategoryItems();
		const ulSelectMenuWrapperContainer = this.printUlSelectMenuWrapperContainer();
		const ulSelectMenuListContainers = this.printUlSelectMenuListContainers();
		const divSelectedMenuWrapperContainer = this.appendDivSelectedMenuWrapperContainer();
		const footerKioskContainer = this.printFooterKioskContainer();
		const fragment = document.createDocumentFragment();

		ulSelectMenuCategoryContainer.appendChild(liSelectMenuCategoryItems);

		ulSelectMenuWrapperContainer.appendChild(ulSelectMenuListContainers);

		fragment.append(navKioskContainer, ulSelectMenuCategoryContainer, ulSelectMenuWrapperContainer, divSelectedMenuWrapperContainer, footerKioskContainer);

		sectionSelectMenuContainer.appendChild(fragment);

		return sectionSelectMenuContainer;
	},
	init() {},
	changeBackgroundColorLiSelectMenuCategoryItem(target) {
		$$('.liSelectMenuCategoryItem').forEach(li => void (li !== target && (li.style.backgroundColor = '#16584e')));
		target.style.backgroundColor = '#193c36';
	},
	showUlSelectMenuListContainer(index01) {
		$$('.ulSelectMenuListContainer').forEach(
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
	hideUlSelectMenuListContainer(index01) {
		$$('.ulSelectMenuListContainer').forEach(
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
	showSectionSelectMenuContainer() {
		setTimeout(() => {
			$('.sectionSelectMenuContainer').style.display = 'flex';
			setTimeout(() => {
				$('.sectionSelectMenuContainer').style.opacity = 1;
			}, 0);
		}, 300);
	},
	hideSectionSelectMenuContainer() {
		$('.sectionSelectMenuContainer').style.opacity = 0;
		setTimeout(() => {
			$('.sectionSelectMenuContainer').style.display = 'none';
		}, 300);
	},
	printSectionMenuOptionContainer() {},
	showSelectMenuOptionContainer() {},
	hideSelectMenuOptionContainer() {},
});
