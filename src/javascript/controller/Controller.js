import { $, $$ } from '../utils/ElementTool.js';
import { spacingString, subSpacingString } from '../utils/StringTool.js';
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
	async setup() {
		const fragment = document.createDocumentFragment();

		await SlideImageInfo.getImageUrl()
			.then(() => fragment.append(NavKioskContainer.setup(), IntroContainer.setup(), SlideContainer.setup(), TakeOutContainer.setup(), FooterKioskContainer.setup()))
			.then(() => AllProductsInfo.getAllProducts())
			.then(() => fragment.append(SelectProductContainer.setup(), SelectOptionContainer.setup(), ReviewOrderContainer.setup(), PayContainer.setup()));

		return fragment;
	},
	/* in NavKioskContainer */
	clickH1NavKioskTitle() {
		$$('.h1NavKioskTitle')?.forEach(h1 => h1?.addEventListener('click', () => void this.init()));
	},

	/* in SectionIntroContainer */
	clickSectionIntroContainer() {
		$('.sectionIntroContainer')?.addEventListener('click', () => void this.onClickSectionIntroContainer());
	},
	onClickSectionIntroContainer() {
		IntroContainer.onClickSectionIntroContainer();
		SlideContainer.onClickSectionIntroContainer();
	},

	/* in SectionSlideContainer */
	clickSectionSlideContainer() {
		$('.sectionSlideContainer')?.addEventListener('click', () => void this.onClickSectionSlideContainer());
	},
	onClickSectionSlideContainer() {
		SlideContainer.onClickSectionSlideContainer();
		TakeOutContainer.onClickSectionSlideContainer();
	},

	/* in SectionTakeOutContainer */
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

	/* in SectionSelectProductContainer */
	clickLiSelectProductCategoryItem() {
		$$('.liSelectProductCategoryItem')?.forEach((li, index) => li?.addEventListener('click', ({ target }) => void SelectProductContainer.onClickLiSelectProductCategoryItem(target, index)));
	},

	mouseoverLiSelectProductCategoryItem() {
		$$('.liSelectProductCategoryItem')?.forEach(li =>
			li?.addEventListener('mouseover', ({ target }) => {
				if (getComputedStyle(target).backgroundColor === 'rgb(22, 88, 78)') {
					target.style.backgroundColor = '#193c35';
				}
			})
		);
	},

	mouseoutLiSelectProductCategoryItem() {
		$$('.liSelectProductCategoryItem')?.forEach(li =>
			li?.addEventListener('mouseout', ({ target }) => {
				if (getComputedStyle(target).backgroundColor !== 'rgb(25, 60, 54)') {
					li.style.backgroundColor = '#16584e';
				}
			})
		);
	},

	clickUlSelectProductItemContainer() {
		$$('.ulSelectProductItemContainer')?.forEach(ul => ul?.addEventListener('click', ({ currentTarget }) => void this.onClickUlSelectProductItemContainer(currentTarget)));
	},
	onClickUlSelectProductItemContainer(currentTarget) {
		const productName = subSpacingString(currentTarget.querySelector('.liSelectProductNameItem').textContent);
		const productType = AllProductsInfo.allProducts.find(productInfo => productInfo.productName === productName).productType;

		// coldBrew는 noIce 선택 안되겠금 해야함. =>

		// ice만 되는 애들은 noIce 선택 안되겠금 해야함.
		// ice가 기본적으로 안되는 애들은 ice 선택 자체가 안되게 해야함.
		// bakery는 ulSelectedProductContainer 안에 있는 showOptions가 display = none 이고, delete가 width 100% 되어야함.
		// 차는 detailedOptions가 선택안되게 해야함.(아이스랑 크기 선택만 가능하겠금 해야함.)
		switch (productType) {
			case 'hotCoffee':
				UserInfo.initSelectedProduct(productName);
				SelectOptionContainer.onClickUlSelectProductItemContainer();
				Timer.stopTimer();
				break;
			case 'normalCoffee':
				UserInfo.initSelectedProduct(productName);
				SelectOptionContainer.onClickUlSelectProductItemContainer();
				Timer.stopTimer();
				break;
			case 'iceCoffee':
				UserInfo.initSelectedProduct(productName);
				SelectOptionContainer.onClickUlSelectProductItemContainer();
				Timer.stopTimer();
				break;
			case 'noCaffeinHotBeverage':
				UserInfo.initSelectedProduct(productName);
				SelectOptionContainer.onClickUlSelectProductItemContainer();
				Timer.stopTimer();
				break;
			case 'noCaffeinNormalBeverage':
				UserInfo.initSelectedProduct(productName);
				SelectOptionContainer.onClickUlSelectProductItemContainer();
				Timer.stopTimer();
				break;
			case 'noCaffeinIceBeverage':
				UserInfo.initSelectedProduct(productName);
				SelectOptionContainer.onClickUlSelectProductItemContainer();
				Timer.stopTimer();
				break;
			case 'tea':
				UserInfo.initSelectedProduct(productName);
				SelectOptionContainer.onClickUlSelectProductItemContainer();
				Timer.stopTimer();
				break;
			case 'avocado':
				this.onClickUlSelectProductItemContainer_BakeryAndAvocado(productName);
				break;
			case 'bakery':
				this.onClickUlSelectProductItemContainer_BakeryAndAvocado(productName);
				break;
		}
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
		$$('.buttonItemMinusCount').forEach(button => button?.addEventListener('click', ({ currentTarget }) => this.onClickButtonItemMinusCount(currentTarget)));
	},
	clickButtonItemMinusCount_BakeryAndAvocado(productName) {
		$$('.ulSelectedProductItemContainer').forEach(ul => {
			if (ul.querySelector('.liItemName').textContent === spacingString(productName)) {
				ul.querySelector('.buttonItemMinusCount').addEventListener('click', ({ currentTarget }) => this.onClickButtonItemMinusCount(currentTarget));
			}
		});
	},
	onClickButtonItemMinusCount(currentTarget) {
		const id = +currentTarget.parentElement.parentElement.parentElement.querySelector('.liItemId').textContent;
		const [countValue, priceValue] = UserInfo.setSelectedProductMinusCount(id);

		SelectProductContainer.onClickButtonItemMinusCount(countValue, priceValue, currentTarget);
	},
	clickButtonItemAddCount() {
		$$('.buttonItemAddCount').forEach(button => button?.addEventListener('click', ({ currentTarget }) => this.onClickButtonItemAddCount(currentTarget)));
	},
	clickButtonItemAddCount_BakeryAndAvocado(productName) {
		$$('.ulSelectedProductItemContainer').forEach(ul => {
			if (ul.querySelector('.liItemName').textContent === spacingString(productName)) {
				ul.querySelector('.buttonItemAddCount').addEventListener('click', ({ currentTarget }) => this.onClickButtonItemAddCount(currentTarget));
			}
		});
	},
	onClickButtonItemAddCount(currentTarget) {
		const id = +currentTarget.parentElement.parentElement.parentElement.querySelector('.liItemId').textContent;
		const [countValue, priceValue] = UserInfo.setSelectedProductAddCount(id);

		SelectProductContainer.onClickButtonItemAddCount(countValue, priceValue, currentTarget);
	},
	clickButtonItemOption() {
		$$('.buttonItemOption').forEach(button => button?.addEventListener('click', ({ currentTarget }) => this.onClickButtonItemOption(currentTarget)));
	},
	onClickButtonItemOption(currentTarget) {
		const id = +currentTarget.parentElement.parentElement.querySelector('.liItemId').textContent;

		SelectProductContainer.onClickButtonItemOption(UserInfo.pickSelectedProduct(id));
	},
	clickButtonItemDelete() {
		$$('.buttonItemDelete').forEach(button => button?.addEventListener('click', ({ currentTarget }) => this.onClickButtonItemDelete(currentTarget)));
	},
	clickButtonItemDelete_BakeryAndAvocado(productName) {
		$$('.ulSelectedProductItemContainer').forEach(ul => {
			if (ul.querySelector('.liItemName').textContent === spacingString(productName)) {
				ul.querySelector('.buttonItemDelete').addEventListener('click', ({ currentTarget }) => this.onClickButtonItemDelete(currentTarget));
			}
		});
	},
	onClickButtonItemDelete(currentTarget) {
		const id = +currentTarget.parentElement.parentElement.querySelector('.liItemId').textContent;

		UserInfo.deleteSelectedProduct(id);
		SelectProductContainer.onClickButtonItemDelete(currentTarget, UserInfo.confirmEmptySelectedProducts());
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
			const totalPrice = $('.spanSimpleReviewOrderTotalPrice').textContent;
			ReviewOrderContainer.onClickButtonSimpleReviewOrderPay();
			PayContainer.onClickButtonSimpleReviewOrderPay(totalPrice);
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
			PayContainer.onClickButtonUsingPointAndPay();
		});
	},
	clickButtonUsingPointCancel() {
		$('.buttonUsingPointCancel').addEventListener('click', () => void this.init());
	},
	confirmPhoneNumber() {
		return $('.inputPhoneNumber').value.length === 13;
	},
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
		this.clickH1NavKioskTitle();
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
