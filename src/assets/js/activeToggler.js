import {overlayActivate, overlayDeactivate} from './main.js';

export class ActiveToggleClass {
    toggleTarget;
    toggleActivated = false

    toggleTargetActiveClass = 'active';
    dataToggleTargetAttribute = 'data-toggle-target';
    dataToggleActionAttribute = 'data-toggle-action';

    constructor(activeToggleTarget) {
        this.toggleTarget = activeToggleTarget
        if (!this.toggleTarget) return

        this.toggleButtonsInit()
        this.outerClickListener()
    }

    outerClickListener() {
        document.addEventListener('click', (event) => {
            if (!this.toggleActivated) return

            const cssClasses = this.toggleTarget.className.split(' ')
            let cssClassesString = '.' + cssClasses.join('.')

            if (event.target.closest(cssClassesString) == null) this.deactivate(event)
        })
    }

    toggleButtonsInit() {
        // Поиск кнопок-переключателей в DOM дереве
        document.querySelectorAll(`[${this.dataToggleTargetAttribute}="${this.toggleTarget.id}"]`).forEach(element => {
            this.addToggleBtn(element)
        })

        // Поиск кнопок-действий внутри фильтра
        this.toggleTarget.querySelectorAll(`[${this.dataToggleActionAttribute}]`).forEach(element => {
            const elementAction = element.getAttribute(this.dataToggleActionAttribute)
            element.addEventListener('click', (event) => {
                if (elementAction === 'close') this.deactivate(event)
            })
        })
    }

    addToggleBtn(element) {
        element.addEventListener('click', (event) => {
            this.activeToggle(event)
        })
    }

    activeToggle(event) {
        if (!this.toggleTarget) return

        if (this.toggleTarget.classList.contains(this.toggleTargetActiveClass)) {
            this.deactivate(event)
        } else {
            this.activate(event)
        }
    }

    deactivate(event) {
        this.toggleTarget.classList.remove(this.toggleTargetActiveClass)
        overlayDeactivate()
        this.toggleActivated = false
    }

    activate(event) {
        this.toggleTarget.classList.add(this.toggleTargetActiveClass)
        overlayActivate()
        setTimeout(() => this.toggleActivated = true, 10)
    }
}

const filterToggle = new ActiveToggleClass(document.querySelector('#side-filter'))