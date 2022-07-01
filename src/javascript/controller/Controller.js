import { $ } from '../utils/ElementTool.js';
import IntroContainer from '../view/IntroContainer.js';

export default {
	init() {},
	setup() {
		const fragment = document.createDocumentFragment();
		fragment.append(IntroContainer.setup());

		return fragment;
	},
	clickSectionIntroContainer() {
		$('.sectionIntroContainer')?.addEventListener('click', () => void IntroContainer.hideSectionIntroContainer());
	},
	main() {
		this.clickSectionIntroContainer();
	},
};
