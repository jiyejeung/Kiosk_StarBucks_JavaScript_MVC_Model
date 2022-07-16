import { $, objElement } from '../utils/ElementTool.js';

export default Object.create({
	setup() {
		const footerKioskContainer = this.printFooterKioskContainer();
		const divEmail = this.printDivEmail();
		const divContactMe = this.printDivContactMe();

		footerKioskContainer.append(divEmail, divContactMe);

		return footerKioskContainer;
	},
	printFooterKioskContainer() {
		return objElement.createElement('footer').setClassName('footerKioskContainer').complete();
	},
	printDivEmail() {
		return objElement.createElement('DIV', 'Email: jiyejeung@gmail.com').setClassName('divEmail').complete();
	},
	printDivContactMe() {
		return objElement.createElement('DIV', "This website was created as part of my portfolio. If you have any questions, please don't hesitate to send me a message!").setClassName('divContactMe').complete();
	},
	showFooterKioskContainer() {
		$('.footerKioskContainer').style.display = 'flex';
		setTimeout(() => ($('.footerKioskContainer').style.opacity = 1), 0);
	},
	hideFooterKioskContainer() {
		$('.footerKioskContainer').style.opacity = 1;
		setTimeout(() => ($('.footerKioskContainer').style.display = 'none'), 300);
	},
});
