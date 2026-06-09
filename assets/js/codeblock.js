document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll("[class*='language-']").forEach(block => {

        const match =
            block.className.match(/language-([a-zA-Z0-9_-]+)/);

        if (!match) return;

        const language = match[1];

        const pre =
            block.querySelector("pre");

        if (!pre) return;

        const label =
            document.createElement("div");

        label.className = "code-language";

        label.textContent =
            language.toUpperCase();

        pre.prepend(label);

    });

    hljs.highlightAll();

});