import { objElement } from '../utils/ElementTool.js';

export default Object.create({
	printDivEmail() {
		return objElement.createElement('DIV', 'Email: jiyejeung@gmail.com').setClassName('divEmail').complete();
	},
	printDivContactMe() {
		return objElement.createElement('DIV', "This website was created as part of my portfolio. If you have any questions, please don't hesitate to send me a message!").setClassName('divContactMe').complete();
	},
	printFooterKioskContainer() {
		return objElement.createElement('footer').setClassName('footerKioskContainer').complete();
	},
	setup() {
		const footerKioskContainer = this.printFooterKioskContainer();
		const divEmail = this.printDivEmail();
		const divContactMe = this.printDivContactMe();

		footerKioskContainer.append(divEmail, divContactMe);

		return footerKioskContainer;
	},
});
