import { $ } from '../utils/ElementTool.js';
import IntroContainer from '../view/IntroContainer.js';
import SlideContainer from '../view/SlideContainer.js';

export default {
	init() {},
	setup() {
		const fragment = document.createDocumentFragment();
		fragment.append(IntroContainer.setup(), SlideContainer.setup());

		return fragment;
	},
	clickSectionIntroContainer() {
		$('.sectionIntroContainer')?.addEventListener('click', () => void (IntroContainer.hideSectionIntroContainer(), SlideContainer.showSectionContainer()));
	},
	clickSectionSlideContainer() {
		$('.sectionSlideContainer')?.addEventListener('click', () => void SlideContainer.hideSectionContainer());
	},
	main() {
		this.clickSectionIntroContainer();
		this.clickSectionSlideContainer();
	},
};
