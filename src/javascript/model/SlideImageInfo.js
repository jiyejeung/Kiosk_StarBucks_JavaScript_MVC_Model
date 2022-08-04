export default Object.create({
	imageUrl: [],
	getImageUrl() {
		fetch('./php/controller.php?page=slideImageInfo')
			.then(res => res.json())
			.then(res => (this.imageUrl = res))
			.catch(err => console.log(err));
	},
});
