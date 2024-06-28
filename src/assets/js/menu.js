export function mobileMenuToggle(element) {
    const asideMenu = document.querySelector(".main-header__side-menu");
    function outerClickListener(event) {

        if (!event.target.closest('.main-header__side-menu'))
            asideMenuToggle(asideMenu);
    }

    function asideMenuToggle(asideMenu) {
        if (!asideMenu) return false;

        if (asideMenu.classList.contains("active")) {
            asideMenu.classList.remove("active");
            element.classList.remove("active")
            document.body.classList.remove("menu-opened")
            document.removeEventListener('click', outerClickListener)
        } else {
            asideMenu.classList.add("active");
            element.classList.add("active")
            document.body.classList.add("menu-opened")
            setTimeout(() => document.addEventListener('click', outerClickListener), 10)
        }
    }

    element.addEventListener("click", (event) => {
        event.preventDefault()
        asideMenuToggle(asideMenu)
    })
}