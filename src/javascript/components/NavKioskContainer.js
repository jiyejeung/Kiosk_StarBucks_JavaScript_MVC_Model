import { objElement } from '../utils/ElementTool.js';

export default Object.create({
	setup() {
		const navKioskContainer = this.printNavKioskContainer();
		const h1NavTitle = this.printH1NavTitle();
		const divKioskTimer = this.printDivKioskTimer();

		navKioskContainer.append( h1NavTitle, divKioskTimer);

		return navKioskContainer;
	},
	printNavKioskContainer() {
		return objElement.createElement('NAV').setClassName('navKioskContainer').complete();
	},
	printH1NavTitle() {
		return objElement.createElement('H1', 'STARBUCKS').setClassName('h1NavKioskTitle').complete();
	},
	printDivKioskTimer() {
		return objElement.createElement('DIV', '120').setClassName('divKioskTimer').complete();
	},
});
