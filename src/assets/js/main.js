// Import our custom CSS
import '../scss/main.scss'
import './swiper';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import {mobileMenuToggle} from './menu';

// Menu click
mobileMenuToggle(document.querySelector('.nako-btn.menu'))