export default Object.create({
	imageUrl: [],
	async getImageUrl() {
		await fetch('http://localhost:3000/exampleSlideImage')
			.then(res => res.json())
			.then(res => (this.imageUrl = [...res]))
			.catch(err => console.log(err));
	},
});
