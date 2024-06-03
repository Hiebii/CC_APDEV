document.addEventListener("DOMContentLoaded", function() {
    const seats = document.querySelectorAll(".seat-name");
    const dialog = document.getElementById("dialog-1");
    const promptText = document.querySelector(".prompt-text");
    const occupiedBy = document.querySelector(".occupied-by");

    seats.forEach(seat => {
        seat.addEventListener("click", function() {
            const value = seat.getAttribute("data-value");
            const seatName = seat.getAttribute("data-seat");
            const occupant = seat.getAttribute("data-value-name");

            if (value === "1") {
                showPrompt(seatName, occupant);
            } else if (value === "0") {
                seat.classList.toggle("selected");
                if (seat.classList.contains("selected")) {
                    seat.style.backgroundColor = "#951ABE";
                    seat.style.color = "white"; 
                } else {
                    seat.style.backgroundColor = "green"; 
                    seat.style.color = "black"; 
                }
            }
        });
    });

    function showPrompt(seatName, occupant) {
        promptText.innerHTML = `SORRY ${seatName} IS <br> TAKEN ALREADY! Occupied by: <span class="occupied-by">${occupant}</span>`;
        dialog.style.display = "block";
    }

    window.hidePrompt = function() {
        dialog.style.display = "none";
    }
});
