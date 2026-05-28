let headerHidden = false;

function checkHeaderWrap() {

    const title = document.querySelector(".header-title");

    const right = document.querySelector(".header-right");

    if (!title || !right) return;

    if (!headerHidden) {

        if (right.offsetTop > title.offsetTop + 50) {

            right.classList.add("header-right-hidden");

            headerHidden = true;
        }
    }
    else {

        right.classList.remove("header-right-hidden");

        const wrapped =
            right.offsetTop > title.offsetTop + 50;

        if (!wrapped) {

            headerHidden = false;

        } else {

            right.classList.add("header-right-hidden");

        }
    }
}