// utils
import { $ } from './utils/ElementTool.js';

// controller
import Controller from './controller/Controller.js';

(() => {
	Controller.setup()
		.then(res => void $('#app').appendChild(res))
		.then(() => void Controller.main())
		.catch(err => void console.log(err))
		.finally(() => void console.log('This website was made just for portfolio!\nPlease call me +82-10-4820-1962,\nif you have any question!'));
})();
