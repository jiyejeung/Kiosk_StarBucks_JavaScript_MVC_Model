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
		const divProductImage = this.printDivProductImage();
		const h3ProductName = this.printH3ProductName();
		const divProductCategory = this.printDivProductCategory();
    const divOptionButtonContainer = this.appendDivOptionButtonContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(divProductImage, h3ProductName, divProductCategory, divOptionButtonContainer);

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
	appendDivOptionWrapperContainer() {
		const divOptionWrapperContainer = this.printDivOptionWrapperContainer();
		const divOptionCustomWrapperContainer = this.appendDivOptionCustomContainer();
		
		divOptionWrapperContainer.appendChild(divOptionCustomWrapperContainer);

		return divOptionWrapperContainer;
	},
	printDivOptionWrapperContainer() {
		return objElement.createElement('DIV').setClassName('divOptionWrapperContainer').complete();
	},
	appendDivOptionCustomContainer() {
		const divOptionCustomContainer = this.printDivOptionCustomContainer();
		const h4OptionSize = this.printH4OptionSize();
		const ulOptionSizeContainer = this.appendUlOptionSizeContainer();
		const h4OptionEspressoRoast = this.printH4OptionEspressoRoast();
		const ulOptionEspressoRoastContainer = this.appendUlOptionEspressoRoastContainer();
		const h4OptionEspressoShot = this.printH4OptionEspressoShot();
		const ulOptionEspressoShotContainer = this.appendUlOptionEspressoShotContainer();
		const h4OptionSyrup = this.printH4OptionSyrup();
		const ulOptionSyrupContainer = this.appendUlOptionSyrupContainer();
		const h4OptionIce = this.printH4OptionIce();
		const ulOptionIceContainer = this.appendUlOptionIceContainer();

		const fragment = document.createDocumentFragment();

		fragment.append(
			h4OptionSize,
			ulOptionSizeContainer,
			h4OptionEspressoRoast,
			ulOptionEspressoRoastContainer,
			h4OptionEspressoShot,
			ulOptionEspressoShotContainer,
			h4OptionSyrup,
			ulOptionSyrupContainer,
			h4OptionIce,
			ulOptionIceContainer
		);

		divOptionCustomContainer.appendChild(fragment);

		return divOptionCustomContainer;
	},
	printDivOptionCustomContainer() {
		return objElement.createElement('DIV').setClassName('divOptionCustomContainer').complete();
	},
	printH4OptionSize() {
		return objElement.createElement('H4', 'Size Options').setClassName('h4OptionSize').complete();
	},
	appendUlOptionSizeContainer() {
		const ulOptionSizeContainer = this.printUlOptionSizeContainer();
		const fragment = document.createDocumentFragment();

		Controller.sizeOptionsInfo().forEach(size => void fragment.appendChild(this.printLiOptionSize(size)));

		ulOptionSizeContainer.appendChild(fragment);
		return ulOptionSizeContainer;
	},
	printUlOptionSizeContainer() {
		return objElement.createElement('UL').setClassName('ulOptionSizeContainer').complete();
	},
	printLiOptionSize(size) {
		return objElement.createElement('LI', spacingString(size)).setClassName('liOptionSize').complete();
	},
	printH4OptionEspressoRoast() {
		return objElement.createElement('H4', 'Espresso Roast Options').setClassName('h4OptionEspressoRoast').complete();
	},
	appendUlOptionEspressoRoastContainer() {
		const ulOptionEspressoRoastContainer = this.printUlOptionEspressoRoastContainer();
		const fragment = document.createDocumentFragment();

		Controller.espressoRoastOptionsInfo().forEach(espressoRoast => void fragment.appendChild(this.printLiOptionEspressoRoast(espressoRoast)));

		ulOptionEspressoRoastContainer.appendChild(fragment);
		return ulOptionEspressoRoastContainer;
	},
	printUlOptionEspressoRoastContainer() {
		return objElement.createElement('UL').setClassName('ulOptionEspressoRoastContainer').complete();
	},
	printLiOptionEspressoRoast(espressoRoast) {
		return objElement.createElement('LI', spacingString(espressoRoast)).setClassName('liOptionEspressoRoast').complete();
	},
	// ====
	printH4OptionEspressoShot() {
		return objElement.createElement('H4', 'Espresso Shot Options').setClassName('h4OptionEspressoShot').complete();
	},
	appendUlOptionEspressoShotContainer() {
		const ulOptionEspressoShotContainer = this.printUlOptionEspressoShotContainer();
		const fragment = document.createDocumentFragment();

		Controller.espressoShotInfo().forEach(espressoShot => void fragment.appendChild(this.printLiOptionEspressoShot(espressoShot)));

		ulOptionEspressoShotContainer.appendChild(fragment);

		return ulOptionEspressoShotContainer;
	},
	printUlOptionEspressoShotContainer() {
		return objElement.createElement('UL').setClassName('ulOptionEspressoShotContainer').complete();
	},
	printLiOptionEspressoShot(espressoShot) {
		return objElement.createElement('LI', spacingString(espressoShot)).setClassName('liOptionEspressoShot').complete();
	},
	// ====
	printH4OptionSyrup() {
		return objElement.createElement('H4', 'Syrup Options').setClassName('h4OptionSyrup').complete();
	},
	appendUlOptionSyrupContainer() {
		const ulOptionSyrupContainer = this.printUlOptionSyrupContainer();
		const fragment = document.createDocumentFragment();

		Controller.syrupOptionsInfo().forEach(syrup => void fragment.appendChild(this.printLiOptionSyrup(syrup)));

		ulOptionSyrupContainer.appendChild(fragment);
		return ulOptionSyrupContainer;
	},
	printUlOptionSyrupContainer() {
		return objElement.createElement('UL').setClassName('ulOptionSyrupContainer').complete();
	},
	printLiOptionSyrup(syrup) {
		return objElement.createElement('LI', spacingString(syrup)).setClassName('liOptionSyrup').complete();
	},
	printH4OptionIce() {
		return objElement.createElement('H4', 'Ice Options').setClassName('h4OptionIce').complete();
	},
	appendUlOptionIceContainer() {
		const ulOptionIceContainer = this.printUlOptionIceContainer();
		const fragment = document.createDocumentFragment();

		Controller.iceOptionsInfo().forEach(ice => void fragment.appendChild(this.printLiOptionIce(ice)));

		ulOptionIceContainer.appendChild(fragment);
		return ulOptionIceContainer;
	},
	printUlOptionIceContainer() {
		return objElement.createElement('UL').setClassName('ulOptionIceContainer').complete();
	},
	printLiOptionIce(ice) {
		return objElement.createElement('LI', spacingString(ice)).setClassName('liOptionIce').complete();
	},
	// complete ===============
	printFooterKioskContainer() {
		return FooterKioskContainer.setup();
	},
	showSectionSelectOptionContainer() {},
});
