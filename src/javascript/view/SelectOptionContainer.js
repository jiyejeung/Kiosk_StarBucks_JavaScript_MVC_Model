// utils
import { $, $$, objElement } from '../utils/ElementTool.js';
import { addComma } from '../utils/NumberTool.js';
import { spacingString } from '../utils/StringTool.js';

// controller
import Controller from '../controller/Controller.js';

export default Object.create({
	// init method
	init() {
		this.hideSectionSelectOptionContainer();
	},

	// setup method
	setup() {
		const sectionSelectOptionContainer = this.printSectionSelectOptionContainer();
		const divDisabledWrapperOptionModalContainer = this.appendDivDisabledWrapperOptionModalContainer();
		const divOptionWrapperContainer = this.appendDivOptionWrapperContainer();
		const divProductWrapperContainer = this.appendDivProductWrapperContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(divDisabledWrapperOptionModalContainer, divOptionWrapperContainer, divProductWrapperContainer);

		sectionSelectOptionContainer.appendChild(fragment);

		return sectionSelectOptionContainer;
	},

	// print methods
	printSectionSelectOptionContainer() {
		return objElement.createElement('SECTION').setClassName('sectionOptionContainer').complete();
	},
	appendDivDisabledWrapperOptionModalContainer() {
		const divDisabledWrapperOptionModalContainer = this.printDivDisabledWrapperOptionModalContainer();
		const divDisabledOptionModalContainer = this.appendDivDisabledOptionModalContainer();

		divDisabledWrapperOptionModalContainer.appendChild(divDisabledOptionModalContainer);

		return divDisabledWrapperOptionModalContainer;
	},
	printDivDisabledWrapperOptionModalContainer() {
		return objElement.createElement('DIV').setClassName('divDisabledWrapperOptionModalContainer').complete();
	},
	appendDivDisabledOptionModalContainer() {
		const divDisabledOptionModalContainer = this.printDivDisabledOptionModalContainer();
		const h2DisabledOptionText = this.printH2DisabledOptionText();
		const divHideDisabledWrapperOptionModalContainer = this.printDivHideDisabledWrapperOptionModalContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(h2DisabledOptionText, divHideDisabledWrapperOptionModalContainer);

		divDisabledOptionModalContainer.appendChild(fragment);

		return divDisabledOptionModalContainer;
	},
	printDivDisabledOptionModalContainer() {
		return objElement.createElement('DIV').setClassName('divDisabledOptionModalContainer').complete();
	},
	printH2DisabledOptionText() {
		return objElement.createElement('H2').setClassName('h2DisabledOptionText').complete();
	},
	printDivHideDisabledWrapperOptionModalContainer() {
		return objElement.createElement('DIV').setClassName('divHideDisabledWrapperOptionModalContainer').setAttribute('style', "background-image: url('./images/cancel.png')").complete();
	},
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
		const liWrapperContainer = this.printLiWrapperContainer();
		const liWrapperDisabledContainer = this.printLiWrapperDisabledContainer();
		const ulDefaultOption = this.appendUlDefaultOptionContainer();
		const ulAdditionalOption = this.appendUlAdditionalOptionContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(liWrapperContainer, liWrapperDisabledContainer, ulDefaultOption, ulAdditionalOption);

		ulOptionListContainer.appendChild(fragment);

		return ulOptionListContainer;
	},
	printUlOptionListContainer() {
		return objElement.createElement('UL').setClassName('ulOptionListContainer').complete();
	},
	printLiWrapperContainer() {
		return objElement.createElement('LI').setClassName('liWrapperContainer').complete();
	},
	printLiWrapperDisabledContainer() {
		return objElement.createElement('LI').setClassName('liWrapperDisabledContainer').complete();
	},
	appendUlDefaultOptionContainer() {
		const ulDefaultOptionContainer = this.printUlDefaultOption();
		const fragment = document.createDocumentFragment();

		Controller.defaultOptionInfo().forEach(option => fragment.appendChild(this.printLiDefaultOption(option)));

		ulDefaultOptionContainer.appendChild(fragment);

		return ulDefaultOptionContainer;
	},
	printUlDefaultOption() {
		return objElement.createElement('UL', 'Default Options').setClassName('ulDefaultOptionContainer').complete();
	},
	printLiDefaultOption(option) {
		const defaultOption = spacingString(option);

		return objElement.createElement('LI', defaultOption).setClassName(`li${option}Option`).complete();
	},
	appendUlAdditionalOptionContainer() {
		const ulAdditionalOption = this.printUlAdditionalOptionContainer();
		const fragment = document.createDocumentFragment();

		Controller.detailedOptionInfo().forEach(option => fragment.appendChild(this.printLiDetailedOption(option)));

		ulAdditionalOption.appendChild(fragment);

		return ulAdditionalOption;
	},
	printUlAdditionalOptionContainer() {
		return objElement.createElement('UL', 'Detailed Options').setClassName('ulAdditionalOptionContainer').complete();
	},
	printLiDetailedOption(option) {
		const detailedOption = spacingString(option);

		return objElement.createElement('Li', detailedOption).setClassName(`li${detailedOption}Option`).complete();
	},
	appendDivOptionCustomContainer() {
		const divOptionCustomContainer = this.printDivOptionCustomContainer();
		const divDefaultOptionContainer = this.appendDivDefaultOptionContainer();
		const divAdditionalOptionContainer = this.appendDivAdditionalOptionContainer();
		const divPriceOptionContainer = this.appendDivPriceOptionContainer();
		const divPriceContainer = this.appendDivPriceContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(divDefaultOptionContainer, divAdditionalOptionContainer, divPriceOptionContainer, divPriceContainer);

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
		const fragment = document.createDocumentFragment();

		Controller.sizeOptionsInfo().forEach(({ size, measurement }, index) => {
			switch (index) {
				case 0:
					fragment.appendChild(this.appendUlSizeListContainer(spacingString(size), `(${measurement} fl oz)`, 'coffeeCupWhite'));
					break;
				default:
					fragment.appendChild(this.appendUlSizeListContainer(spacingString(size), `(${measurement} fl oz)`, 'coffeeCup'));
					break;
			}
		});

		ulSizeListWrapperContainer.appendChild(fragment);

		return ulSizeListWrapperContainer;
	},
	printUlSizeListWrapperContainer() {
		return objElement.createElement('UL').setClassName('ulSizeListWrapperContainer').complete();
	},
	appendUlSizeListContainer(size, measurement, selectedCoffee) {
		const ulSizeListContainer = this.printUlSizeListContainer();
		const liCoffeeCup = this.printLiCoffeeCup(selectedCoffee);
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
	printLiCoffeeCup(selectedCoffee) {
		return objElement.createElement('Li').setClassName('liCoffeeCup').setAttribute('style', `background-image: url("./images/${selectedCoffee}.png")`).complete();
	},
	appendDivIceOptionContainer() {
		const divIceOptionContainer = this.printDivIceOptionContainer();
		const h4IceOption = this.printH4IceOption();
		const ulIceListContainer = this.appendUlIceListWrapperContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(h4IceOption, ulIceListContainer);

		divIceOptionContainer.appendChild(fragment);

		return divIceOptionContainer;
	},
	printDivIceOptionContainer() {
		return objElement.createElement('DIV').setClassName('divIceOptionContainer').complete();
	},
	printH4IceOption() {
		return objElement.createElement('H4', 'Ice Options').setClassName('h4IceOption').complete();
	},
	appendUlIceListWrapperContainer() {
		const ulIceListWrapperContainer = this.printUlIceListWrapperContainer();
		const liWrapperDisabledNoIceContainer = this.printLiWrapperDisabledNoIceContainer();
		const liWrapperDisabledIceContainer = this.printLiWrapperDisabledIceContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(liWrapperDisabledNoIceContainer, liWrapperDisabledIceContainer);

		Controller.iceOptionsInfo().forEach(ice => {
			switch (ice) {
				case 'noIce':
					fragment.appendChild(this.appendUlIceListContainer(spacingString(ice), 'iceCubeWhite'));
					break;
				default:
					fragment.appendChild(this.appendUlIceListContainer(spacingString(ice), 'iceCube'));
					break;
			}
		});
		ulIceListWrapperContainer.appendChild(fragment);

		return ulIceListWrapperContainer;
	},
	printUlIceListWrapperContainer() {
		return objElement.createElement('UL').setClassName('ulIceListWrapperContainer').complete();
	},
	printLiWrapperDisabledNoIceContainer() {
		return objElement.createElement('LI').setClassName('liWrapperDisabledNoIceContainer').complete();
	},
	printLiWrapperDisabledIceContainer() {
		return objElement.createElement('LI').setClassName('liWrapperDisabledIceContainer').complete();
	},
	appendUlIceListContainer(ice, selectedIce) {
		const ulIceListContainer = this.printUlIceListContainer();
		const liIceCube = this.printLiIceCube(selectedIce);
		const liIce = this.printLiIce(ice);
		const fragment = document.createDocumentFragment();

		fragment.append(liIceCube, liIce);

		ulIceListContainer.appendChild(fragment);

		return ulIceListContainer;
	},
	printUlIceListContainer() {
		return objElement.createElement('UL').setClassName('ulIceListContainer').complete();
	},
	printLiIce(ice) {
		return objElement.createElement('LI', ice).setClassName('liIce').complete();
	},
	printLiIceCube(selectedIce) {
		return objElement.createElement('Li').setClassName('liIceCube').setAttribute('style', `background-image: url("./images/${selectedIce}.png")`).complete();
	},
	appendDivAdditionalOptionContainer() {
		const divAdditionalOptionContainer = this.printDivAdditionalOptionContainer();
		const divEspressoOptionContainer = this.appendDivEspressoOptionContainer();
		const divSyrupOptionContainer = this.appendDivSyrupOptionContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(divEspressoOptionContainer, divSyrupOptionContainer);

		divAdditionalOptionContainer.appendChild(fragment);

		return divAdditionalOptionContainer;
	},
	printDivAdditionalOptionContainer() {
		return objElement.createElement('DIV').setClassName('divAdditionalOptionContainer').complete();
	},
	appendDivEspressoOptionContainer() {
		const divEspressoOptionContainer = this.printDivEspressoOptionContainer();
		const h4EspressoOption = this.printH4EspressoOption();
		const ulEspressoOptionContainer = this.appendUlEspressoOptionContainer();
		const ulEspressoShotContainer = this.appendUlEspressoShotContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(h4EspressoOption, ulEspressoOptionContainer, ulEspressoShotContainer);

		divEspressoOptionContainer.appendChild(fragment);

		return divEspressoOptionContainer;
	},
	printDivEspressoOptionContainer() {
		return objElement.createElement('DIV').setClassName('divEspressoOptionContainer').complete();
	},
	printH4EspressoOption() {
		return objElement.createElement('H4', 'Espresso Options').setClassName('h4EspressoOption').complete();
	},
	appendUlEspressoOptionContainer() {
		const ulEspressoOptionContainer = this.printUlEspressoOptionContainer();
		const fragment = document.createDocumentFragment();

		Controller.espressoRoastOptionsInfo().forEach(espressoRoast => void fragment.appendChild(this.printLiEspressoRoastOption(spacingString(espressoRoast))));

		ulEspressoOptionContainer.appendChild(fragment);

		return ulEspressoOptionContainer;
	},
	printUlEspressoOptionContainer() {
		return objElement.createElement('UL').setClassName('ulEspressoRoastOptionContainer').complete();
	},
	printLiEspressoRoastOption(espressoRoast) {
		return objElement.createElement('LI', espressoRoast).setClassName('liEspressoRoastOption').complete();
	},
	appendUlEspressoShotContainer() {
		const ulEspressoShotContainer = this.printUlEspressoShotContainer();
		const liEspressoShotButtonAddContainer = this.printLiEspressoShotCount();
		const liEspressoShotButtonMinusContainer = this.printLiEspressoShotCount();
		const liEspressoShotTextContainer = this.printLiEspressoShotCount();
		const buttonAddEspressoShot = this.printButtonCalcEspressoShot('+');
		const buttonMinusEspressoShot = this.printButtonCalcEspressoShot('-');
		const spanEspressoShotText = this.printSpanEspressoShotText();
		const spanEspressoShotCount = this.printSpanEspressoShotCount();
		const fragment = document.createDocumentFragment();

		liEspressoShotButtonAddContainer.appendChild(buttonAddEspressoShot);
		liEspressoShotButtonMinusContainer.appendChild(buttonMinusEspressoShot);
		liEspressoShotTextContainer.append(spanEspressoShotText, spanEspressoShotCount);

		fragment.append(liEspressoShotButtonMinusContainer, liEspressoShotTextContainer, liEspressoShotButtonAddContainer);

		ulEspressoShotContainer.appendChild(fragment);

		return ulEspressoShotContainer;
	},
	printUlEspressoShotContainer() {
		return objElement.createElement('UL').setClassName('ulEspressoShotContainer').complete();
	},
	printLiEspressoShotCount() {
		return objElement.createElement('LI').complete();
	},
	printButtonCalcEspressoShot(symbol) {
		return objElement.createElement('BUTTON', symbol).setClassName('buttonCalcEspressoShot').complete();
	},
	printSpanEspressoShotText() {
		return objElement.createElement('SPAN', 'Count: ').setClassName('spanEspressoShotText').complete();
	},
	printSpanEspressoShotCount() {
		return objElement.createElement('SPAN', '0').setClassName('spanEspressoShotCount').complete();
	},
	appendDivSyrupOptionContainer() {
		const divSyrupOptionContainer = this.printDivSyrupOptionContainer();
		const h4SyrupOption = this.printH4SyrupOption();
		const ulSyrupOptionContainer = this.appendUlSyrupOptionContainer();
		const ulSyrupContainer = this.appendUlSyrupContainer();
		const fragment = document.createDocumentFragment();

		fragment.append(h4SyrupOption, ulSyrupOptionContainer, ulSyrupContainer);

		divSyrupOptionContainer.appendChild(fragment);

		return divSyrupOptionContainer;
	},
	printDivSyrupOptionContainer() {
		return objElement.createElement('DIV').setClassName('divSyrupOptionContainer').complete();
	},
	printH4SyrupOption() {
		return objElement.createElement('H4', 'Syrup Options').setClassName('h4SyrupOption').complete();
	},
	appendUlSyrupOptionContainer() {
		const ulSyrupOptionContainer = this.printUlSyrupOptionContainer();
		const fragment = document.createDocumentFragment();

		Controller.syrupOptionsInfo().forEach(syrup => void fragment.appendChild(this.printLiSyrup(spacingString(syrup))));

		ulSyrupOptionContainer.appendChild(fragment);

		return ulSyrupOptionContainer;
	},
	printUlSyrupOptionContainer() {
		return objElement.createElement('UL').setClassName('ulSyrupOptionContainer').complete();
	},
	printLiSyrup(syrup) {
		return objElement.createElement('LI', syrup).setClassName('liSyrupOption').complete();
	},
	appendUlSyrupContainer() {
		const ulSyrupContainer = this.printUlSyrupContainer();
		const liSyrupButtonAddContainer = this.printLiSyrupCount();
		const liSyrupButtonMinusContainer = this.printLiSyrupCount();
		const liSyrupTextContainer = this.printLiSyrupCount();
		const buttonAddSyrup = this.printButtonCalcSyrup('+');
		const buttonMinusSyrup = this.printButtonCalcSyrup('-');
		const spanSyrupText = this.printSpanSyrupText();
		const spanSyrupCount = this.printSpanSyrupCount();
		const fragment = document.createDocumentFragment();

		liSyrupButtonAddContainer.appendChild(buttonAddSyrup);
		liSyrupButtonMinusContainer.appendChild(buttonMinusSyrup);
		liSyrupTextContainer.append(spanSyrupText, spanSyrupCount);

		fragment.append(liSyrupButtonMinusContainer, liSyrupTextContainer, liSyrupButtonAddContainer);

		ulSyrupContainer.appendChild(fragment);

		return ulSyrupContainer;
	},
	printUlSyrupContainer() {
		return objElement.createElement('UL').setClassName('ulSyrupContainer').complete();
	},
	printLiSyrupCount() {
		return objElement.createElement('LI').complete();
	},
	printButtonCalcSyrup(symbol) {
		return objElement.createElement('BUTTON', symbol).setClassName('buttonCalcSyrup').complete();
	},
	printSpanSyrupText() {
		return objElement.createElement('SPAN', 'Count: ').setClassName('spanSyrupText').complete();
	},
	printSpanSyrupCount() {
		return objElement.createElement('SPAN', '0').setClassName('spanSyrupCount').complete();
	},
	appendDivPriceOptionContainer() {
		const divPriceOptionContainer = this.printDivPriceOptionContainer();
		const spanOptionPriceText = this.printSpanOptionPriceText();
		const spanOptionPrice = this.printSpanOptionPrice();
		const fragment = document.createDocumentFragment();

		fragment.append(spanOptionPriceText, spanOptionPrice);

		divPriceOptionContainer.appendChild(fragment);

		return divPriceOptionContainer;
	},
	printDivPriceOptionContainer() {
		return objElement.createElement('DIV').setClassName('divPriceOptionContainer').complete();
	},
	printSpanOptionPriceText() {
		return objElement.createElement('SPAN', 'Additional Fee: ').setClassName('spanOptionPriceText').complete();
	},
	printSpanOptionPrice() {
		return objElement.createElement('SPAN', '0').setClassName('spanOptionPrice').complete();
	},
	appendDivPriceContainer() {
		const divPriceContainer = this.printDivPriceContainer();
		const spanPriceText = this.printSpanPriceText();
		const spanPrice = this.printSpanPrice();
		const fragment = document.createDocumentFragment();

		fragment.append(spanPriceText, spanPrice);

		divPriceContainer.appendChild(fragment);

		return divPriceContainer;
	},
	printDivPriceContainer() {
		return objElement.createElement('DIV').setClassName('divPriceContainer').complete();
	},
	printSpanPriceText() {
		return objElement.createElement('SPAN', 'Total Price: ').setClassName('spanPriceText').complete();
	},
	printSpanPrice() {
		return objElement.createElement('SPAN').setClassName('spanPrice').complete();
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
	printDivProductCategory() {
		return objElement.createElement('DIV').setClassName('divProductCategory').complete();
	},
	printH3ProductName() {
		return objElement.createElement('H3').setClassName('h3ProductName').complete();
	},
	printDivProductImageContainer() {
		return objElement.createElement('DIV').setClassName('divProductImageContainer').complete();
	},
	printDivProductImage() {
		return objElement.createElement('DIV').setClassName('divProductImage').complete();
	},
	appendDivOptionButtonContainer() {
		const divOptionButtonContainer = this.printDivOptionButtonContainer();
		const buttonAddToCart = this.printButtonAddToCart();
		const buttonCancelAddingToCart = this.printButtonCancelAddingToCart();
		const fragment = document.createDocumentFragment();

		fragment.append(buttonAddToCart, buttonCancelAddingToCart);

		divOptionButtonContainer.appendChild(fragment);

		return divOptionButtonContainer;
	},
	printDivOptionButtonContainer() {
		return objElement.createElement('DIV').setClassName('divOptionButtonContainer').complete();
	},
	printButtonAddToCart() {
		return objElement.createElement('BUTTON', 'Add To Cart').setClassName('buttonAddToCart').complete();
	},
	printButtonCancelAddingToCart() {
		return objElement.createElement('BUTTON', 'Cancel').setClassName('buttonCancelAddingToCart').complete();
	},

	// event callback methods
	onClickUlSelectProductItemContainer_Common() {
		this.setH3Name();
		this.setDivCategory();
		this.setDivImage();
		this.setSpanPrice();
		this.setSpanAdditionalFee();
		this.setUlSize();
		this.setUlIce();
		this.setLiEspressoRoast();
		this.setLiSyrup();
		this.setSpanEspressoShotCount();
		this.setSpanSyrupCount();
		this.toggleLiWrapperContainer();
		this.hideAdditionalOptionContainer();
		this.showDefaultOptionContainer();
		this.showSectionSelectOptionContainer();
	},
	onClickUlSelectProductItemContainer(productType) {
		this.onClickUlSelectProductItemContainer_Common();

		switch (productType) {
			case 'hotCoffee':
				this.accessDetailedOption();
				this.blockIceOption();
				this.accessNoIceOption();
				break;
			case 'normalCoffee':
				this.accessDetailedOption();
				this.accessIceOption();
				this.accessNoIceOption();
				break;
			case 'iceCoffee':
				this.accessDetailedOption();
				this.accessIceOption();
				this.blockNoIceOption();
				break;
			case 'hotBeverage':
				this.blockDetailedOption();
				this.blockIceOption();
				this.accessNoIceOption();
				break;
			case 'normalBeverage':
				this.blockDetailedOption();
				this.accessIceOption();
				this.accessNoIceOption();
				break;
			case 'iceBeverage':
				this.blockDetailedOption();
				this.accessIceOption();
				this.blockNoIceOption();
				break;
			case 'hotTea':
				this.blockDetailedOption();
				this.blockIceOption();
				this.accessNoIceOption();
				break;
			case 'normalTea':
				this.blockDetailedOption();
				this.accessIceOption();
				this.accessNoIceOption();
				break;
			case 'iceTea':
				this.blockDetailedOption();
				this.accessIceOption();
				this.blockNoIceOption();
				break;
		}
	},
	onClickUlOptionListContainer({ className }) {
		if (Controller.selectedProductInfo().productEspressoRoast === 'noEspresso') return; // modal
		switch (className) {
			case 'ulDefaultOptionContainer':
				this.toggleLiWrapperContainer();
				this.hideAdditionalOptionContainer();
				this.showDefaultOptionContainer();
				break;
			case 'ulAdditionalOptionContainer':
				this.hideDefaultOptionContainer();
				this.showAdditionalOptionContainer();
				this.toggleLiWrapperContainer(false);
				break;
		}
	},
	onClickLiWrapperDisabledContainer() {
		this.setH2DisabledOptionText("You can't access Detailed Options because the selected product is not a caffeine product.");
		this.showDivDisabledWrapperOptionModalContainer();
	},
	onClickLiWrapperDisabledNoIceContainer() {
		this.setH2DisabledOptionText('You cannot access the No Ice Option because you selected a product that comes with ice.');
		this.showDivDisabledWrapperOptionModalContainer();
	},
	onClickLiWrapperDisabledIceContainer() {
		this.setH2DisabledOptionText('You cannot access the Ice Options because you selected a hot product.');
		this.showDivDisabledWrapperOptionModalContainer();
	},
	onClickDivHideDisabledWrapperOptionModalContainer() {
		this.hideDivDisabledWrapperOptionModalContainer();
	},
	onClickUlSizeListContainer() {
		this.setUlSize();
		this.setSpanAdditionalFee();
		this.setSpanPrice();
	},
	onClickUlIceListContainer() {
		this.setUlIce();
	},
	onClickLiEspressoRoastOption() {
		this.setLiEspressoRoast();
	},
	onClickLiSyrupOption() {
		this.setLiSyrup();
	},
	onClickButtonCalcEspressoShot({ textContent }) {
		const selectedProductInfo = Controller.selectedProductInfo();

		switch (textContent) {
			case '+':
				if (Controller.confirmSelectedProductEspressoShotMax()) {
					Controller.setSelectedProductEspressoShot(selectedProductInfo.productEspressoShot + 1);
					Controller.setSelectedProductAdditionalFee();
					this.setSpanEspressoShotCount();
					this.setSpanPrice();
					this.setSpanAdditionalFee();
				}
				break;
			case '-':
				if (Controller.confirmSelectedProductEspressoShotMin()) {
					Controller.setSelectedProductEspressoShot(selectedProductInfo.productEspressoShot - 1);
					Controller.setSelectedProductAdditionalFee();
					this.setSpanEspressoShotCount();
					this.setSpanPrice();
					this.setSpanAdditionalFee();
				}
				break;
		}
	},
	onClickButtonCalcSyrup({ textContent }) {
		const selectedProductInfo = Controller.selectedProductInfo();

		switch (textContent) {
			case '+':
				if (Controller.confirmSelectedProductSyrupCountMax()) {
					Controller.setSelectedProductSyrupCount(selectedProductInfo.productSyrupCount + 1);
					Controller.setSelectedProductAdditionalFee();
					this.setSpanSyrupCount();
					this.setSpanPrice();
					this.setSpanAdditionalFee();
				}
				break;
			case '-':
				if (Controller.confirmSelectedProductSyrupCountMin()) {
					Controller.setSelectedProductSyrupCount(selectedProductInfo.productSyrupCount - 1);
					Controller.setSelectedProductAdditionalFee();
					this.setSpanSyrupCount();
					this.setSpanPrice();
					this.setSpanAdditionalFee();
				}
				break;
		}
	},
	onClickButtonAddToCart() {
		this.hideSectionSelectOptionContainer();
	},
	onClickButtonCancelAddingToCart() {
		this.hideSectionSelectOptionContainer();
	},

	// action methods
	showSectionSelectOptionContainer() {
		$('.sectionOptionContainer').style.display = 'flex';
		setTimeout(() => ($('.sectionOptionContainer').style.opacity = 1), 0);
	},
	showDivDisabledWrapperOptionModalContainer() {
		$('.divDisabledWrapperOptionModalContainer').style.display = 'flex';
		setTimeout(() => ($('.divDisabledWrapperOptionModalContainer').style.opacity = '1'), 0);
	},
	showDefaultOptionContainer() {
		$('.divDefaultOptionContainer').style.display = 'flex';
		setTimeout(() => ($('.divDefaultOptionContainer').style.opacity = 1), 0);
	},
	showAdditionalOptionContainer() {
		$('.divAdditionalOptionContainer').style.display = 'flex';
		setTimeout(() => ($('.divAdditionalOptionContainer').style.opacity = 1), 0);
	},
	hideSectionSelectOptionContainer() {
		$('.sectionOptionContainer').style.opacity = 0;
		setTimeout(() => ($('.sectionOptionContainer').style.display = 'none'), 300);
	},
	hideDivDisabledWrapperOptionModalContainer() {
		$('.divDisabledWrapperOptionModalContainer').style.opacity = '0';
		setTimeout(() => ($('.divDisabledWrapperOptionModalContainer').style.display = 'none'), 300);
	},
	hideDefaultOptionContainer() {
		$('.divDefaultOptionContainer').style.opacity = 0;
		setTimeout(() => ($('.divDefaultOptionContainer').style.display = 'none'), 300);
	},
	hideAdditionalOptionContainer() {
		$('.divAdditionalOptionContainer').style.opacity = 0;
		setTimeout(() => ($('.divAdditionalOptionContainer').style.display = 'none'), 300);
	},
	accessDetailedOption() {
		$('.liWrapperDisabledContainer').style.display = 'none';
	},
	accessNoIceOption() {
		$('.liWrapperDisabledNoIceContainer').style.display = 'none';
	},
	accessIceOption() {
		$('.liWrapperDisabledIceContainer').style.display = 'none';
	},
	blockDetailedOption() {
		$('.liWrapperDisabledContainer').style.display = 'inline-block';
	},
	blockNoIceOption() {
		$('.liWrapperDisabledNoIceContainer').style.display = 'block';
	},
	blockIceOption() {
		$('.liWrapperDisabledIceContainer').style.display = 'block';
	},
	toggleLiWrapperContainer(handler = true) {
		if (handler) $('.ulOptionListContainer .liWrapperContainer').style.top = '0%';
		else $('.ulOptionListContainer .liWrapperContainer').style.top = '54%';
	},

	// customization methods
	setH3Name() {
		$('.h3ProductName').textContent = spacingString(Controller.selectedProductInfo().productName);
	},
	setDivCategory() {
		$('.divProductCategory').textContent = 'Menu Category: ' + spacingString(Controller.selectedProductInfo().productCategory);
	},
	setDivImage() {
		$('.divProductImage').style.backgroundImage = `url('${Controller.selectedProductInfo().productImage}')`;
	},
	setSpanPrice() {
		$('.spanPrice').textContent = addComma(Controller.selectedProductInfo().productPrice + Controller.selectedProductInfo().productAdditionalFee);
	},
	setSpanAdditionalFee() {
		$('.spanOptionPrice').textContent = addComma(Controller.selectedProductInfo().productAdditionalFee);
	},
	setUlSize() {
		const size = spacingString(Controller.selectedProductInfo().productSize);

		$$('.ulSizeListContainer').forEach(ul => {
			switch (ul.querySelector('.liSize').textContent) {
				case size:
					ul.style.backgroundColor = '#16584e';
					ul.querySelector('.liCoffeeCup').style.backgroundImage = "url('./images/coffeeCupWhite.png')";
					ul.querySelector('.liSize').style.color = '#fafafa';
					ul.querySelector('.liMeasurement').style.color = '#fafafa';
					break;
				default:
					ul.style.backgroundColor = 'transparent';
					ul.querySelector('.liCoffeeCup').style.backgroundImage = "url('./images/coffeeCup.png')";
					ul.querySelector('.liSize').style.color = '#0a0a0a';
					ul.querySelector('.liMeasurement').style.color = '#0a0a0a';
					break;
			}
		});
	},
	setUlIce() {
		const ice = spacingString(Controller.selectedProductInfo().productIce);

		$$('.ulIceListContainer').forEach(ul => {
			switch (ul.querySelector('.liIce').textContent) {
				case ice:
					ul.style.backgroundColor = '#16584e';
					ul.querySelector('.liIceCube').style.backgroundImage = "url('./images/iceCubeWhite.png')";
					ul.querySelector('.liIce').style.color = '#fafafa';
					break;
				default:
					ul.style.backgroundColor = 'transparent';
					ul.querySelector('.liIceCube').style.backgroundImage = "url('./images/iceCube.png')";
					ul.querySelector('.liIce').style.color = '#0a0a0a';
					break;
			}
		});
	},
	setLiEspressoRoast() {
		const espressoRoast = spacingString(Controller.selectedProductInfo().productEspressoRoast);

		$$('.liEspressoRoastOption').forEach(li => {
			switch (li.textContent) {
				case espressoRoast:
					li.style.backgroundColor = '#16584e';
					li.style.color = '#fafafa';
					break;
				default:
					li.style.backgroundColor = 'transparent';
					li.style.color = '#0a0a0a';
					break;
			}
		});
	},
	setLiSyrup() {
		const syrup = spacingString(Controller.selectedProductInfo().productSyrup);

		$$('.ulSyrupOptionContainer .liSyrupOption').forEach(li => {
			switch (li.textContent) {
				case syrup:
					li.style.backgroundColor = '#16584e';
					li.style.color = '#fafafa';
					break;
				default:
					li.style.backgroundColor = 'transparent';
					li.style.color = '#0a0a0a';
					break;
			}
		});
	},
	setSpanEspressoShotCount() {
		$('.spanEspressoShotCount').textContent = Controller.selectedProductInfo().productEspressoShot;
	},
	setSpanSyrupCount() {
		$('.spanSyrupCount').textContent = Controller.selectedProductInfo().productSyrupCount;
	},
	setH2DisabledOptionText(warningText) {
		$('.h2DisabledOptionText').textContent = warningText;
	},
});
