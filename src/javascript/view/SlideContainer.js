// utils
import { $, $$, objElement } from '../utils/ElementTool.js';

// controller
import Controller from '../controller/Controller.js';

export default Object.create({
	// handler properties
	orderHandler: 0,
	slideHandler: true,

	// init method
	init() {
		this.hideSectionContainer();
		this.slideHandler = true;
		this.orderHandler = 0;
		this.removeLiSlideItems();
		this.createLiSlideItems();
	},

	// setup method
	setup() {
		const sectionSlideContainer = this.printSectionSlideContainer();
		const ulSlideContainer = this.printUlSlideContainer();
		const h3SlideTouchText = this.printH3SlideTouchText();
		const liSlideItems = this.printLiSlideItems();

		ulSlideContainer.appendChild(liSlideItems);
		sectionSlideContainer.append(ulSlideContainer, h3SlideTouchText);

		return sectionSlideContainer;
	},

	// print methods
	printSectionSlideContainer() {
		return objElement.createElement('SECTION').setClassName('sectionSlideContainer').complete();
	},
	printH3SlideTouchText() {
		return objElement.createElement('H3', 'Welcome To STARBUCKS!').setClassName('h3SlideTouchText').complete();
	},
	printUlSlideContainer() {
		return objElement.createElement('UL').setClassName('ulSlideContainer').complete();
	},
	printLiSlideItems() {
		const fragment = document.createDocumentFragment();

		Controller.slideImageInfo().forEach(imageUrl => void fragment.append(this.printLiSlideItem(imageUrl)));

		return fragment;
	},
	printLiSlideItem(imageUrl) {
		return objElement.createElement('LI').setClassName('liSlideItem').setAttribute('style', `background-image: url(${imageUrl})`).complete();
	},

	// event callback methods
	onClickSectionIntroContainer() {
		this.showSectionContainer();
		setTimeout(() => this.startSlideAutomatically(), 300);
	},
	onClickSectionSlideContainer() {
		this.hideSectionContainer();
	},

	// action methods
	showSectionContainer() {
		$('.sectionSlideContainer').style.display = 'inline-block';
		setTimeout(() => ($('.sectionSlideContainer').style.opacity = 1), 0);
	},
	hideSectionContainer() {
		$('.sectionSlideContainer').style.opacity = 0;
		setTimeout(() => {
			$('.sectionSlideContainer').style.display = 'none';
			this.slideHandler = false;
		}, 300);
	},
	slideAutomatically() {
		if (this.slideHandler) {
			$$('.liSlideItem')[0].style.width = 0;
			setTimeout(() => {
				$$('.liSlideItem')[0]?.remove();
				$('.ulSlideContainer')?.appendChild(this.printLiSlideItem(Controller.slideImageInfo()[this.orderHandler]));
				this.orderHandler++;
				this.orderHandler = this.orderHandler < 3 ? this.orderHandler : 0;
				setTimeout(() => this.slideHandler && this.slideAutomatically(), 3000);
			}, 500);
		}
	},
	startSlideAutomatically() {
		setTimeout(() => this.slideHandler && this.slideAutomatically(), 2500);
	},
	createLiSlideItems() {
		$('.ulSlideContainer').appendChild(this.printLiSlideItems());
	},
	removeLiSlideItems() {
		$$('.liSlideItem').forEach(li => void li.remove());
	},
});
