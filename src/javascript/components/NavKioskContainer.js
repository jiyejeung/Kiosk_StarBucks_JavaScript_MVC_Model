import { $, objElement } from '../utils/ElementTool.js';
import { convertTime } from '../utils/NumberTool.js';

export default Object.create({
	init() {},
	setup() {
		const navKioskContainer = this.printNavKioskContainer();
		const h1NavTitle = this.printH1NavTitle();
		const divKioskTimer = this.printDivKioskTimer();

		navKioskContainer.append(h1NavTitle, divKioskTimer);

		return navKioskContainer;
	},
	printNavKioskContainer() {
		return objElement.createElement('NAV').setClassName('navKioskContainer').complete();
	},
	printH1NavTitle() {
		return objElement.createElement('H1', 'STARBUCKS').setClassName('h1NavKioskTitle').complete();
	},
	printDivKioskTimer() {
		return objElement.createElement('DIV', '03:00').setClassName('divKioskTimer').complete();
	},
	showNavKioskContainer() {
		$('.navKioskContainer').style.display = 'flex';
		setTimeout(() => ($('.navKioskContainer').style.opacity = 1), 0);
	},
	hideNavKioskContainer() {
		$('.navKioskContainer').style.opacity = 1;
		setTimeout(() => ($('.navKioskContainer').style.display = 'none'), 300);
	},
	setDivKioskTimer(time) {
		$('.divKioskTimer').textContent = convertTime(time);
	},
	startTimer() {},
	stopTimer() {},
});
