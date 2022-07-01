import { $, objElement } from '../utils/ElementTool.js';

export default Object.create({
	init() {
		this.showSectionIntroContainer();
	},
	setup() {
		const fragment = document.createDocumentFragment();
		fragment.appendChild(this.printSectionIntroContainer());

		return fragment;
	},
	printSectionIntroContainer() {
		const sectionIntroContainer = objElement.createElement('SECTION').setClassName('sectionIntroContainer').complete();
		const fragment = document.createDocumentFragment();

		fragment.append(this.printH1Title(), this.printH2Greeting());
		sectionIntroContainer.appendChild(fragment);

		return sectionIntroContainer;
	},
	printH1Title() {
		return objElement.createElement('H1', 'STARBUCKS').setClassName('h1IntroTitle').complete();
	},
	printH2Greeting() {
		return objElement.createElement('H2', 'This website was made for portfolio.').setClassName('h2IntroGreeting').complete();
	},
	showSectionIntroContainer() {
		$('.sectionIntroContainer').style.display = 'flex';
		setTimeout(() => {
			$('.sectionIntroContainer').style.opacity = 1;
		}, 0);
	},
	hideSectionIntroContainer() {
		$('.sectionIntroContainer').style.opacity = 0;
		setTimeout(() => {
			$('.sectionIntroContainer').style.display = 'none';
		}, 300);
	},
});
