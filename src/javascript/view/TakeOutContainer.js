// utils
import { $, objElement } from '../utils/ElementTool.js';

export default Object.create({
	// init method
	init() {
		this.hideSectionTakeOutContainer();
	},

	// setup method
	setup() {
		return this.printSectionTakeOutContainer();
	},

	// print methods
	printSectionTakeOutContainer() {
		const sectionTakeOutContainer = objElement.createElement('section').setClassName('sectionTakeOutContainer').complete();
		sectionTakeOutContainer.append(this.printDivWrapperTakeOutContainer(), this.printDivWrapperTakeOutButtonContainer());

		return sectionTakeOutContainer;
	},
	printDivWrapperTakeOutContainer() {
		return objElement.createElement('DIV').setClassName('divWrapperTakeOutContainer').complete();
	},
	printDivWrapperTakeOutButtonContainer() {
		const divWrapperTakeOutButtonContainer = objElement.createElement('DIV').setClassName('divWrapperTakeOutButtonContainer').complete();
		divWrapperTakeOutButtonContainer.append(this.printButtonTakeOut('Take Out', 'buttonTakeOut'), this.printButtonTakeOut('In Store', 'buttonStore'));

		return divWrapperTakeOutButtonContainer;
	},
	printButtonTakeOut(content, className) {
		return objElement.createElement('BUTTON', content).setClassName(className).complete();
	},

	// event callback methods
	onClickSectionSlideContainer() {
		this.showSectionTakeOutContainer();
	},
	onClickButtonTakeOut() {
		this.hideSectionTakeOutContainer();
	},
	onClickButtonStore() {
		this.hideSectionTakeOutContainer();
	},

	// action methods
	showSectionTakeOutContainer() {
		$('.sectionTakeOutContainer').style.display = 'flex';
		setTimeout(() => ($('.sectionTakeOutContainer').style.opacity = 1), 0);
	},
	hideSectionTakeOutContainer() {
		$('.sectionTakeOutContainer').style.opacity = 0;
		setTimeout(() => ($('.sectionTakeOutContainer').style.display = 'none'), 300);
	},
});
