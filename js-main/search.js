document.addEventListener("DOMContentLoaded", () => {
    const userCardContainer = document.querySelector(".suggestion-card");
    const searchInput = document.querySelector(".searchinput");

    if (!userCardContainer) {
        console.error("Card Container not found");
        return;
    }

    let users = [];

    /* Event listener that reads user input */
    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase(); // Turn input value to lower case
        users.forEach(user => {
            const isVisible = user.fullName.toLowerCase().includes(value); // Check if input value is included in the user name
            user.element.classList.toggle("hide", !isVisible); // If !isVisible is true, add the hide class
        });
    });

    /* Fetches the data */
    fetch("CT-Profile_view-content")
        .then(res => {
            console.log("Response status:", res.status); // Debug response status
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            console.log("Fetched users:", data); // Test log
            users = data.map(user => {
                const card = document.createElement("div");
                card.classList.add("card");
                const userLink = document.createElement("a");
                userLink.href = `/CT-Profile_view-only?userId=${user._id}`; 
                userLink.textContent = user.fullName; // Display Name in 'card'
                // Apply styling directly
                userLink.style.color = "black"; // Set link color to black
                userLink.style.textDecoration = "none"; // Remove underline
                card.appendChild(userLink); //  Append 'card' with link
                userCardContainer.appendChild(card); // Append 'card' inside 'container'
                return { fullName: user.fullName, element: card };
            });
        })
        
    .catch(error => console.error('Error fetching users:', error));
        
});

