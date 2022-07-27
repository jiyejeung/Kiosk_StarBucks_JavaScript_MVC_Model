import Controller from '../controller/Controller.js';
import { $, objElement } from '../utils/ElementTool.js';

export default Object.create({
	timer: 4,
	init() {
		this.hideSectionPayContainer();
		setTimeout(() => (this.timer = 4), 300);
	},
	setup() {
		return this.printSectionPayContainer();
	},
	printSectionPayContainer() {
		return objElement.createElement('SECTION', 'Please input your card!').setClassName('sectionPayContainer').complete();
	},
	startTimer() {
		if (this.timer) {
			setTimeout(() => {
				this.timer--;
				this.startTimer();
			}, 1000);
		} else {
			$('.sectionPayContainer').textContent = 'Thank you for using STARBUCKS';
			setTimeout(() => Controller.init(), 3000);
		}
	},
	showSectionPayContainer() {
		$('.sectionPayContainer').style.display = 'flex';
		setTimeout(() => ($('.sectionPayContainer').style.opacity = 1), 0);
	},
	hideSectionPayContainer() {
		$('.sectionPayContainer').style.opacity = 0;
		setTimeout(() => ($('.sectionPayContainer').style.display = 'none'), 300);
	},
	onClickButtonUsingPointAndPay() {
		this.showSectionPayContainer();
		setTimeout(() => {
			this.startTimer();
		}, 300);
	},
});
