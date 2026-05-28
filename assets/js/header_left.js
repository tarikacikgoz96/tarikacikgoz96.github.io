function checkHeaderStack() {

    const logo = document.querySelector(".header-logo");

    const title = document.querySelector(".header-title");

    const header = document.querySelector(".header-main");

    if (!logo || !title || !header) return;

    // Reset
    header.classList.remove("mobile-stack");

    const wrapped =
        title.offsetTop > logo.offsetTop + 20;

    // Mobile header mode
    if (wrapped) {

        header.classList.add("mobile-stack");

    }
}



function checkNavWrap() {

    const nav = document.querySelector(".header-nav");

    const toggle = document.querySelector(".menu-toggle");

    if (!nav || !toggle) return;

    // Reset
    nav.classList.remove("mobile-stack");

    toggle.classList.remove("mobile-stack");

    // İlk link referansı
    const firstLink =
        nav.querySelector("a");

    if (!firstLink) return;

    // Herhangi biri alt satıra düştü mü?
    const wrapped =
        Array.from(nav.querySelectorAll("a"))
        .some(link =>
            link.offsetTop > firstLink.offsetTop
        );

    // Mobile nav mode
    if (wrapped) {

        nav.classList.add("mobile-stack");

        toggle.classList.add("mobile-stack");

    }
}



// Sayfa yüklenince
window.addEventListener("load", () => {

    checkHeaderStack();

    checkNavWrap();

    const toggle =
        document.querySelector(".menu-toggle");

    const nav =
        document.querySelector(".header-nav");

    if (toggle && nav) {

        toggle.addEventListener("click", () => {

            nav.classList.toggle("open");

        });
    }
});



// Resize
window.addEventListener("resize", () => {

    checkHeaderStack();

    checkNavWrap();

});