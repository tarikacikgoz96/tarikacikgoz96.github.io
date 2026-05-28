let headerHidden = false;

function checkHeaderWrap() {

    const title = document.querySelector(".header-title");

    const right = document.querySelector(".header-right");

    if (!title || !right) return;

    // ŞU AN görünüyorsa kontrol et
    if (!headerHidden) {

        if (right.offsetTop > title.offsetTop + 50) {

            right.style.visibility = "hidden";

            right.style.position = "absolute";

            headerHidden = true;
        }
    }

    // ŞU AN gizliyse tekrar sığıyor mu kontrol et
    else {

        right.style.visibility = "hidden";

        right.style.position = "static";

        // yeniden ölç
        const wrapped =
            right.offsetTop > title.offsetTop + 50;

        if (!wrapped) {

            right.style.visibility = "visible";

            right.style.position = "static";

            headerHidden = false;

        } else {

            right.style.position = "absolute";
        }
    }
}

window.addEventListener("resize", checkHeaderWrap);

window.addEventListener("load", checkHeaderWrap);