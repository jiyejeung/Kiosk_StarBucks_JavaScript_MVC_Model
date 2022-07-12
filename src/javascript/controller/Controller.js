import { $, $$ } from '../utils/ElementTool.js';
import IntroContainer from '../view/IntroContainer.js';
import SlideContainer from '../view/SlideContainer.js';
import TakeOutContainer from '../view/TakeOutContainer.js';
import SlideImageInfo from '../model/SlideImageInfo.js';
import AllProductsInfo from '../model/AllProductsInfo.js';
import UserInfo from '../model/UserInfo.js';
import SelectProductContainer from '../view/SelectProductContainer.js';
import SelectOptionContainer from '../view/SelectOptionContainer.js';
import AllOptionsInfo from '../model/AllOptionsInfo.js';

export default {
	init() {},
	async setup() {
		const fragment = document.createDocumentFragment();

		await SlideImageInfo.getImageUrl()
			.then(() => void fragment.append(IntroContainer.setup(), SlideContainer.setup(), TakeOutContainer.setup()))
			.then(() => AllProductsInfo.getAllProducts())
			.then(() => fragment.append(SelectProductContainer.setup(), SelectOptionContainer.setup()));

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
		UserInfo.userInfo.takeOut = currentTarget.textContent;
	},
	clickButtonTakeOut() {
		$('.buttonTakeOut')?.addEventListener('click', e => void (TakeOutContainer.hideSectionTakeOutContainer(), this.updateTakeOutValue(e), SelectProductContainer.showSectionSelectProductContainer()));
	},
	clickButtonStore() {
		$('.buttonStore')?.addEventListener('click', e => void (TakeOutContainer.hideSectionTakeOutContainer(), this.updateTakeOutValue(e), SelectProductContainer.showSectionSelectProductContainer()));
	},
	/* in SectionSelectProductContainer */
	clickLiSelectProductCategoryItem() {
		$$('.liSelectProductCategoryItem')?.forEach(
			(li, index) =>
				void li?.addEventListener(
					'click',
					({ target }) =>
						void (SelectProductContainer.changeBackgroundColorLiSelectProductCategoryItem(target),
						SelectProductContainer.hideUlSelectProductListContainer(index),
						SelectProductContainer.showUlSelectProductListContainer(index))
				)
		);
	},
	mouseoverLiSelectProductCategoryItem() {
		$$('.liSelectProductCategoryItem')?.forEach(
			li => void li?.addEventListener('mouseover', ({ target }) => void (getComputedStyle(target).backgroundColor === 'rgb(22, 88, 78)' && (target.style.backgroundColor = '#193c35')))
		);
	},
	mouseoutLiSelectProductCategoryItem() {
		$$('.liSelectProductCategoryItem')?.forEach(
			li => void li?.addEventListener('mouseout', ({ target }) => void (getComputedStyle(target).backgroundColor !== 'rgb(25, 60, 54)' && (li.style.backgroundColor = '#16584e')))
		);
	},
	clickUlSelectProductItemContainer() {
		$$('.ulSelectProductItemContainer')?.forEach(
			ul =>
				void ul?.addEventListener(
					'click',
					({ currentTarget }) => void (SelectProductContainer.hideSectionSelectProductContainer(), UserInfo.setSelectedProduct(currentTarget.querySelector('.liSelectProductNameItem').textContent))
				)
		);
	},
	clickButtonCancel() {
		$('.buttonCancel')?.addEventListener('click', () => void this.init());
	},
	clickH1NavKioskTitle() {
		$$('.h1NavKioskTitle')?.forEach(h1 => h1?.addEventListener('click', () => void this.init()));
	},
	click() {},
	click() {},

	/* Start SlideImageInfo Data */
	slideImageInfo() {
		return SlideImageInfo.imageUrl;
	},

	/* Start AllProductsInfo Data */
	allProductsInfo() {
		return AllProductsInfo.allProducts;
	},
	allProductCategoriesInfo() {
		return AllProductsInfo.allProductCategories;
	},

	/* Start AllOptionsInfo Data */
	allOptions(){
		return Object.keys(AllOptionsInfo)
	},
	espressoShotInfo() {
		return AllOptionsInfo.espressoShotOptions;
	},
	espressoRoastOptionsInfo() {
		return AllOptionsInfo.espressoRoastOptions;
	},
	sizeOptionsInfo() {
		return AllOptionsInfo.sizeOptions;
	},
	syrupOptionsInfo() {
		return AllOptionsInfo.syrupOptions;
	},
	iceOptionsInfo() {
		return AllOptionsInfo.iceOptions;
	},

	/* Start UserInfo Data */
	getUserInfo() {
		return UserInfo;
	},
	main() {
		this.clickSectionIntroContainer();
		this.clickSectionSlideContainer();
		this.clickButtonTakeOut();
		this.clickButtonStore();
		this.clickLiSelectProductCategoryItem();
		this.mouseoverLiSelectProductCategoryItem();
		this.mouseoutLiSelectProductCategoryItem();
		this.clickUlSelectProductItemContainer();
	},
};
