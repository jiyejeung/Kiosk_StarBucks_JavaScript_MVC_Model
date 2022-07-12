import FooterKioskContainer from '../components/FooterKioskContainer.js';
import NavKioskContainer from '../components/NavKioskContainer.js';
import Controller from '../controller/Controller.js';
import { objElement } from '../utils/ElementTool.js';
import { spacingString } from '../utils/StringTool.js';

export default Object.create({
	init() {},
	setup() {
		const sectionSelectOptionContainer = this.printSectionSelectOptionContainer();
		const navKioskContainer = this.printNavKioskContainer();
		const divProductWrapperContainer = this.appendDivProductWrapperContainer();
		const divOptionWrapperContainer = this.appendDivOptionWrapperContainer();
		const footerKioskContainer = this.printFooterKioskContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(navKioskContainer, divOptionWrapperContainer, divProductWrapperContainer, footerKioskContainer);

		sectionSelectOptionContainer.appendChild(fragment);

		return sectionSelectOptionContainer;
	},
	printSectionSelectOptionContainer() {
		return objElement.createElement('SECTION').setClassName('sectionOptionContainer').complete();
	},
	printNavKioskContainer() {
		return NavKioskContainer.setup();
	},
	appendDivProductWrapperContainer() {
		const divProductWrapperContainer = this.printDivProductWrapperContainer();
		const divProductImageContainer = this.printDivProductImageContainer();
		const divProductImage = this.printDivProductImage();
		const h3ProductName = this.printH3ProductName();
		const divProductCategory = this.printDivProductCategory();
		const divOptionButtonContainer = this.appendDivOptionButtonContainer();
		const fragment = document.createDocumentFragment();

		divProductImageContainer.appendChild(divProductImage);
		fragment.append(divProductImageContainer, h3ProductName, divProductCategory, divOptionButtonContainer);

		divProductWrapperContainer.appendChild(fragment);

		return divProductWrapperContainer;
	},
	printDivProductWrapperContainer() {
		return objElement.createElement('DIV').setClassName('divProductWrapperContainer').complete();
	},
	printDivProductCategory(productCategory = 'recommendation') {
		return objElement
			.createElement('DIV', 'Kinds Of Coffee: ' + spacingString(productCategory))
			.setClassName('divProductCategory')
			.complete();
	},
	printH3ProductName(productName) {
		// return objElement.createElement('DIV', spacingString(productName)).setClassName('.divProductName').complete();
		return objElement.createElement('H3', 'Blonde Vanilla Double Shot Macchiato').setClassName('h3ProductName').complete();
	},
	printDivProductImageContainer() {
		return objElement.createElement('DIV').setClassName('divProductImageContainer').complete();
	},
	printDivProductImage(productImage) {
		return objElement.createElement('DIV').setClassName('divProductImage').setAttribute('style', 'background-image:url(./images/example.jpg)').complete();
	},
	appendDivOptionButtonContainer() {
		const divOptionButtonContainer = this.printDivOptionButtonContainer();
		const buttonAddToCart = this.printButtonAddToCart();
		const buttonCancel = this.printButtonCancel();
		const fragment = document.createDocumentFragment();

		fragment.append(buttonAddToCart, buttonCancel);

		divOptionButtonContainer.appendChild(fragment);

		return divOptionButtonContainer;
	},
	printDivOptionButtonContainer() {
		return objElement.createElement('DIV').setClassName('divOptionButtonContainer').complete();
	},
	printButtonAddToCart() {
		return objElement.createElement('BUTTON', 'Add To Cart').setClassName('buttonAddToCart').complete();
	},
	printButtonCancel() {
		return objElement.createElement('BUTTON', 'Cancel').setClassName('buttonCancel').complete();
	},
	//
	appendDivOptionWrapperContainer() {
		const divOptionWrapperContainer = this.printDivOptionWrapperContainer();
		const ulOptionListContainer = this.appendUlOptionListContainer();
		const divOptionCustomContainer = this.appendDivOptionCustomContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(ulOptionListContainer, divOptionCustomContainer);

		divOptionWrapperContainer.appendChild(fragment);

		return divOptionWrapperContainer;
	},
	printDivOptionWrapperContainer() {
		return objElement.createElement('DIV').setClassName('divOptionWrapperContainer').complete();
	},
	appendUlOptionListContainer() {
		const ulOptionListContainer = this.printUlOptionListContainer();
		const ulDefaultOption = this.appendUlDefaultOptionContainer();
		const ulAdditionalOption = this.appendUlAdditionalOptionContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(ulDefaultOption, ulAdditionalOption);

		ulOptionListContainer.appendChild(fragment);

		return ulOptionListContainer;
	},
	printUlOptionListContainer() {
		return objElement.createElement('UL').setClassName('ulOptionListContainer').complete();
	},
	appendUlDefaultOptionContainer() {
		const ulDefaultOptionContainer = this.printUlDefaultOption();
		const liSizeOption = this.printLiSizeOption();
		const liIceOption = this.printLiIceOption();
		const fragment = document.createDocumentFragment();

		fragment.append(liSizeOption, liIceOption);

		ulDefaultOptionContainer.appendChild(fragment);

		return ulDefaultOptionContainer;
	},
	printUlDefaultOption() {
		return objElement.createElement('UL', 'Default Options').setClassName('ulDefaultOptionContainer').complete();
	},
	printLiSizeOption() {
		return objElement.createElement('LI', 'Size').setClassName('liSizeOption').complete();
	},
	printLiIceOption() {
		return objElement.createElement('LI', 'Ice').setClassName('liIceOption').complete();
	},
	appendUlAdditionalOptionContainer() {
		const ulAdditionalOption = this.printUlAdditionalOptionContainer();
		const liEspressoOption = this.printLiEspressoOption();
		const liSyrupOption = this.printLiSyrupOption();
		const fragment = document.createDocumentFragment();

		fragment.append(liEspressoOption, liSyrupOption);

		ulAdditionalOption.appendChild(fragment);

		return ulAdditionalOption;
	},
	printUlAdditionalOptionContainer() {
		return objElement.createElement('UL', 'Detail Options').setClassName('ulAdditionalOptionContainer').complete();
	},
	printLiEspressoOption() {
		return objElement.createElement('Li', 'Espresso').setClassName('liEspressoOption').complete();
	},
	printLiSyrupOption() {
		return objElement.createElement('Li', 'Syrup').setClassName('liSyrupOption').complete();
	},
	appendDivOptionCustomContainer() {
		const divOptionCustomContainer = this.printDivOptionCustomContainer();
		const divDefaultOptionContainer = this.appendDivDefaultOptionContainer();
		const divAdditionalOptionContainer = this.appendDivAdditionalOptionContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(divDefaultOptionContainer, divAdditionalOptionContainer);

		divOptionCustomContainer.appendChild(fragment);

		return divOptionCustomContainer;
	},
	printDivOptionCustomContainer() {
		return objElement.createElement('DIV').setClassName('divOptionCustomContainer').complete();
	},
	appendDivDefaultOptionContainer() {
		const divDefaultOptionContainer = this.printDivDefaultOptionContainer();
		const divSizeOptionContainer = this.appendDivSizeOptionContainer();
		const divIceOptionContainer = this.appendDivIceOptionContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(divSizeOptionContainer, divIceOptionContainer);

		divDefaultOptionContainer.appendChild(fragment);

		return divDefaultOptionContainer;
	},
	printDivDefaultOptionContainer() {
		return objElement.createElement('DIV').setClassName('divDefaultOptionContainer').complete();
	},
	appendDivSizeOptionContainer() {
		const divSizeOptionContainer = this.printDivSizeOptionContainer();
		const H4SizeOption = this.printH4SizeOption();
		const ulSizeListWrapperContainer = this.appendUlSizeListWrapperContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(H4SizeOption, ulSizeListWrapperContainer);

		divSizeOptionContainer.appendChild(fragment);

		return divSizeOptionContainer;
	},
	printDivSizeOptionContainer() {
		return objElement.createElement('DIV').setClassName('divSizeOptionContainer').complete();
	},
	printH4SizeOption() {
		return objElement.createElement('H4', 'Size Options').setClassName('H4SizeOption').complete();
	},
	appendUlSizeListWrapperContainer() {
		const ulSizeListWrapperContainer = this.printUlSizeListWrapperContainer();
		const ulShortContainer = this.appendUlSizeListContainer('Short', '(8 fl oz)');
		const ulTallContainer = this.appendUlSizeListContainer('Tall', '(12 fl oz)');
		const ulGrandeContainer = this.appendUlSizeListContainer('Grande', '(16 fl oz)');
		const ulVentiContainer = this.appendUlSizeListContainer('Venti', '(20 fl oz)');
		const fragment = document.createDocumentFragment();

		fragment.append(ulShortContainer, ulTallContainer, ulGrandeContainer, ulVentiContainer);

		ulSizeListWrapperContainer.appendChild(fragment);

		return ulSizeListWrapperContainer;
	},
	printUlSizeListWrapperContainer() {
		return objElement.createElement('UL').setClassName('ulSizeListWrapperContainer').complete();
	},
	appendUlSizeListContainer(size, measurement) {
		const ulSizeListContainer = this.printUlSizeListContainer();
		const liCoffeeCup = this.printLiCoffeeCup();
		const liSize = this.printLiSize(size);
		const liMeasurement = this.printLiMeasurement(measurement);
		const fragment = document.createDocumentFragment();

		fragment.append(liCoffeeCup, liSize, liMeasurement);

		ulSizeListContainer.appendChild(fragment);

		return ulSizeListContainer;
	},
	printUlSizeListContainer() {
		return objElement.createElement('UL').setClassName('ulSizeListContainer').complete();
	},
	printLiSize(size) {
		return objElement.createElement('LI', size).setClassName('liSize').complete();
	},
	printLiMeasurement(measurement) {
		return objElement.createElement('LI', measurement).setClassName('liMeasurement').complete();
	},
	printLiCoffeeCup() {
		return objElement.createElement('Li').setClassName('liCoffeeCup').setAttribute('style', 'background-image: url("./images/coffeeCup.png")').complete();
	},
	appendDivIceOptionContainer() {
		const divIceOptionContainer = this.printDivIceOptionContainer();
		const fragment = document.createDocumentFragment();

		fragment.append();

		divIceOptionContainer.appendChild(fragment);

		return divIceOptionContainer;
	},
	printDivIceOptionContainer() {
		return objElement.createElement('DIV').setClassName('divIceOptionContainer').complete();
	},
	appendDivAdditionalOptionContainer() {
		const divAdditionalOptionContainer = this.printDivAdditionalOptionContainer();
		const fragment = document.createDocumentFragment();

		// fragment.append();

		divAdditionalOptionContainer.appendChild(fragment);

		return divAdditionalOptionContainer;
	},
	printDivAdditionalOptionContainer() {
		return objElement.createElement('DIV').setClassName('divAdditionalOptionContainer').complete();
	},
	print() {
		return objElement.createElement('').setClassName('').complete();
	},
	print() {
		return objElement.createElement('').setClassName('').complete();
	},
	print() {
		return objElement.createElement('').setClassName('').complete();
	},
	print() {
		return objElement.createElement('').setClassName('').complete();
	},
	// complete ===============
	printFooterKioskContainer() {
		return FooterKioskContainer.setup();
	},
	showSectionSelectOptionContainer() {},
});
