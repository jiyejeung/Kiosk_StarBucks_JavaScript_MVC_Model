// utils
import { $, objElement } from '../utils/ElementTool.js';
import { convertTime } from '../utils/NumberTool.js';

export default Object.create({
	// initialize method
	init() {
		this.hideNavKioskContainer();
		setTimeout(() => this.setDivKioskTimer(180), 300);
	},

	// setup method
	setup() {
		const navKioskContainer = this.printNavKioskContainer();
		const h1NavTitle = this.printH1NavTitle();
		const divKioskTimer = this.printDivKioskTimer();

		navKioskContainer.append(h1NavTitle, divKioskTimer);

		return navKioskContainer;
	},

	// print methods
	printNavKioskContainer() {
		return objElement.createElement('NAV').setClassName('navKioskContainer').complete();
	},
	printH1NavTitle() {
		return objElement.createElement('H1', 'STARBUCKS').setClassName('h1NavKioskTitle').complete();
	},
	printDivKioskTimer() {
		return objElement.createElement('DIV', '03:00').setClassName('divKioskTimer').complete();
	},

	// event callback methods
	onClickButtonTakeOut() {
		this.showNavKioskContainer();
	},
	onClickButtonStore() {
		this.showNavKioskContainer();
	},
	onClickButtonPay() {
		this.hideNavKioskContainer();
	},
	onClickButtonSimpleReviewOrderBack() {
		this.showNavKioskContainer();
	},
	onClickUlSelectProductItemContainer(currentMedia) {
		switch (currentMedia) {
			case 'desktop':
				this.showNavKioskContainer();
				break;
			case 'tablet':
				this.hideNavKioskContainer();
				break;
		}
	},
	onClickButtonAddToCart() {
		this.showNavKioskContainer();
	},
	onClickButtonCancelAddingToCart() {
		this.showNavKioskContainer();
	},

	// action methods
	showNavKioskContainer() {
		$('.navKioskContainer').style.display = 'flex';
		setTimeout(() => ($('.navKioskContainer').style.opacity = 1), 0);
	},
	hideNavKioskContainer() {
		$('.navKioskContainer').style.opacity = 0;
		setTimeout(() => ($('.navKioskContainer').style.display = 'none'), 300);
	},

	// customization methods
	setDivKioskTimer(time) {
		$('.divKioskTimer').textContent = convertTime(parseInt(time));
	},
});
