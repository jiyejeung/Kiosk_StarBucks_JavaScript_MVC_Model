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
import NavKioskContainer from '../components/NavKioskContainer.js';
import FooterKioskContainer from '../components/FooterKioskContainer.js';

export default {
	init() {},
	async setup() {
		const fragment = document.createDocumentFragment();

		await SlideImageInfo.getImageUrl()
			.then(() => fragment.append(NavKioskContainer.setup(), IntroContainer.setup(), SlideContainer.setup(), TakeOutContainer.setup(), FooterKioskContainer.setup()))
			.then(() => AllProductsInfo.getAllProducts())
			.then(() => fragment.append(SelectProductContainer.setup(), SelectOptionContainer.setup()));

		return fragment;
	},
	/* in App */
	changeBackgroundWhite() {
		$('#app').style.backgroundColor = '#fafafa';
	},
	changeBackgroundGreen() {
		$('#app').style.backgroundColor = '#172d29';
	},
	/* in NavKioskContainer */
	clickH1NavKioskTitle() {
		$$('.h1NavKioskTitle')?.forEach(h1 => h1?.addEventListener('click', () => void this.init()));
	},
	/* in SectionIntroContainer */
	clickSectionIntroContainer() {
		$('.sectionIntroContainer')?.addEventListener('click', () => {
			IntroContainer.hideSectionIntroContainer();
			SlideContainer.showSectionContainer();
		});
	},
	/* in SectionSlideContainer */
	clickSectionSlideContainer() {
		$('.sectionSlideContainer')?.addEventListener('click', () => {
			SlideContainer.hideSectionContainer();
			TakeOutContainer.showSectionTakeOutContainer();
		});
	},
	/* in SectionTakeOutContainer */
	updateTakeOutValue({ currentTarget }) {
		UserInfo.userInfo.takeOut = currentTarget.textContent;
	},
	clickButtonTakeOut() {
		$('.buttonTakeOut')?.addEventListener('click', e => {
			this.updateTakeOutValue(e);
			this.changeBackgroundWhite();
			TakeOutContainer.hideSectionTakeOutContainer();
			SelectProductContainer.showSectionSelectProductContainer();
			NavKioskContainer.showNavKioskContainer();
			FooterKioskContainer.showFooterKioskContainer();
		});
	},
	clickButtonStore() {
		$('.buttonStore')?.addEventListener('click', e => {
			this.updateTakeOutValue(e);
			this.changeBackgroundWhite();
			TakeOutContainer.hideSectionTakeOutContainer();
			SelectProductContainer.showSectionSelectProductContainer();
			NavKioskContainer.showNavKioskContainer();
			FooterKioskContainer.showFooterKioskContainer();
		});
	},
	/* in SectionSelectProductContainer */
	clickLiSelectProductCategoryItem() {
		$$('.liSelectProductCategoryItem')?.forEach((li, index) =>
			li?.addEventListener('click', ({ target }) => {
				SelectProductContainer.changeBackgroundColorLiSelectProductCategoryItem(target);
				SelectProductContainer.hideUlSelectProductListContainer(index);
				SelectProductContainer.showUlSelectProductListContainer(index);
			})
		);
	},
	mouseoverLiSelectProductCategoryItem() {
		$$('.liSelectProductCategoryItem')?.forEach(li =>
			li?.addEventListener('mouseover', ({ target }) => {
				getComputedStyle(target).backgroundColor === 'rgb(22, 88, 78)' && (target.style.backgroundColor = '#193c35');
			})
		);
	},
	mouseoutLiSelectProductCategoryItem() {
		$$('.liSelectProductCategoryItem')?.forEach(li =>
			li?.addEventListener('mouseout', ({ target }) => {
				getComputedStyle(target).backgroundColor !== 'rgb(25, 60, 54)' && (li.style.backgroundColor = '#16584e');
			})
		);
	},
	clickUlSelectProductItemContainer() {
		$$('.ulSelectProductItemContainer')?.forEach(ul =>
			ul?.addEventListener('click', ({ currentTarget }) => {
				UserInfo.initSelectedProduct(currentTarget.querySelector('.liSelectProductNameItem').textContent);
				SelectProductContainer.hideSectionSelectProductContainer();
				SelectOptionContainer.showSectionSelectOptionContainer();
				SelectOptionContainer.onClickUlSelectProductItemContainer();
				
			})
		);
	},
	clickButtonCancel() {
		$('.buttonCancel')?.addEventListener('click', () => void this.init());
	},

	/* in SectionSelectOptionContainer */
	clickUlOptionListContainer() {
		$$('.ulOptionListContainer ul').forEach(ul => ul?.addEventListener('click', ({ currentTarget }) => SelectOptionContainer.onClickUlOptionListContainer(currentTarget)));
	},
	clickLiWrapperDisabledContainer() {
		$('.liWrapperDisabledContainer')?.addEventListener('click', () => SelectOptionContainer.showDivDisabledWrapperOptionModalContainer());
	},
	clickDivHideDisabledWrapperOptionModalContainer() {
		$('.divHideDisabledWrapperOptionModalContainer')?.addEventListener('click', () => SelectOptionContainer.hideDivDisabledWrapperOptionModalContainer());
	},
	clickUlSizeListContainer() {
		$$('.ulSizeListContainer').forEach(ul => ul?.addEventListener('click', ({ currentTarget }) => SelectOptionContainer.onClickUlSizeListContainer(currentTarget)));
		//
	},
	clickUlIceListContainer() {
		$$('.ulIceListContainer').forEach(ul => ul?.addEventListener('click', ({ currentTarget }) => SelectOptionContainer.onClickUlIceListContainer(currentTarget)));
	},
	clickLiEspressoRoastOption() {
		$$('.liEspressoRoastOption').forEach(li => li?.addEventListener('click', ({ target }) => SelectOptionContainer.onClickLiEspressoRoastOption(target)));
	},
	clickLiSyrupOption() {
		$$('.ulSyrupOptionContainer .liSyrupOption').forEach(li => li?.addEventListener('click', ({ target }) => SelectOptionContainer.onClickLiSyrupOption(target)));
	},
	clickButtonCalcEspressoShot() {
		$$('.buttonCalcEspressoShot').forEach(button => button?.addEventListener('click', ({ currentTarget }) => SelectOptionContainer.onClickButtonCalcEspressoShot(currentTarget)));
	},
	clickButtonCalcSyrup() {
		$$('.buttonCalcSyrup').forEach(button => button?.addEventListener('click', ({ currentTarget }) => SelectOptionContainer.onClickButtonCalcSyrup(currentTarget)));
	},
	clickButtonAddToCart() {
		$('.buttonAddToCart').addEventListener('click', () => {
			SelectOptionContainer.hideSectionSelectOptionContainer();
			SelectProductContainer.showSectionSelectProductContainer();
		});
	},
	clickButtonCancelAddingToCart() {
		$('.buttonCancelAddingToCart').addEventListener('click', () => {
			SelectOptionContainer.hideSectionSelectOptionContainer();
			SelectProductContainer.showSectionSelectProductContainer();
		});
	},

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
	allOptions() {
		return Object.keys(AllOptionsInfo);
	},
	defaultOptionInfo() {
		return AllOptionsInfo.defaultOptions;
	},
	detailedOptionInfo() {
		return AllOptionsInfo.detailedOptions;
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
	optionPriceInfo() {
		return AllOptionsInfo.optionPrice;
	},

	/* Start UserInfo Data */
	userInfo() {
		return UserInfo.userInfo;
	},
	selectedProductInfo() {
		return UserInfo.selectedProduct;
	},
	setSelectedProductCount(productCountValue) {
		UserInfo.setSelectedProductCount(productCountValue);
	},
	setSelectedProductPrice(productPriceValue) {
		UserInfo.setSelectedProductPrice(productPriceValue);
	},
	setSelectedProductAdditionalFee(productAdditionalFee) {
		UserInfo.setSelectedProductAdditionalFee(productAdditionalFee);
	},
	setSelectedProductSize(productSizeValue) {
		UserInfo.setSelectedProductSize(productSizeValue);
	},
	setSelectedProductEspressoShot(productEspressoShot) {
		UserInfo.setSelectedProductEspressoShot(productEspressoShot);
	},
	setSelectedProductEspressoRoast(productEspressoRoastValue) {
		UserInfo.setSelectedProductEspressoRoast(productEspressoRoastValue);
	},
	setSelectedProductSyrup(productSyrup) {
		UserInfo.setSelectedProductSyrup(productSyrup);
	},
	setSelectedProductSyrupCount(productSyrupValue) {
		UserInfo.setSelectedProductSyrupCount(productSyrupValue);
	},
	setSelectedProductIce(productIceValue) {
		UserInfo.setSelectedProductIce(productIceValue);
	},
	confirmSelectedProductNotEspresso() {
		return UserInfo.confirmSelectedProductNotEspresso();
	},
	confirmSelectedProductCountMax() {
		return UserInfo.confirmSelectedProductCountMax();
	},
	confirmSelectedProductCountMin() {
		return UserInfo.confirmSelectedProductCountMin();
	},
	confirmSelectedProductEspressoShotMax() {
		return UserInfo.confirmSelectedProductEspressoShotMax();
	},
	confirmSelectedProductEspressoShotMin() {
		return UserInfo.confirmSelectedProductEspressoShotMin();
	},
	confirmSelectedProductSyrupCountMax() {
		return UserInfo.confirmSelectedProductSyrupCountMax();
	},
	confirmSelectedProductSyrupCountMin() {
		return UserInfo.confirmSelectedProductSyrupCountMin();
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
		this.clickUlOptionListContainer();
		this.clickLiWrapperDisabledContainer();
		this.clickDivHideDisabledWrapperOptionModalContainer();
		this.clickUlSizeListContainer();
		this.clickUlIceListContainer();
		this.clickLiEspressoRoastOption();
		this.clickLiSyrupOption();
		this.clickButtonCalcEspressoShot();
		this.clickButtonCalcSyrup();
		this.clickButtonAddToCart();
		this.clickButtonCancelAddingToCart();
	},
};
