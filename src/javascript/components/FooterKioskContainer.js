// utils
import { $, objElement } from '../utils/ElementTool.js';

export default Object.create({
	// initialize method
	init() {
		this.hideFooterKioskContainer();
	},

	// setup method
	setup() {
		const footerKioskContainer = this.printFooterKioskContainer();
		const divEmail = this.printDivEmail();
		const divContactMe = this.printDivContactMe();

		footerKioskContainer.append(divEmail, divContactMe);

		return footerKioskContainer;
	},

	// print methods
	printFooterKioskContainer() {
		return objElement.createElement('footer').setClassName('footerKioskContainer').complete();
	},
	printDivEmail() {
		return objElement.createElement('DIV', 'Email: jiyejeung@gmail.com').setClassName('divEmail').complete();
	},
	printDivContactMe() {
		return objElement
			.createElement('DIV', "This website was solely created for the purposes of a student's portfolio. If you have any questions, feel free to reach out at the above email address!")
			.setClassName('divContactMe')
			.complete();
	},

	// event callback methods
	onClickButtonTakeOut(currentMedia) {
		switch (currentMedia) {
			case 'desktop':
				this.showFooterKioskContainer();
				break;
			case 'tablet':
				this.hideFooterKioskContainer();
				break;
		}
	},
	onClickButtonStore(currentMedia) {
		switch (currentMedia) {
			case 'desktop':
				this.showFooterKioskContainer();
				break;
			case 'tablet':
				this.hideFooterKioskContainer();
				break;
		}
	},
	onClickButtonPay() {
		this.hideFooterKioskContainer();
	},
	onClickButtonSimpleReviewOrderBack(currentMedia) {
		switch (currentMedia) {
			case 'desktop':
				this.showFooterKioskContainer();
				break;
			case 'tablet':
				this.hideFooterKioskContainer();
				break;
		}
	},

	// action methods
	showFooterKioskContainer() {
		$('.footerKioskContainer').style.display = 'flex';
		setTimeout(() => ($('.footerKioskContainer').style.opacity = 1), 0);
	},
	hideFooterKioskContainer() {
		$('.footerKioskContainer').style.opacity = 0;
		setTimeout(() => ($('.footerKioskContainer').style.display = 'none'), 300);
	},
});
