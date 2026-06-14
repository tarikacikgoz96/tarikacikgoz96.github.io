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

        label.innerHTML = `
            <span>${language.toUpperCase()}</span>
            <button class="copy-btn">Copy</button>
        `;

        pre.prepend(label);

        const copyButton =
            label.querySelector(".copy-btn");

        copyButton.addEventListener("click", async () => {

            const code =
                pre.querySelector("code")?.innerText || "";

            await navigator.clipboard.writeText(code);

            copyButton.textContent = "Copied!";

            setTimeout(() => {
                copyButton.textContent = "Copy";
            }, 1500);

        });

    });
console.log(hljs.listLanguages());
    hljs.highlightAll();

});