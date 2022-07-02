export default Object.create({
	imgUrl: [],
	async getImgUrl() {
		await fetch('http://localhost:3000/exampleSlideImage')
			.then(res => res.json())
			.then(res => (this.imgUrl = [...res]))
			.catch(err => err);
	},
});
