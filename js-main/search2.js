/**
 *  search.js Script
 *  - This script fetches the users and stores them in an array. (Note: Check console if properly fetched)
 *  - Fetched users are displayed as clickable a href cards.
 *  - Then, the cards will be populated in the 'suggestion-card' div in the search bars.
 *  - For the search, it finds an input that matches the 'fullName' field from the "fetched users array."
 *  - If a match was found, it maps its _id field to be used to lead to its corresponding Profile-View.
 *  - Otherwise, it displays an alert message 'user not found', and returns the same page.                  
 */

document.addEventListener("DOMContentLoaded", () => {
    const userCardContainer = document.querySelector(".suggestion-card");
    const searchInput = document.querySelector(".searchinput");
    const searchForm = document.getElementById("searchForm");

    if (!userCardContainer) {
        console.error("Card Container not found");
        return;
    }
    if (!searchInput) {
        console.error("Search Input not found");
        return;
    }
    if (!searchForm) {
        console.error("Search Form not found");
        return;
    }

    let users = [];

    // Function to perform search and display suggestions
    function performSearch(query) {
        const value = query.toLowerCase();
        users.forEach(user => {
            const isVisible = user.fullName.toLowerCase().includes(value); // Check if query matches
            user.element.classList.toggle("hide", !isVisible); // Show or hide based on match
        });
    }

    // Function for form submission
    searchForm.addEventListener("submit", (event) => {
        const query = searchInput.value.trim();
        if (!query) {
            event.preventDefault();
            console.error("Search input is empty");
        }
    });

    // Event listener for input changes
    searchInput.addEventListener("input", (e) => {
        const value = e.target.value;
        performSearch(value);
    });

    // Fetch user data and populate suggestions
    fetch("/users-for-search2")
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            console.log("Fetched users:", data); // Check if users fetched properly
            users = data.map(user => {
                const card = document.createElement("div");
                card.classList.add("card");
                const userLink = document.createElement("a");
                userLink.href = `/LT-Profile_view-only?userId=${user._id}`;
                userLink.textContent = user.fullName;

                userLink.style.color = "black";
                userLink.style.textDecoration = "none";
                card.appendChild(userLink);
                userCardContainer.appendChild(card);
                return { fullName: user.fullName, element: card };
            });
        })
        .catch(error => console.error('Error fetching users:', error));

    // Shows an Error Alert and setTimeout to 100ms to ensure page would load first before displaying Alert
    setTimeout(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const error = urlParams.get('error');

        if (error === 'UserNotFound') {
            alert('User not found');
        }
    }, 100);
});