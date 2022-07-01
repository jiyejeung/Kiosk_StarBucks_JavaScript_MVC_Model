import SlideImage from '../model/SlideImage.js';
import { $, $$, objElement } from '../utils/ElementTool.js';

export default Object.create({
	orderHandler: 0,
	slideHandler: true,
	init() {
		this.slideAutomatically = true;
		$('.sectionSlideContainer').append(objElement.createElement('UL').setClassName('ulSlideContainer').complete());
		SlideImage.imgUrl.forEach(imgUrl => void $('.ulSlideContainer').append(objElement.createElement('LI').setClassName('liSlideItem').setAttribute('style', `background-image: url(${imgUrl})`).complete()));
	},
	setup() {
		return this.printSectionSlideContainer();
	},
	printSectionSlideContainer() {
		const sectionSlideContainer = objElement.createElement('SECTION').setClassName('sectionSlideContainer').complete();
		sectionSlideContainer.append(this.printUlSlideContainer(), this.printH3SlideTouchText());

		return sectionSlideContainer;
	},
	printUlSlideContainer() {
		const ulSlideContainer = objElement.createElement('UL').setClassName('ulSlideContainer').complete();
		SlideImage.getImgUrl().then(() =>
			SlideImage.imgUrl.forEach(imgUrl => void ulSlideContainer.append(objElement.createElement('LI').setClassName('liSlideItem').setAttribute('style', `background-image: url(${imgUrl})`).complete()))
		);

		return ulSlideContainer;
	},
	printH3SlideTouchText() {
		return objElement.createElement('H3', 'Please Touch Here!').setClassName('h3SlideTouchText').complete();
	},
	showSectionContainer() {
		setTimeout(() => {
			$('.sectionSlideContainer').style.display = 'inline-block';
			setTimeout(() => {
				$('.sectionSlideContainer').style.opacity = 1;
				this.startSlideAutomatically();
			}, 10);
		}, 300);
	},
	hideSectionContainer() {
		$('.sectionSlideContainer').style.opacity = 0;
		setTimeout(() => {
			$('.sectionSlideContainer').style.display = 'none';
			$('.ulSlideContainer').remove();
			this.slideHandler = false;
		}, 300);
	},
	startSlideAutomatically() {
		setTimeout(() => {
			this.slideHandler && this.slideAutomatically();
		}, 5000);
	},
	slideAutomatically() {
		$$('.liSlideItem')[0].style.width = 0;
		setTimeout(() => {
			$$('.liSlideItem')[0]?.remove();
			$('.ulSlideContainer')?.appendChild(objElement.createElement('LI').setClassName('liSlideItem').setAttribute('style', `background-image: url(${SlideImage.imgUrl[this.orderHandler]})`).complete());
			this.orderHandler++;
			this.orderHandler = this.orderHandler < 3 ? this.orderHandler : 0;
			setTimeout(() => {
				this.slideAutomatically();
			}, 5000);
		}, 1500);
	},
});
