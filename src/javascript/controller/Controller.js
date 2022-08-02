// utils
import { $, $$ } from '../utils/ElementTool.js';
import { spacingString, subSpacingString } from '../utils/StringTool.js';
import Timer from '../utils/Timer.js';

// components
import NavKioskContainer from '../components/NavKioskContainer.js';
import FooterKioskContainer from '../components/FooterKioskContainer.js';

// view
import IntroContainer from '../view/IntroContainer.js';
import SlideContainer from '../view/SlideContainer.js';
import TakeOutContainer from '../view/TakeOutContainer.js';
import SelectProductContainer from '../view/SelectProductContainer.js';
import SelectOptionContainer from '../view/SelectOptionContainer.js';
import ReviewOrderContainer from '../view/ReviewOrderContainer.js';
import PayContainer from '../view/PayContainer.js';

// model
import SlideImageInfo from '../model/SlideImageInfo.js';
import AllProductsInfo from '../model/AllProductsInfo.js';
import UserInfo from '../model/UserInfo.js';
import AllOptionsInfo from '../model/AllOptionsInfo.js';

export default {
	// initialize function
	init() {
		Timer.resetTimer();
		IntroContainer.init();
		SlideContainer.init();
		TakeOutContainer.init();
		NavKioskContainer.init();
		FooterKioskContainer.init();
		SelectProductContainer.init();
		SelectOptionContainer.init();
		ReviewOrderContainer.init();
		PayContainer.init();
		UserInfo.initSelectedProducts();
	},

	// setup function
	async setup() {
		const fragment = document.createDocumentFragment();

		await SlideImageInfo.getImageUrl()
			.then(() => fragment.append(NavKioskContainer.setup(), IntroContainer.setup(), SlideContainer.setup(), TakeOutContainer.setup(), FooterKioskContainer.setup()))
			.then(() => AllProductsInfo.getAllProducts())
			.then(() => fragment.append(SelectProductContainer.setup(), SelectOptionContainer.setup(), ReviewOrderContainer.setup(), PayContainer.setup()));

		return fragment;
	},

	/* in App */
	startTimer() {
		if (Timer.handler || Timer.limitedSeconds > 0) {
			setTimeout(() => {
				NavKioskContainer.setDivKioskTimer(Timer.limitedSeconds);
				this.startTimer();
			}, 100);
		} else {
			this.init();
		}
	},

	/* in navKioskContainer */
	clickH1NavKioskTitle() {
		$$('.h1NavKioskTitle')?.forEach(h1 => h1?.addEventListener('click', () => void this.init()));
	},

	/* in sectionIntroContainer */
	clickSectionIntroContainer() {
		$('.sectionIntroContainer')?.addEventListener('click', () => void this.onClickSectionIntroContainer());
	},
	onClickSectionIntroContainer() {
		IntroContainer.onClickSectionIntroContainer();
		SlideContainer.onClickSectionIntroContainer();
	},

	/* in sectionSlideContainer */
	clickSectionSlideContainer() {
		$('.sectionSlideContainer')?.addEventListener('click', () => void this.onClickSectionSlideContainer());
	},
	onClickSectionSlideContainer() {
		SlideContainer.onClickSectionSlideContainer();
		TakeOutContainer.onClickSectionSlideContainer();
	},

	/* in sectionTakeOutContainer */
	clickButtonTakeOut() {
		$('.buttonTakeOut')?.addEventListener('click', event => void this.onClickButtonTakeOut(event));
	},
	onClickButtonTakeOut({ currentTarget }) {
		UserInfo.userInfo.takeOut = currentTarget.textContent;
		Timer.startTimer();
		this.startTimer();
		TakeOutContainer.onClickButtonTakeOut();
		SelectProductContainer.onClickButtonTakeOut();
		NavKioskContainer.onClickButtonTakeOut();
		FooterKioskContainer.onClickButtonTakeOut();
	},

	clickButtonStore() {
		$('.buttonStore')?.addEventListener('click', event => void this.onClickButtonStore(event));
	},
	onClickButtonStore({ currentTarget }) {
		UserInfo.userInfo.takeOut = currentTarget.textContent;

		Timer.startTimer();
		this.startTimer();

		TakeOutContainer.onClickButtonStore();
		SelectProductContainer.onClickButtonStore();
		NavKioskContainer.onClickButtonStore();
		FooterKioskContainer.onClickButtonStore();
	},

	/* in sectionSelectProductContainer */
	clickDivHideSelectedProductOptionContainer() {
		$('.divHideSelectedProductOptionContainer').addEventListener('click', () => void this.onClickDivHideSelectedProductOptionContainer());
	},
	onClickDivHideSelectedProductOptionContainer() {
		SelectProductContainer.onClickDivHideSelectedProductOptionContainer();
	},

	clickLiSelectProductCategoryItem() {
		$$('.liSelectProductCategoryItem')?.forEach((li, index) => li?.addEventListener('click', ({ target }) => void this.onClickLiSelectProductCategoryItem(target, index)));
	},
	onClickLiSelectProductCategoryItem(target, index) {
		SelectProductContainer.onClickLiSelectProductCategoryItem(target, index);
	},

	mouseoverLiSelectProductCategoryItem() {
		$$('.liSelectProductCategoryItem')?.forEach(li => li?.addEventListener('mouseover', ({ target }) => void this.onMouseoverLiSelectProductCategoryItem(target)));
	},
	onMouseoverLiSelectProductCategoryItem(target) {
		getComputedStyle(target).backgroundColor === 'rgb(22, 88, 78)' && (target.style.backgroundColor = '#193c35');
	},

	mouseoutLiSelectProductCategoryItem() {
		$$('.liSelectProductCategoryItem')?.forEach(li => li?.addEventListener('mouseout', ({ target }) => void this.onMouseoutLiSelectProductCategoryItem(target)));
	},
	onMouseoutLiSelectProductCategoryItem(target) {
		getComputedStyle(target).backgroundColor !== 'rgb(25, 60, 54)' && (target.style.backgroundColor = '#16584e');
	},

	clickUlSelectProductItemContainer() {
		$$('.ulSelectProductItemContainer')?.forEach(ul => ul?.addEventListener('click', ({ currentTarget }) => void this.onClickUlSelectProductItemContainer(currentTarget)));
	},
	onClickUlSelectProductItemContainer(currentTarget) {
		const productName = subSpacingString(currentTarget.querySelector('.liSelectProductNameItem').textContent);
		const productType = AllProductsInfo.allProducts.find(productInfo => productInfo.productName === productName).productType;

		switch (productType) {
			case 'hotCoffee':
				this.onClickUlSelectProductItemContainer_coffeeAndBeverage(productName, productType);
				break;
			case 'normalCoffee':
				this.onClickUlSelectProductItemContainer_coffeeAndBeverage(productName, productType);
				break;
			case 'iceCoffee':
				this.onClickUlSelectProductItemContainer_coffeeAndBeverage(productName, productType);
				break;
			case 'hotBeverage':
				this.onClickUlSelectProductItemContainer_coffeeAndBeverage(productName, productType);
				break;
			case 'normalBeverage':
				this.onClickUlSelectProductItemContainer_coffeeAndBeverage(productName, productType);
				break;
			case 'iceBeverage':
				this.onClickUlSelectProductItemContainer_coffeeAndBeverage(productName, productType);
				break;
			case 'hotTea':
				this.onClickUlSelectProductItemContainer_coffeeAndBeverage(productName, productType);
				break;
			case 'normalTea':
				this.onClickUlSelectProductItemContainer_coffeeAndBeverage(productName, productType);
				break;
			case 'iceTea':
				this.onClickUlSelectProductItemContainer_coffeeAndBeverage(productName, productType);
				break;
			case 'avocado':
				this.onClickUlSelectProductItemContainer_BakeryAndAvocado(productName);
				break;
			case 'bakery':
				this.onClickUlSelectProductItemContainer_BakeryAndAvocado(productName);
				break;
		}
	},
	onClickUlSelectProductItemContainer_coffeeAndBeverage(productName, productType) {
		UserInfo.initSelectedProduct(productName);
		SelectOptionContainer.onClickUlSelectProductItemContainer(productType);
		Timer.stopTimer();
	},
	onClickUlSelectProductItemContainer_BakeryAndAvocado(productName) {
		const selectedProductInfo = UserInfo.initSelectedProduct(productName);
		const handlerAlreadyExist = UserInfo.addSelectedProduct();
		const handlerEmptySelectedProducts = UserInfo.selectedProducts.length;

		SelectProductContainer.onClickUlSelectProductItemContainer_BakeryAndAvocado(selectedProductInfo, handlerAlreadyExist, handlerEmptySelectedProducts);

		if (!handlerAlreadyExist) {
			this.clickButtonItemMinusCount_BakeryAndAvocado(productName);
			this.clickButtonItemAddCount_BakeryAndAvocado(productName);
			this.clickButtonItemDelete_BakeryAndAvocado(productName);
		}
	},

	clickButtonPay() {
		$('.buttonPay')?.addEventListener('click', () => void this.onClickButtonPay());
	},
	onClickButtonPay() {
		if (UserInfo.confirmEmptySelectedProducts()) {
			SelectProductContainer.onClickButtonPay();
			ReviewOrderContainer.onClickButtonPay();
			NavKioskContainer.hideNavKioskContainer();
			FooterKioskContainer.hideFooterKioskContainer();
			Timer.stopTimer();
		}
	},

	clickButtonCancel() {
		$('.buttonCancel')?.addEventListener('click', () => void this.init());
	},

	clickButtonItemMinusCount() {
		$$('.buttonItemMinusCount').forEach(button => button?.addEventListener('click', ({ currentTarget }) => void this.onClickButtonItemMinusCount(currentTarget)));
	},

	clickButtonItemMinusCount_BakeryAndAvocado(productName) {
		$$('.ulSelectedProductItemContainer').forEach(ul => {
			if (ul.querySelector('.liItemName').textContent === spacingString(productName)) {
				ul.querySelector('.buttonItemMinusCount').addEventListener('click', ({ currentTarget }) => void this.onClickButtonItemMinusCount(currentTarget));
			}
		});
	},
	onClickButtonItemMinusCount(currentTarget) {
		const id = +currentTarget.parentElement.parentElement.parentElement.querySelector('.liItemId').textContent;
		const [countValue, priceValue] = UserInfo.setSelectedProductMinusCount(id);

		SelectProductContainer.onClickButtonItemMinusCount(countValue, priceValue, currentTarget);
	},

	clickButtonItemAddCount() {
		$$('.buttonItemAddCount').forEach(button => button?.addEventListener('click', ({ currentTarget }) => void this.onClickButtonItemAddCount(currentTarget)));
	},

	clickButtonItemAddCount_BakeryAndAvocado(productName) {
		$$('.ulSelectedProductItemContainer').forEach(ul => {
			if (ul.querySelector('.liItemName').textContent === spacingString(productName)) {
				ul.querySelector('.buttonItemAddCount').addEventListener('click', ({ currentTarget }) => void this.onClickButtonItemAddCount(currentTarget));
			}
		});
	},
	onClickButtonItemAddCount(currentTarget) {
		const id = +currentTarget.parentElement.parentElement.parentElement.querySelector('.liItemId').textContent;
		const [countValue, priceValue] = UserInfo.setSelectedProductAddCount(id);

		SelectProductContainer.onClickButtonItemAddCount(countValue, priceValue, currentTarget);
	},

	clickButtonItemOption() {
		$$('.buttonItemOption').forEach(button => button?.addEventListener('click', ({ currentTarget }) => void this.onClickButtonItemOption(currentTarget)));
	},
	onClickButtonItemOption(currentTarget) {
		const id = +currentTarget.parentElement.parentElement.querySelector('.liItemId').textContent;

		SelectProductContainer.onClickButtonItemOption(UserInfo.pickSelectedProduct(id));
	},

	clickButtonItemDelete() {
		$$('.buttonItemDelete').forEach(button => button?.addEventListener('click', ({ currentTarget }) => void this.onClickButtonItemDelete(currentTarget)));
	},
	clickButtonItemDelete_BakeryAndAvocado(productName) {
		$$('.ulSelectedProductItemContainer').forEach(ul => {
			if (ul.querySelector('.liItemName').textContent === spacingString(productName)) {
				ul.querySelector('.buttonItemDelete').addEventListener('click', ({ currentTarget }) => void this.onClickButtonItemDelete(currentTarget));
			}
		});
	},
	onClickButtonItemDelete(currentTarget) {
		const id = +currentTarget.parentElement.parentElement.querySelector('.liItemId').textContent;

		UserInfo.deleteSelectedProduct(id);
		SelectProductContainer.onClickButtonItemDelete(currentTarget, UserInfo.confirmEmptySelectedProducts());
	},

	/* in sectionSelectOptionContainer */
	clickUlOptionListContainer() {
		$$('.ulOptionListContainer ul').forEach(ul => ul?.addEventListener('click', ({ currentTarget }) => void this.onClickUlOptionListContainer(currentTarget)));
	},
	onClickUlOptionListContainer(currentTarget) {
		SelectOptionContainer.onClickUlOptionListContainer(currentTarget);
	},

	clickLiWrapperDisabledContainer() {
		$('.liWrapperDisabledContainer')?.addEventListener('click', () => void this.onClickLiWrapperDisabledContainer());
	},
	onClickLiWrapperDisabledContainer() {
		SelectOptionContainer.onClickLiWrapperDisabledContainer();
	},

	clickLiWrapperDisabledNoIceContainer() {
		$('.liWrapperDisabledNoIceContainer')?.addEventListener('click', () => void this.onClickLiWrapperDisabledNoIceContainer());
	},
	onClickLiWrapperDisabledNoIceContainer() {
		SelectOptionContainer.onClickLiWrapperDisabledNoIceContainer();
	},

	clickLiWrapperDisabledIceContainer() {
		$('.liWrapperDisabledIceContainer')?.addEventListener('click', () => void this.onClickLiWrapperDisabledIceContainer());
	},
	onClickLiWrapperDisabledIceContainer() {
		SelectOptionContainer.onClickLiWrapperDisabledIceContainer();
	},

	clickDivHideDisabledWrapperOptionModalContainer() {
		$('.divHideDisabledWrapperOptionModalContainer')?.addEventListener('click', () => void this.onClickDivHideDisabledWrapperOptionModalContainer());
	},
	onClickDivHideDisabledWrapperOptionModalContainer() {
		SelectOptionContainer.onClickDivHideDisabledWrapperOptionModalContainer();
	},

	clickUlSizeListContainer() {
		$$('.ulSizeListContainer').forEach(ul => ul?.addEventListener('click', ({ currentTarget }) => void this.onClickUlSizeListContainer(currentTarget)));
	},
	onClickUlSizeListContainer(currentTarget) {
		const productSize = subSpacingString(currentTarget.querySelector('.liSize').textContent);
		UserInfo.setSelectedProductSize(productSize);
		UserInfo.setSelectedProductAdditionalFee();
		SelectOptionContainer.onClickUlSizeListContainer(currentTarget);
	},

	clickUlIceListContainer() {
		$$('.ulIceListContainer').forEach(ul => ul?.addEventListener('click', ({ currentTarget }) => void this.onClickUlIceListContainer(currentTarget)));
	},
	onClickUlIceListContainer(currentTarget) {
		const productIce = subSpacingString(currentTarget.querySelector('.liIce').textContent);
		UserInfo.setSelectedProductIce(productIce);
		SelectOptionContainer.onClickUlIceListContainer();
	},

	clickLiEspressoRoastOption() {
		$$('.liEspressoRoastOption').forEach(li => li?.addEventListener('click', ({ target }) => void this.onClickLiEspressoRoastOption(target)));
	},
	onClickLiEspressoRoastOption(target) {
		this.setSelectedProductEspressoRoast(subSpacingString(target.textContent));
		SelectOptionContainer.onClickLiEspressoRoastOption();
	},

	clickLiSyrupOption() {
		$$('.ulSyrupOptionContainer .liSyrupOption').forEach(li => li?.addEventListener('click', ({ target }) => void this.onClickLiSyrupOption(target)));
	},
	onClickLiSyrupOption(target) {
		this.setSelectedProductSyrup(subSpacingString(target.textContent));
		SelectOptionContainer.onClickLiSyrupOption(target);
	},

	clickButtonCalcEspressoShot() {
		$$('.buttonCalcEspressoShot').forEach(button => button?.addEventListener('click', ({ currentTarget }) => void this.onClickButtonCalcEspressoShot(currentTarget)));
	},
	onClickButtonCalcEspressoShot(currentTarget) {
		SelectOptionContainer.onClickButtonCalcEspressoShot(currentTarget);
	},

	clickButtonCalcSyrup() {
		$$('.buttonCalcSyrup').forEach(button => button?.addEventListener('click', ({ currentTarget }) => void this.onClickButtonCalcSyrup(currentTarget)));
	},
	onClickButtonCalcSyrup(currentTarget) {
		SelectOptionContainer.onClickButtonCalcSyrup(currentTarget);
	},

	clickButtonAddToCart() {
		$('.buttonAddToCart').addEventListener('click', () => void this.onClickButtonAddToCart());
	},
	onClickButtonAddToCart() {
		SelectOptionContainer.onClickButtonAddToCart();
		UserInfo.addSelectedProduct();
		Timer.restartTimer();
		Timer.startTimer();
		this.startTimer();
		SelectProductContainer.onClickButtonAddToCart(UserInfo.confirmEmptySelectedProducts());
		this.clickButtonItemMinusCount();
		this.clickButtonItemAddCount();
		this.clickButtonItemOption();
		this.clickButtonItemDelete();
	},

	clickButtonCancelAddingToCart() {
		$('.buttonCancelAddingToCart').addEventListener('click', () => void this.onClickButtonCancelAddingToCart());
	},
	onClickButtonCancelAddingToCart() {
		SelectOptionContainer.onClickButtonCancelAddingToCart();
		SelectProductContainer.onClickButtonCancelAddingToCart();
		Timer.restartTimer();
		Timer.startTimer();
		this.startTimer();
	},

	/* in sectionReviewOrderContainer */
	clickButtonSimpleReviewOrderPay() {
		$('.buttonSimpleReviewOrderPay').addEventListener('click', () => void this.onClickButtonSimpleReviewOrderPay());
	},
	onClickButtonSimpleReviewOrderPay() {
		const totalPrice = $('.spanSimpleReviewOrderTotalPrice').textContent;

		ReviewOrderContainer.onClickButtonSimpleReviewOrderPay();
		PayContainer.onClickButtonSimpleReviewOrderPay(totalPrice);
	},

	clickButtonSimpleReviewOrderBack() {
		$('.buttonSimpleReviewOrderBack').addEventListener('click', () => void this.onClickButtonSimpleReviewOrderBack());
	},
	onClickButtonSimpleReviewOrderBack() {
		ReviewOrderContainer.onClickButtonSimpleReviewOrderBack();
		Timer.restartTimer();
		Timer.startTimer();
		this.startTimer();
		NavKioskContainer.showNavKioskContainer();
		FooterKioskContainer.showFooterKioskContainer();
		SelectProductContainer.onClickButtonSimpleReviewOrderBack();
	},

	clickButtonShowCoupon() {
		$('.buttonShowCoupon').addEventListener('click', () => void this.onClickButtonShowCoupon());
	},
	onClickButtonShowCoupon() {
		ReviewOrderContainer.onClickButtonShowCoupon();
	},

	clickButtonShowOrder() {
		$('.buttonShowOrder').addEventListener('click', () => void this.onClickButtonShowOrder());
	},
	onClickButtonShowOrder() {
		ReviewOrderContainer.onClickButtonShowOrder();
	},

	clickButtonCouponSearching() {
		$$('.buttonCouponSearching').forEach(button => button.addEventListener('click', ({ currentTarget }) => void this.onClickButtonCouponSearching(currentTarget)));
	},
	onClickButtonCouponSearching(currentTarget) {
		ReviewOrderContainer.onClickButtonCouponSearching(currentTarget);
	},

	keydownInputPhoneNumber() {
		$('.inputPhoneNumber').addEventListener('keydown', event => void this.onKeydownInputPhoneNumber(event));
	},
	onKeydownInputPhoneNumber(event) {
		!(event.keyCode >= 48 && event.keyCode <= 57) && event.preventDefault();
	},

	keyupInputPhoneNumber() {
		$('.inputPhoneNumber').addEventListener('keyup', event => void this.onKeyupInputPhoneNumber(event));
	},
	onKeyupInputPhoneNumber(event) {
		ReviewOrderContainer.onKeyupInputPhoneNumber(event);
	},

	clickButtonCouponBack() {
		$('.buttonCouponBack').addEventListener('click', () => void this.onClickButtonCouponBack());
	},
	onClickButtonCouponBack() {
		ReviewOrderContainer.onClickButtonCouponBack();
	},

	clickButtonCouponComplete() {
		$('.buttonCouponComplete').addEventListener('click', () => this.onClickButtonCouponComplete());
	},
	onClickButtonCouponComplete() {
		if (this.confirmPhoneNumber())
			UserInfo.getUserInfo($('.inputPhoneNumber').value)
				.then(res => ReviewOrderContainer.onClickButtonCouponComplete(res))
				.catch(err => console.log(err));
		else ReviewOrderContainer.onClickButtonCouponComplete(false);
	},
	confirmPhoneNumber() {
		return $('.inputPhoneNumber').value.length === 13;
	},

	clickButtonUsingPointNot() {
		$('.buttonUsingPointNot').addEventListener('click', () => void this.onClickButtonUsingPointNot());
	},
	onClickButtonUsingPointNot() {
		ReviewOrderContainer.onClickButtonUsingPointNot();
	},

	clickButtonUsingPointFiveThousand() {
		$('.buttonUsingPointFiveThousand').addEventListener('click', () => void this.onClickButtonUsingPointFiveThousand());
	},
	onClickButtonUsingPointFiveThousand() {
		ReviewOrderContainer.onClickButtonUsingPointFiveThousand();
	},

	clickButtonUsingPointFull() {
		$('.buttonUsingPointFull').addEventListener('click', () => void this.onClickButtonUsingPointFull());
	},
	onClickButtonUsingPointFull() {
		ReviewOrderContainer.onClickButtonUsingPointFull();
	},

	clickButtonUsingPointAndPay() {
		$('.buttonUsingPointAndPay').addEventListener('click', () => void this.onClickButtonUsingPointAndPay());
	},
	onClickButtonUsingPointAndPay() {
		ReviewOrderContainer.onClickButtonUsingPointAndPay();
		PayContainer.onClickButtonUsingPointAndPay();
	},
	
	clickButtonUsingPointCancel() {
		$('.buttonUsingPointCancel').addEventListener('click', () => void this.init());
	},

	/* slideImageInfo data */
	slideImageInfo() {
		return SlideImageInfo.imageUrl;
	},

	/* allProductsInfo data */
	allProductsInfo() {
		return AllProductsInfo.allProducts;
	},
	allProductCategoriesInfo() {
		return AllProductsInfo.allProductCategories;
	},

	/* allOptionsInfo data */
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

	/* userInfo data */
	userInfo() {
		return UserInfo.userInfo;
	},
	async updateUserInfo(updatedPoint) {
		await UserInfo.updateUserInfo(updatedPoint);
	},
	postUserInfo() {
		UserInfo.postUserInfo();
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
	setSelectedProductAdditionalFee(productAdditionalFee) {
		UserInfo.setSelectedProductAdditionalFee(productAdditionalFee);
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

	// main function
	main() {
		this.clickH1NavKioskTitle();
		this.clickSectionIntroContainer();
		this.clickSectionSlideContainer();
		this.clickButtonTakeOut();
		this.clickButtonStore();
		this.clickDivHideSelectedProductOptionContainer();
		this.clickLiSelectProductCategoryItem();
		this.mouseoverLiSelectProductCategoryItem();
		this.mouseoutLiSelectProductCategoryItem();
		this.clickUlSelectProductItemContainer();
		this.clickButtonPay();
		this.clickButtonCancel();
		this.clickUlOptionListContainer();
		this.clickLiWrapperDisabledContainer();
		this.clickLiWrapperDisabledNoIceContainer();
		this.clickLiWrapperDisabledIceContainer();
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
