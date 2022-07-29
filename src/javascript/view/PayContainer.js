import Controller from '../controller/Controller.js';
import { $, objElement } from '../utils/ElementTool.js';
import { addComma } from '../utils/NumberTool.js';

export default Object.create({
	timer: 4,
	init() {
		this.hideSectionPayContainer();
		setTimeout(() => {
			this.timer = 4;
			this.initFirstH2PayComplete();
			this.initH3PayTotalPrice();
			this.initH3PayPointsToBeAccumulated();
		}, 300);
	},
	setup() {
		const sectionPayContainer = this.printSectionPayContainer();
		const fragment = document.createDocumentFragment();

		fragment.append();

		sectionPayContainer.appendChild(fragment);

		return sectionPayContainer;
	},
	printSectionPayContainer() {
		return objElement.createElement('SECTION').setClassName('sectionPayContainer').complete();
	},
	printH2PayComplete() {
		return objElement.createElement('H2', 'Please input your credit card.').setClassName('h2PayComplete').complete();
	},
	printH3PayTotalPrice() {
		return objElement.createElement('H3').setClassName('h3PayTotalPrice').complete();
	},
	printH3PayPointsToBeAccumulated() {
		return objElement.createElement('H3').setClassName('h3PayPointsToBeAccumulated').complete();
	},
	initFirstH2PayComplete() {
		$('.h2PayComplete').textContent = 'Please input your credit card.';
	},
	initSecondH2PayComplete() {
		$('.h2PayComplete').textContent = 'Thank you for using STARBUCKS.';
	},
	initH3PayTotalPrice() {
		$('.h3PayTotalPrice').style.display = 'none';
		$('.h3PayTotalPrice').textContent = 'Total Price: 0';
	},
	initH3PayPointsToBeAccumulated() {
		$('.h3PayPointsToBeAccumulated').style.display = 'none';
		$('.h3PayPointsToBeAccumulated').textContent = 'Points To Be Accumulated: 0';
	},
	setH3PayTotalPrice(totalPrice) {
		$('.h3PayTotalPrice').style.display = 'inline-block';
		$('.h3PayTotalPrice').textContent = `Total Price: ${addComma(totalPrice)}`;
	},
	setH3PayPointsToBeAccumulated(points) {
		$('.h3PayPointsToBeAccumulated').style.display = 'inline-block';
		$('.h3PayPointsToBeAccumulated').textContent = `Points To Be Accumulated: ${addComma(points)}`;
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
	onClickButtonSimpleReviewOrderPay() {
		this.showSectionPayContainer();
		setTimeout(() => {
			this.startTimer();
		}, 300);
	},
});
