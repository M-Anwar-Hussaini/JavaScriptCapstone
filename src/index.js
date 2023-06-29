import './css/style.css';
import DOM from './modules/DOM.js';
import PopUp from './modules/popUp.js';

const dom = new DOM();
const popUp = new PopUp();

dom.displayAllCountries();
popUp.displayPopUp();
