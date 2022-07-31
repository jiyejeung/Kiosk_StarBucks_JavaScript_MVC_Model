import { $, objElement } from '../utils/ElementTool.js';

export default Object.create({
	init() {
		this.hideSectionTakeOutContainer();
	},
	setup() {
		return this.printSectionTakeOutContainer();
	},
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
		divWrapperTakeOutButtonContainer.append(this.printButtonTakeOut('Take Out', 'buttonTakeOut'), this.printButtonTakeOut('Store', 'buttonStore'));

		return divWrapperTakeOutButtonContainer;
	},
	printButtonTakeOut(content, className) {
		return objElement.createElement('BUTTON', content).setClassName(className).complete();
	},
	showSectionTakeOutContainer() {
		$('.sectionTakeOutContainer').style.display = 'flex';
		setTimeout(() => ($('.sectionTakeOutContainer').style.opacity = 1), 0);
	},
	hideSectionTakeOutContainer() {
		$('.sectionTakeOutContainer').style.opacity = 0;
		setTimeout(() => ($('.sectionTakeOutContainer').style.display = 'none'), 300);
	},
	onClickSectionSlideContainer() {
		this.showSectionTakeOutContainer();
	},
	onClickButtonTakeOut() {
		this.hideSectionTakeOutContainer();
	},
	onClickButtonStore() {
		this.hideSectionTakeOutContainer();
	},
});
