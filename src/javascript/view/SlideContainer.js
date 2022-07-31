import Controller from '../controller/Controller.js';
import { $, $$, objElement } from '../utils/ElementTool.js';

export default Object.create({
	init() {
		this.slideHandler = true;
		this.orderHandler = 0;
		this.removeLiSlideItems();
		this.createLiSlideItems();
	},
	setup() {
		const sectionSlideContainer = this.printSectionSlideContainer();
		const ulSlideContainer = this.printUlSlideContainer();
		const h3SlideTouchText = this.printH3SlideTouchText();
		const liSlideItems = this.printLiSlideItems();

		ulSlideContainer.appendChild(liSlideItems);
		sectionSlideContainer.append(ulSlideContainer, h3SlideTouchText);

		return sectionSlideContainer;
	},
	orderHandler: 0,
	slideHandler: true,
	printSectionSlideContainer() {
		return objElement.createElement('SECTION').setClassName('sectionSlideContainer').complete();
	},
	printH3SlideTouchText() {
		return objElement.createElement('H3', 'Please Touch Here!').setClassName('h3SlideTouchText').complete();
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
	startSlideAutomatically() {
		setTimeout(() => this.slideHandler && this.slideAutomatically(), 2500);
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
	removeLiSlideItems() {
		$$('.liSlideItem').forEach(li => void li.remove());
	},
	createLiSlideItems() {
		$('.ulSlideContainer').appendChild(this.printLiSlideItems());
	},
	onClickSectionIntroContainer() {
		this.showSectionContainer();
		setTimeout(() => this.startSlideAutomatically(), 300);
	},
	onClickSectionSlideContainer() {
		this.hideSectionContainer();
	},
});
