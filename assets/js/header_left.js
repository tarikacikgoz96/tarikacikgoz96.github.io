function checkHeaderStack() {

    const logo = document.querySelector(".header-logo");

    const title = document.querySelector(".header-title");

    const header = document.querySelector(".header-main");

    const nav = document.querySelector(".header-nav");

    if (!logo || !title || !header || !nav) return;

    // Ölçüm için geçici normal layout
    header.classList.remove("mobile-stack");

    nav.classList.remove("mobile-stack");

    const wrapped =
        title.offsetTop > logo.offsetTop + 20;

    // Gerçek son durum
    if (wrapped) {

        header.classList.add("mobile-stack");

        nav.classList.add("mobile-stack");

    }
}

window.addEventListener("resize", checkHeaderStack);

window.addEventListener("load", checkHeaderStack);