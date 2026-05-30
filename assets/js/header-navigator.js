window.addEventListener("DOMContentLoaded", () => {

    const toggle =
        document.querySelector(".menu-toggle");

    const nav =
        document.querySelector(".header-nav");

    if (toggle && nav) {

        toggle.addEventListener("click", () => {

            nav.classList.toggle("open");

        });

        window.addEventListener("resize", () => {

            if (window.innerWidth > 992) {

                nav.classList.remove("open");

            }

        });
    }
});