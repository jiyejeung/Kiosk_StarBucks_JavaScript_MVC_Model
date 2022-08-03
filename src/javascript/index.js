// utils
import { $ } from './utils/ElementTool.js';
import MediaQuery from './utils/MediaQuery.js';

// controller
import Controller from './controller/Controller.js';

(() => {
	Controller.setup()
		.then(res => $('#app').appendChild(res))
		.then(() => Controller.main())
		.catch(err => console.log(err))
		.finally(() => console.log('This website was made just for portfolio!\nPlease call me +82-10-4820-1962,\nif you have any question!'));

	window.addEventListener('resize', () => {
		MediaQuery.currentMediaQuery();
		Controller.init();
	});
})();
