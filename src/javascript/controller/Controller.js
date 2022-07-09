import { $ } from '../utils/ElementTool.js';
import IntroContainer from '../view/IntroContainer.js';
import SlideContainer from '../view/SlideContainer.js';
import TakeOutContainer from '../view/TakeOutContainer.js';
import TakeOutInfo from '../model/TakeOutInfo.js';
import SlideImageInfo from '../model/SlideImageInfo.js';
import AllMenuInfo from '../model/AllMenuInfo.js';
import UserInfo from '../model/UserInfo.js';
import SelectMenuContainer from '../view/SelectMenuContainer.js';

export default {
	init() {},
	async setup() {
		const fragment = document.createDocumentFragment();

		await SlideImageInfo.getImageUrl()
			.then(() => void fragment.append(IntroContainer.setup(), SlideContainer.setup(), TakeOutContainer.setup()))
			.then(() => AllMenuInfo.getAllMenu())
			.then(() => fragment);

		await AllMenuInfo.getAllMenu().then(fragment.append(SelectMenuContainer.setup()));

		return fragment;
	},
	clickSectionIntroContainer() {
		$('.sectionIntroContainer')?.addEventListener('click', () => void (IntroContainer.hideSectionIntroContainer(), SlideContainer.showSectionContainer()));
	},
	clickSectionSlideContainer() {
		$('.sectionSlideContainer')?.addEventListener('click', () => void (SlideContainer.hideSectionContainer(), TakeOutContainer.showSectionTakeOutContainer()));
	},
	updateTakeOutValue({ currentTarget }) {
		TakeOutInfo.takeOut = currentTarget.textContent;
	},
	clickButtonTakeOut() {
		$('.buttonTakeOut')?.addEventListener('click', e => void (TakeOutContainer.hideSectionTakeOutContainer(), this.updateTakeOutValue(e), SelectMenuContainer.showSelectMenuContainer()));
	},
	clickButtonStore() {
		$('.buttonStore')?.addEventListener('click', e => void (TakeOutContainer.hideSectionTakeOutContainer(), this.updateTakeOutValue(e), SelectMenuContainer.showSelectMenuContainer()));
	},
	getSlideImageInfo() {
		return SlideImageInfo;
	},
	getTakeOutInfo() {
		return TakeOutInfo;
	},
	getAllMenuInfo() {
		return AllMenuInfo;
	},
	getUserInfo() {
		return UserInfo;
	},
	main() {
		this.clickSectionIntroContainer();
		this.clickSectionSlideContainer();
		this.clickButtonTakeOut();
		this.clickButtonStore();
	},
};
