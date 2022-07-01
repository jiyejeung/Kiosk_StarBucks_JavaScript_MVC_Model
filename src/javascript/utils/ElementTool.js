export const $ = selector => document.querySelector(selector);

export const $$ = selectors => document.querySelectorAll(selectors);

export const objElement = Object.create({
	element: {},
	createElement(tagName, innerText = '') {
		this.element = document.createElement(tagName);
		this.element.textContent = innerText;
		return this;
	},
	setClassName(className) {
		this.element.className = className;
		return this;
	},
	setAttribute(attributeName, attributeValue) {
		this.element.setAttribute(attributeName, attributeValue);
		return this;
	},
	complete() {
		return this.element;
	},
});
