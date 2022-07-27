import { $, $$ } from '../utils/ElementTool.js';
import { subSpacingString } from '../utils/StringTool.js';
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
import Timer from '../utils/Timer.js';
import ReviewOrderContainer from '../view/ReviewOrderContainer.js';
import PayContainer from '../view/PayContainer.js';

export default {
	init() {},
	async setup() {
		const fragment = document.createDocumentFragment();

		await SlideImageInfo.getImageUrl()
			.then(() => fragment.append(NavKioskContainer.setup(), IntroContainer.setup(), SlideContainer.setup(), TakeOutContainer.setup(), FooterKioskContainer.setup()))
			.then(() => AllProductsInfo.getAllProducts())
			.then(() => fragment.append(SelectProductContainer.setup(), SelectOptionContainer.setup(), ReviewOrderContainer.setup(), PayContainer.setup()));

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
			Timer.startTimer();
			this.startTimer();
			TakeOutContainer.hideSectionTakeOutContainer();
			SelectProductContainer.onClickButtonTakeOut();
			NavKioskContainer.showNavKioskContainer();
			FooterKioskContainer.showFooterKioskContainer();
		});
	},
	clickButtonStore() {
		$('.buttonStore')?.addEventListener('click', e => {
			this.updateTakeOutValue(e);
			this.changeBackgroundWhite();
			Timer.startTimer();
			this.startTimer();
			TakeOutContainer.hideSectionTakeOutContainer();
			SelectProductContainer.onClickButtonStore();
			NavKioskContainer.showNavKioskContainer();
			FooterKioskContainer.showFooterKioskContainer();
		});
	},
	/* in SectionSelectProductContainer */
	clickLiSelectProductCategoryItem() {
		$$('.liSelectProductCategoryItem')?.forEach((li, index) =>
			li?.addEventListener('click', ({ target }) => {
				SelectProductContainer.onClickLiSelectProductCategoryItem(target, index);
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
				UserInfo.initSelectedProduct(subSpacingString(currentTarget.querySelector('.liSelectProductNameItem').textContent));
				SelectOptionContainer.onClickUlSelectProductItemContainer();
				Timer.stopTimer();
			})
		);
	},
	clickButtonPay() {
		$('.buttonPay')?.addEventListener('click', () => {
			if (UserInfo.confirmEmptySelectedProducts()) {
				SelectProductContainer.onClickButtonPay();
				ReviewOrderContainer.onClickButtonPay();
				NavKioskContainer.hideNavKioskContainer();
				FooterKioskContainer.hideFooterKioskContainer();
				Timer.stopTimer();
			}
		});
	},
	clickButtonCancel() {
		$('.buttonCancel')?.addEventListener('click', () => void this.init());
	},
	// important
	clickButtonItemMinusCount() {
		$$('.buttonItemMinusCount').forEach(div =>
			div?.addEventListener('click', ({ currentTarget }) => {
				const id = +currentTarget.parentElement.parentElement.parentElement.querySelector('.liItemId').textContent;
				const [countValue, priceValue] = UserInfo.setSelectedProductMinusCount(id);

				SelectProductContainer.onClickButtonItemMinusCount(countValue, priceValue, currentTarget);
			})
		);
	},
	clickButtonItemAddCount() {
		$$('.buttonItemAddCount').forEach(div =>
			div?.addEventListener('click', ({ currentTarget }) => {
				const id = +currentTarget.parentElement.parentElement.parentElement.querySelector('.liItemId').textContent;
				const [countValue, priceValue] = UserInfo.setSelectedProductAddCount(id);

				SelectProductContainer.onClickButtonItemAddCount(countValue, priceValue, currentTarget);
			})
		);
	},
	clickButtonItemOption() {
		$$('.buttonItemOption').forEach(button =>
			button?.addEventListener('click', ({ currentTarget }) => {
				const id = +currentTarget.parentElement.parentElement.querySelector('.liItemId').textContent;

				SelectProductContainer.onClickButtonItemOption(UserInfo.pickSelectedProduct(id));
			})
		);
	},
	clickButtonItemDelete() {
		$$('.buttonItemDelete').forEach(button =>
			button?.addEventListener('click', ({ currentTarget }) => {
				const id = +currentTarget.parentElement.parentElement.querySelector('.liItemId').textContent;

				UserInfo.deleteSelectedProduct(id);
				SelectProductContainer.onClickButtonItemDelete(currentTarget, UserInfo.confirmEmptySelectedProducts());
			})
		);
	},

	/* in SectionSelectOptionContainer */
	clickUlOptionListContainer() {
		$$('.ulOptionListContainer ul').forEach(ul => ul?.addEventListener('click', ({ currentTarget }) => SelectOptionContainer.onClickUlOptionListContainer(currentTarget)));
	},
	clickLiWrapperDisabledContainer() {
		$('.liWrapperDisabledContainer')?.addEventListener('click', () => SelectOptionContainer.onClickLiWrapperDisabledContainer());
	},
	clickDivHideDisabledWrapperOptionModalContainer() {
		$('.divHideDisabledWrapperOptionModalContainer')?.addEventListener('click', () => SelectOptionContainer.onClickDivHideDisabledWrapperOptionModalContainer());
	},
	clickUlSizeListContainer() {
		$$('.ulSizeListContainer').forEach(ul =>
			ul?.addEventListener('click', ({ currentTarget }) => {
				this.setSelectedProductSize(subSpacingString(currentTarget.querySelector('.liSize').textContent));
				this.setSelectedProductAdditionalFee();
				SelectOptionContainer.onClickUlSizeListContainer(currentTarget);
			})
		);
	},
	clickUlIceListContainer() {
		$$('.ulIceListContainer').forEach(ul =>
			ul?.addEventListener('click', ({ currentTarget }) => {
				this.setSelectedProductIce(subSpacingString(currentTarget.querySelector('.liIce').textContent));
				SelectOptionContainer.onClickUlIceListContainer();
			})
		);
	},
	clickLiEspressoRoastOption() {
		$$('.liEspressoRoastOption').forEach(li =>
			li?.addEventListener('click', ({ target }) => {
				this.setSelectedProductEspressoRoast(subSpacingString(target.textContent));
				SelectOptionContainer.onClickLiEspressoRoastOption();
			})
		);
	},
	clickLiSyrupOption() {
		$$('.ulSyrupOptionContainer .liSyrupOption').forEach(li =>
			li?.addEventListener('click', ({ target }) => {
				this.setSelectedProductSyrup(subSpacingString(target.textContent));
				SelectOptionContainer.onClickLiSyrupOption(target);
			})
		);
	},
	clickButtonCalcEspressoShot() {
		$$('.buttonCalcEspressoShot').forEach(button => button?.addEventListener('click', ({ currentTarget }) => SelectOptionContainer.onClickButtonCalcEspressoShot(currentTarget)));
	},
	clickButtonCalcSyrup() {
		$$('.buttonCalcSyrup').forEach(button => button?.addEventListener('click', ({ currentTarget }) => SelectOptionContainer.onClickButtonCalcSyrup(currentTarget)));
	},
	clickButtonAddToCart() {
		$('.buttonAddToCart').addEventListener('click', () => {
			SelectOptionContainer.onClickButtonAddToCart();
			this.addSelectedProduct();
			Timer.restartTimer();
			Timer.startTimer();
			this.startTimer();
			SelectProductContainer.onClickButtonAddToCart(UserInfo.confirmEmptySelectedProducts());
			this.clickButtonItemMinusCount();
			this.clickButtonItemAddCount();
			this.clickButtonItemOption();
			this.clickButtonItemDelete();
		});
	},
	clickButtonCancelAddingToCart() {
		$('.buttonCancelAddingToCart').addEventListener('click', () => {
			SelectOptionContainer.onClickButtonCancelAddingToCart();
			SelectProductContainer.onClickButtonCancelAddingToCart();
			Timer.restartTimer();
			Timer.startTimer();
			this.startTimer();
		});
	},

	/* in SectionReviewOrderContainer */

	couponComplete() {
		if (this.confirmPhoneNumber()) {
			UserInfo.getUserInfo($('.inputPhoneNumber').value)
				.then(res => ReviewOrderContainer.onClickButtonCouponComplete(res))
				.catch(err => console.log(err));
		} else {
			ReviewOrderContainer.onClickButtonCouponComplete(false);
		}
	},
	clickButtonSimpleReviewOrderPay() {
		$('.buttonSimpleReviewOrderPay').addEventListener('click', () => {
			ReviewOrderContainer.onClickButtonSimpleReviewOrderPay();
		});
	},
	clickButtonSimpleReviewOrderBack() {
		$('.buttonSimpleReviewOrderBack').addEventListener('click', () => {
			ReviewOrderContainer.onClickButtonSimpleReviewOrderBack();
			Timer.restartTimer();
			Timer.startTimer();
			this.startTimer();
			NavKioskContainer.showNavKioskContainer();
			FooterKioskContainer.showFooterKioskContainer();
			SelectProductContainer.onClickButtonSimpleReviewOrderBack();
		});
	},
	clickButtonShowCoupon() {
		$('.buttonShowCoupon').addEventListener('click', () => {
			ReviewOrderContainer.onClickButtonShowCoupon();
		});
	},
	clickButtonShowOrder() {
		$('.buttonShowOrder').addEventListener('click', () => {
			ReviewOrderContainer.onClickButtonShowOrder();
		});
	},
	clickButtonCouponSearching() {
		$$('.buttonCouponSearching').forEach(button =>
			button.addEventListener('click', ({ currentTarget }) => {
				ReviewOrderContainer.onClickButtonCouponSearching(currentTarget);
			})
		);
	},
	keydownInputPhoneNumber() {
		$('.inputPhoneNumber').addEventListener('keydown', event => !(event.keyCode >= 48 && event.keyCode <= 57) && event.preventDefault());
	},
	keyupInputPhoneNumber() {
		$('.inputPhoneNumber').addEventListener('keyup', event => ReviewOrderContainer.onKeyupInputPhoneNumber(event));
	},
	clickButtonCouponBack() {
		$('.buttonCouponBack').addEventListener('click', () => {
			ReviewOrderContainer.onClickButtonCouponBack();
		});
	},
	clickButtonCouponComplete() {
		$('.buttonCouponComplete').addEventListener('click', () => this.couponComplete());
	},
	clickButtonUsingPointNot() {
		$('.buttonUsingPointNot').addEventListener('click', () => {
			ReviewOrderContainer.onClickButtonUsingPointNot();
		});
	},
	clickButtonUsingPointFiveThousand() {
		$('.buttonUsingPointFiveThousand').addEventListener('click', () => {
			ReviewOrderContainer.onClickButtonUsingPointFiveThousand();
		});
	},
	clickButtonUsingPointFull() {
		$('.buttonUsingPointFull').addEventListener('click', () => {
			ReviewOrderContainer.onClickButtonUsingPointFull();
		});
	},
	clickButtonUsingPointAndPay() {
		$('.buttonUsingPointAndPay').addEventListener('click', () => {
			ReviewOrderContainer.onClickButtonUsingPointAndPay();
			PayContainer.onClickButtonUsingPointAndPay()
		});
	},
	clickButtonUsingPointCancel() {
		$('.buttonUsingPointCancel').addEventListener('click', () => {
			ReviewOrderContainer.onClickButtonUsingPointCancel();
		});
	},
	confirmPhoneNumber() {
		return $('.inputPhoneNumber').value.length === 13;
	},
	startTimer() {
		Timer.handler &&
			setTimeout(() => {
				NavKioskContainer.setDivKioskTimer(Timer.limitedSeconds);
				this.startTimer();
			}, 1000);
	},
	initTimer() {
		Timer.resetTimer();
		NavKioskContainer.setDivKioskTimer(300);
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
	selectedProductsInfo() {
		return UserInfo.selectedProducts;
	},
	totalAmountValue() {
		return UserInfo.totalAmountValue();
	},
	totalNumberValue() {
		return UserInfo.totalNumberValue();
	},
	addSelectedProduct() {
		UserInfo.addSelectedProduct();
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
		this.clickButtonPay();
		this.clickButtonCancel();
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
		this.clickButtonSimpleReviewOrderPay();
		this.clickButtonSimpleReviewOrderBack();
		this.clickButtonShowCoupon();
		this.clickButtonShowOrder();
		this.clickButtonCouponSearching();
		this.keydownInputPhoneNumber();
		this.keyupInputPhoneNumber();
		this.clickButtonCouponBack();
		this.clickButtonCouponComplete();
		this.clickButtonUsingPointNot();
		this.clickButtonUsingPointFiveThousand();
		this.clickButtonUsingPointFull();
		this.clickButtonUsingPointAndPay();
		this.clickButtonUsingPointCancel();
	},
};
