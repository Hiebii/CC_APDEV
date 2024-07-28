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

    function performSearch(query) {
        const value = query.toLowerCase();
        users.forEach(user => {
            const isVisible = user.fullName.toLowerCase().includes(value); 
            user.element.classList.toggle("hide", !isVisible);
        });
    }

    searchForm.addEventListener("submit", (event) => {
        const query = searchInput.value.trim();
        if (!query) {
            event.preventDefault();
            console.error("Search input is empty");
        }
    });

    searchInput.addEventListener("input", (e) => {
        const value = e.target.value;
        performSearch(value);
    });

    fetch("/users-for-search2")
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            console.log("Fetched users:", data); 
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

    setTimeout(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const error = urlParams.get('error');

        if (error === 'UserNotFound') {
            alert('User not found');
        }
    }, 100);
});