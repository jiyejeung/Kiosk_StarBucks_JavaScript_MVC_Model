export default Object.create({
	limitedSeconds: 180,
	handler: true,
	startTimer() {
		setTimeout(() => {
			if (this.handler) {
				this.confirmTimer();
				this.limitedSeconds -= 0.1;
				this.startTimer();
			}
		}, 100);
	},
	confirmTimer() {
		this.limitedSeconds <= 0 && this.resetTimer();
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
			this.restartTimer();
			this.limitedSeconds = 180;
		}, 300);
	},
});
