import { objElement } from '../utils/ElementTool.js';

export default Object.create({
	setup() {
		const navKioskContainer = this.printNavKioskContainer();
		const buttonHome = this.printButtonHome();
		const divLogoContainer = this.printDivLogoContainer();
		const h1NavTitle = this.printH1NavTitle();
		const divKioskTimer = this.printDivKioskTimer();

		buttonHome.appendChild(divLogoContainer);
		navKioskContainer.append(buttonHome, h1NavTitle, divKioskTimer);

		return navKioskContainer;
	},
	printNavKioskContainer() {
		return objElement.createElement('NAV').setClassName('navKioskContainer').complete();
	},
	printButtonHome() {
		return objElement.createElement('BUTTON').setClassName('buttonKioskHome').complete();
	},
	printDivLogoContainer() {
		return objElement.createElement('DIV').setClassName('divLogoContainer').setAttribute('style', 'background-image: url(./images/logo.png)').complete();
	},
	printH1NavTitle() {
		return objElement.createElement('H1', 'STARBUCKS').setClassName('h1NavKioskTitle').complete();
	},
	printDivKioskTimer() {
		return objElement.createElement('DIV', '120').setClassName('divKioskTimer').complete();
	},
});
