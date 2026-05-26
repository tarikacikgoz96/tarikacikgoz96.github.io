const toc = document.getElementById("toc");

const headings = document.querySelectorAll("main h1, main h2, main h3");

headings.forEach((heading, index) => {

    const id = "heading-" + index;

    heading.id = id;

    const link = document.createElement("a");

    link.href = "#" + id;

    link.textContent = heading.textContent;

    link.classList.add("toc-link");

    toc.appendChild(link);

});