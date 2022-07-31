// utils
import { $, objElement } from '../utils/ElementTool.js';

export default Object.create({
	// init method
	init() {
		this.showSectionIntroContainer();
	},

	// setup method
	setup() {
		const sectionIntroContainer = this.printSectionIntroContainer();
		sectionIntroContainer.append(this.printH1Title(), this.printH2Greeting());

		return sectionIntroContainer;
	},

	// print methods
	printH1Title() {
		return objElement.createElement('H1', 'STARBUCKS').setClassName('h1IntroTitle').complete();
	},
	printH2Greeting() {
		return objElement.createElement('H2', "This website was solely created for the purposes of a student's portfolio.").setClassName('h2IntroGreeting').complete();
	},
	printSectionIntroContainer() {
		return objElement.createElement('SECTION').setClassName('sectionIntroContainer').complete();
	},

	// event callback methods
	onClickSectionIntroContainer() {
		this.hideSectionIntroContainer();
	},

	// action methods
	showSectionIntroContainer() {
		$('.sectionIntroContainer').style.display = 'flex';
		setTimeout(() => ($('.sectionIntroContainer').style.opacity = 1), 0);
	},
	hideSectionIntroContainer() {
		$('.sectionIntroContainer').style.opacity = 0;
		setTimeout(() => ($('.sectionIntroContainer').style.display = 'none'), 300);
	},
});
