document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav ul");
    const search = document.getElementById("search");

    toggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    // News search filter
    if (search) {
        search.addEventListener("keyup", () => {
            const term = search.value.toLowerCase();
            document.querySelectorAll("#news-list article").forEach(article => {
                article.style.display = article.innerText.toLowerCase().includes(term) ? "" : "none";
            });
        });
    }
});
