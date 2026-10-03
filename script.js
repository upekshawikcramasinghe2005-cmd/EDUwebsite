
document.addEventListener("DOMContentLoaded", () => {
    const newsletterForm = document.getElementById("newsletterForm");
    const emailInput = document.getElementById("emailInput");
    const newsletterMsg = document.getElementById("newsletterMsg");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = emailInput.value.trim();

            if (email === "") {
                newsletterMsg.textContent = "Please enter a valid email address.";
                newsletterMsg.style.color = "#f87171"; 
            } else {
                newsletterMsg.textContent = "Thank you for joining our learning community! 🎉";
                newsletterMsg.style.color = "#4ade80"; 
                emailInput.value = ""; 
            }
        });
    }


    const searchInput = document.querySelector(".search_bar input");
    const bookCards = document.querySelectorAll(".book-card");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase();

            bookCards.forEach((card) => {
                const title = card.getAttribute("data-title").toLowerCase();
                const category = card.getAttribute("data-category").toLowerCase();

                if (title.includes(query) || category.includes(query)) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }
});