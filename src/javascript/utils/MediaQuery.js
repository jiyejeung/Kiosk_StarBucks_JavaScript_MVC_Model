export default Object.create({
	desktopMediaQuery: window.matchMedia('screen and (min-width: 1024px)'),
	tabletMediaQuery: window.matchMedia('screen and (max-width: 1024px)'),
	currentMedia: '',
	currentMediaQuery() {
		if (this.desktopMediaQuery.matches) this.currentMedia = 'desktop';
		if (this.tabletMediaQuery.matches) this.currentMedia = 'tablet';
	},
});
