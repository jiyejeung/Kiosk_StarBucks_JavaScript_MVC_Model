export default Object.create({
	payInfo: { estimatedPayment: 0, currentPoints: 0, pointsToBeAccumulated: 0, totalPoints: 0 },
	initPayInfo() {
		this.payInfo = { estimatedPayment: 0, currentPoints: 0, pointsToBeAccumulated: 0, totalPoints: 0 };
	},
	getPayInfo(userInfo) {},
});
