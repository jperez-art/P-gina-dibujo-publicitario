const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("flip");
    });
});

const sections = document.querySelectorAll("section:not(#inicio)");

sections.forEach(section => {
    section.classList.add("reveal");
});

function showSections() {
    sections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight - 50) {
            section.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", showSections);
showSections();