export default Object.create({
	limitedSeconds: 300,
	handler: true,
	startTimer() {
		setTimeout(() => {
			if (this.handler) {
				this.confirmTimer();
				this.handler && (this.limitedSeconds--, this.startTimer());
			}
		}, 1000);
	},
	confirmTimer() {
		this.limitedSeconds <= 0 && this.stopTimer();
	},
	restartTimer() {
		this.handler = true;
	},
	stopTimer() {
		this.handler = false;
	},
	resetTimer() {
		this.handler = false;
		setTimeout(() => {
			this.resetTimer();
			this.limitedSeconds = 300;
		}, 1000);
	},
});
