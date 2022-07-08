import NavKioskContainer from '../components/NavKioskContainer.js';
import Controller from '../controller/Controller.js';
import { objElement } from '../utils/ElementTool.js';

export default Object.create({
	init() {},
	setup() {},
	printSectionSelectMenuContainer() {
		const sectionSelectMenuContainer = objElement.createElement('SECTION').setClassName('sectionSelectMenuContainer').complete();
		const fragment = document.createDocumentFragment();

		fragment.append(this.printKioskContainer(), this.printUlSelectMenuCategoryContainer());
		sectionSelectMenuContainer.appendChild(fragment);

		return sectionSelectMenuContainer;
	},
	printKioskContainer() {
		return NavKioskContainer.setup();
	},
	printLiSelectMenuCategoryItem(menuName) {
		return objElement.createElement('LI', menuName).setClassName('liSelectMenuCategoryItemContainer').complete();
	},
	printUlSelectMenuCategoryContainer() {
		const ulSelectMenuCategoryContainer = objElement.createElement('UL').setClassName('ulSelectMenuCategoryContainer').complete();

		Controller.getCoffeeInfo()['coffeeCategory'].forEach(menuName => void ulSelectMenuCategoryContainer.append(printLiSelectMenuCategoryItem(menuName)));

		return ulSelectMenuCategoryContainer;
	},
	printLiSelectMenuImageItem(itemUrl) {
		return objElement.createElement('LI').setClassName('liSelectMenuImageItem').setAttribute('style', `background-image: url(${itemUrl})`).complete();
	},
	printLiSelectMenuNameItem(itemName) {
		return objElement.createElement('LI', itemName).setClassName('liSelectMenuNameItem').complete();
	},
	printLiSelectMenuPriceItem(itemPrice) {
		return objElement.createElement('LI', itemPrice).setClassName('liSelectMenuPriceItem').complete();
	},
	printUlSelectMenuContainer() {
		const ulSelectMenuContainer = objElement.createElement('UL').setClassName('ulSelectMenuContainer').complete();
		const fragment = document.createDocumentFragment();

		fragment.append()
	},
	printUlSelectMenuWrapperContainer() {
		return objElement.createElement('UL').setClassName('ulSelectMenuContainer').complete();
	},
	showSelectMenuContainer() {},
	hideSelectMenuContainer() {},
	printSectionMenuOptionContainer() {},
	showSelectMenuOptionContainer() {},
	hideSelectMenuOptionContainer() {},
});
