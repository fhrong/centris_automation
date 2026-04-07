document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensagem enviada! Entraremos em contato em breve.');
});


document.addEventListener("DOMContentLoaded", () => {
    console.log("Redoing example toggle functionality.");

    const toggleButtons = document.querySelectorAll(".example-toggle");

    toggleButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const card = button.closest(".example-card");
            if (card) {
                const exampleBox = card.querySelector(".example-box");
                if (exampleBox) {
                    const isVisible = exampleBox.style.display === "block";
                    exampleBox.style.display = isVisible ? "none" : "block";
                    console.log(`Example box ${index + 1} is now ${isVisible ? "hidden" : "visible"}.`);
                } else {
                    console.error(`No example box found for card ${index + 1}.`);
                }
            } else {
                console.error(`No parent card found for button ${index + 1}.`);
            }
        });
    });
});

document.querySelectorAll(".example-box").forEach((box, index) => {
    console.log(`Ensuring example box ${index + 1} is visible by default.`);
    box.style.display = "block";
});
