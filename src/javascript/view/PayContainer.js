// utils
import { $, objElement } from '../utils/ElementTool.js';
import { addComma } from '../utils/NumberTool.js';
import { subComma } from '../utils/StringTool.js';

// controller
import Controller from '../controller/Controller.js';

export default Object.create({
	// init method
	init() {
		this.hideSectionPayContainer();
		setTimeout(() => {
			this.hideDivPayReviewContainer();
			this.hideH2PayInputCard();
			this.hideH3PayTotalPrice();
			this.hideH2PayComplete();
		}, 300);
	},

	// setup method
	setup() {
		const sectionPayContainer = this.printSectionPayContainer();
		const divPayReviewContainer = this.appendDivPayReviewContainer();
		const h2PayComplete = this.printH2PayComplete();
		const fragment = document.createDocumentFragment();

		fragment.append(divPayReviewContainer, h2PayComplete);

		sectionPayContainer.appendChild(fragment);

		return sectionPayContainer;
	},

	// print methods
	printSectionPayContainer() {
		return objElement.createElement('SECTION').setClassName('sectionPayContainer').complete();
	},
	appendDivPayReviewContainer() {
		const divPayReviewContainer = this.printDivPayReviewContainer();
		const h2PayInputCard = this.printH2PayInputCard();
		const h3PayTotalPrice = this.printH3PayTotalPrice();
		const fragment = document.createDocumentFragment();

		fragment.append(h2PayInputCard, h3PayTotalPrice);

		divPayReviewContainer.appendChild(fragment);

		return divPayReviewContainer;
	},
	printDivPayReviewContainer() {
		return objElement.createElement('DIV').setClassName('divPayReviewContainer').complete();
	},
	printH2PayInputCard() {
		return objElement.createElement('H2', 'Please input your credit card.').setClassName('h2PayInputCard').complete();
	},
	printH3PayTotalPrice() {
		return objElement.createElement('H3').setClassName('h3PayTotalPrice').complete();
	},
	printH2PayComplete() {
		return objElement.createElement('H2', '스타벅스를 이용해 주셔서 진심으로 감사 드립니다.').setClassName('h2PayComplete').complete();
	},

	// event callback methods
	onClickButtonSimpleReviewOrderPay(totalPrice) {
		this.setH3PayTotalPrice(totalPrice);
		this.setH2PayCompleteDirectly();
		this.showH2PayInputCard();
		this.showH3PayTotalPrice();
		this.showDivPayReviewContainer();
		this.hideH2PayComplete();
		this.showSectionPayContainer();
		setTimeout(() => {
			this.hideDivPayReviewContainer();
			setTimeout(() => this.showH2PayComplete(), 300);
			setTimeout(() => Controller.init(), 5000);
		}, 5000);
	},
	onClickButtonUsingPointAndPay() {
		const estimatedPayment = subComma($('.spanUsingPointEstimatedPayment').textContent);
		const currentPoints = subComma($('.spanUsingPointTotalPoint').textContent);
		const pointsToBeAccumulated = parseInt(estimatedPayment * 0.1);
		const totalPoints = currentPoints + pointsToBeAccumulated;

		if (estimatedPayment) {
			this.showSectionPayContainer();
			this.showDivPayReviewContainer();
			this.setH3PayTotalPrice(addComma(estimatedPayment));
			this.setH2PayComplete(addComma(pointsToBeAccumulated));
			this.showH2PayInputCard();
			this.showH3PayTotalPrice();
			setTimeout(() => {
				this.hideDivPayReviewContainer();
				setTimeout(() => {
					this.showH2PayComplete();
					Controller.updateUserInfo(totalPoints)
						.then(() => Controller.postUserInfo())
						.then(() => setTimeout(() => Controller.init(), 5000))
						.catch(err => console.log(err));
				}, 300);
			}, 5000);
		} else {
			this.setH2PayCompleteDirectly();
			this.showH2PayComplete();
			this.showSectionPayContainer();
			setTimeout(() => {
				Controller.updateUserInfo(totalPoints)
					.then(() => Controller.postUserInfo())
					.then(() => setTimeout(() => Controller.init(), 5000))
					.catch(err => console.log(err));
			}, 5000);
		}
	},

	// action methods
	showSectionPayContainer() {
		$('.sectionPayContainer').style.display = 'flex';
		setTimeout(() => ($('.sectionPayContainer').style.opacity = 1), 0);
	},
	showDivPayReviewContainer() {
		$('.divPayReviewContainer').style.display = 'flex';
		setTimeout(() => ($('.divPayReviewContainer').style.opacity = 1), 0);
	},
	showH2PayInputCard() {
		$('.h2PayInputCard').style.display = 'block';
		setTimeout(() => ($('.h2PayInputCard').style.opacity = 1), 0);
	},
	showH3PayTotalPrice() {
		$('.h3PayTotalPrice').style.display = 'block';
	},
	showH2PayComplete() {
		$('.h2PayComplete').style.display = 'block';
		setTimeout(() => ($('.h2PayComplete').style.opacity = 1), 0);
	},
	hideSectionPayContainer() {
		$('.sectionPayContainer').style.opacity = 0;
		setTimeout(() => ($('.sectionPayContainer').style.display = 'none'), 300);
	},
	hideDivPayReviewContainer() {
		$('.divPayReviewContainer').style.opacity = 0;
		setTimeout(() => ($('.divPayReviewContainer').style.display = 'none'), 300);
	},
	hideH2PayInputCard() {
		$('.h2PayInputCard').style.opacity = 0;
		setTimeout(() => ($('.h2PayInputCard').style.display = 'none'), 300);
	},
	hideH3PayTotalPrice() {
		$('.h3PayTotalPrice').style.display = 'none';
	},
	hideH2PayComplete() {
		$('.h2PayComplete').style.opacity = 0;
		setTimeout(() => ($('.h2PayComplete').style.display = 'none'), 300);
	},
	hideDivPayReviewContainerDirectly() {
		$('.divPayReviewContainer').display = 'none';
	},

	// customization methods
	setH3PayTotalPrice(totalPrice) {
		$('.h3PayTotalPrice').style.display = 'block';
		$('.h3PayTotalPrice').textContent = `Total Price: ${totalPrice}`;
	},
	setH2PayComplete(points) {
		$('.h2PayComplete').textContent = `${points}포인트가 적립되었습니다. 스타벅스를 이용해 주셔서 진심으로 감사드립니다.`;
	},
	setH2PayCompleteDirectly() {
		$('.h2PayComplete').textContent = '스타벅스를 이용해 주셔서 진심으로 감사드립니다.';
	},
});
