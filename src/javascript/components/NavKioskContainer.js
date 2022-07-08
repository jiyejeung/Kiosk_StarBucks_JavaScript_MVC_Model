import { objElement } from '../utils/ElementTool.js';

export default Object.create({
	setup() {
		this.printNavKioskContainer();
	},
	printNavKioskContainer() {
		const navKioskContainer = objElement.create('NAV').setClassName('navKioskContainer').complete();
		const fragment = document.createDocumentFragment();

		fragment.append(this.printButtonHome(), this.printH1NavTitle(), this.printDivKioskTimer());
		navKioskContainer.appendChild(fragment);

		return navKioskContainer;
	},
	printButtonHome() {
		const buttonHome = objElement.create('BUTTON').setClassName('buttonKioskHome').complete();
		buttonHome.appendChild(this.printHome());

		return buttonHome;
	},
	printIHome() {
		return objElement.create('I').setClassName('fa-solid fa-house iHome').complete();
	},
	printH1NavTitle() {
		return objElement.create('H1', 'STARBUCKS').setClassName('h1NavKioskTitle').complete();
	},
	printDivKioskTimer() {
		return objElement.create('DIV', '120').setClassName('divKioskTimer').complete();
	},
});
