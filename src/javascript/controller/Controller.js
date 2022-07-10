import { $, $$ } from '../utils/ElementTool.js';
import IntroContainer from '../view/IntroContainer.js';
import SlideContainer from '../view/SlideContainer.js';
import TakeOutContainer from '../view/TakeOutContainer.js';
import TakeOutInfo from '../model/TakeOutInfo.js';
import SlideImageInfo from '../model/SlideImageInfo.js';
import AllMenuInfo from '../model/AllMenuInfo.js';
import UserInfo from '../model/UserInfo.js';
import SelectMenuContainer from '../view/SelectMenuContainer.js';
import CurrentUserInfo from '../model/CurrentUserInfo.js';

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
	/* in SectionIntroContainer */
	clickSectionIntroContainer() {
		$('.sectionIntroContainer')?.addEventListener('click', () => void (IntroContainer.hideSectionIntroContainer(), SlideContainer.showSectionContainer()));
	},
	/* in SectionSlideContainer */
	clickSectionSlideContainer() {
		$('.sectionSlideContainer')?.addEventListener('click', () => void (SlideContainer.hideSectionContainer(), TakeOutContainer.showSectionTakeOutContainer()));
	},
	/* in SectionTakeOutContainer */
	updateTakeOutValue({ currentTarget }) {
		TakeOutInfo.takeOut = currentTarget.textContent;
	},
	clickButtonTakeOut() {
		$('.buttonTakeOut')?.addEventListener('click', e => void (TakeOutContainer.hideSectionTakeOutContainer(), this.updateTakeOutValue(e), SelectMenuContainer.showSectionSelectMenuContainer()));
	},
	clickButtonStore() {
		$('.buttonStore')?.addEventListener('click', e => void (TakeOutContainer.hideSectionTakeOutContainer(), this.updateTakeOutValue(e), SelectMenuContainer.showSectionSelectMenuContainer()));
	},
	/* in SectionSelectMenuContainer */
	clickLiSelectMenuCategoryItem() {
		$$('.liSelectMenuCategoryItem')?.forEach(
			(li, index) =>
				void li?.addEventListener(
					'click',
					({ target }) =>
						void (SelectMenuContainer.changeBackgroundColorLiSelectMenuCategoryItem(target), SelectMenuContainer.hideUlSelectMenuListContainer(index), SelectMenuContainer.showUlSelectMenuListContainer(index))
				)
		);
	},
	mouseoverLiSelectMenuCategoryItem() {
		$$('.liSelectMenuCategoryItem')?.forEach(
			li => void li?.addEventListener('mouseover', ({ target }) => void (getComputedStyle(target).backgroundColor === 'rgb(22, 88, 78)' && (target.style.backgroundColor = '#193c35')))
		);
	},
	mouseoutLiSelectMenuCategoryItem() {
		$$('.liSelectMenuCategoryItem')?.forEach(li => void li?.addEventListener('mouseout', ({ target }) => void (getComputedStyle(target).backgroundColor !== 'rgb(25, 60, 54)' && (li.style.backgroundColor = '#16584e'))));
	},
	clickUlSelectMenuItemContainer() {
		$$('.ulSelectMenuItemContainer')?.forEach(ul => void ul?.addEventListener('click', ({ currentTarget }) => void SelectMenuContainer.hideSectionSelectMenuContainer()));
	},
	clickButtonCancel() {
		$('.buttonCancel')?.addEventListener('click', () => void this.init());
	},
	clickH1NavKioskTitle() {
		$$('.h1NavKioskTitle')?.forEach(h1 => h1?.addEventListener('click', () => void this.init()));
	},
	click() {},
	click() {},
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
	getCurrentUserInfo() {
		return CurrentUserInfo;
	},
	main() {
		this.clickSectionIntroContainer();
		this.clickSectionSlideContainer();
		this.clickButtonTakeOut();
		this.clickButtonStore();
		this.clickLiSelectMenuCategoryItem();
		this.mouseoverLiSelectMenuCategoryItem();
		this.mouseoutLiSelectMenuCategoryItem();
		this.clickUlSelectMenuItemContainer();
	},
};
