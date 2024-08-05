// Import our custom CSS
import '../scss/main.scss'
import './swiper';
import IMask from 'imask';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import {mobileMenuToggle} from './menu';
import {ActiveToggleClass} from './activeToggler';

const phoneElems = document.querySelectorAll('input[type="tel"]')
if (phoneElems) {
    phoneElems.forEach(phoneElem => {
        IMask(
            phoneElem,
            {
                mask: '+{7} 000 000 00 00'
            }
        );
    })
}


export function overlayActivate() {
    const bodyOverlaidClass = 'nako-overlaid'
    const overlayClass = 'nako-overlay'

    if (document.body.querySelector(`.${overlayClass}`)) return

    const overlayElement = document.createElement('div')
    overlayElement.className = overlayClass
    document.body.append(overlayElement)
    document.body.classList.add(bodyOverlaidClass)
}

export function overlayDeactivate() {
    const overlayClass = 'nako-overlay'
    const bodyOverlaidClass = 'nako-overlaid'

    const overlayElement = document.querySelector(`.${overlayClass}`)
    if (overlayElement)
        overlayElement.remove()

    document.body.classList.remove(bodyOverlaidClass)
}

// Menu click
mobileMenuToggle(document.querySelector('.nako-btn.menu'))