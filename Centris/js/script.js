document.addEventListener("DOMContentLoaded", () => {
    console.log("Redoing example toggle functionality.");

    const toggleButtons = document.querySelectorAll(".example-toggle");

    toggleButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const card = button.closest(".example-card");
            if (card) {
                const exampleBox = card.querySelector(".example-box");
                if (exampleBox) {
                    const isExpanded = exampleBox.style.height && exampleBox.style.height !== "0px";
                    exampleBox.style.height = isExpanded ? "0" : `${exampleBox.scrollHeight}px`;
                } else {
                    console.error(`No example box found for card ${index + 1}.`);
                }
            } else {
                console.error(`No parent card found for button ${index + 1}.`);
            }
        });
    });
});
