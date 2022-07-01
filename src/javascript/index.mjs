import { $ } from './utils/ElementTool.js';
import Controller from './controller/Controller.js';

$('#app').appendChild(Controller.setup());
Controller.main();
