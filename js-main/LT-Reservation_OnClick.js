document.addEventListener("DOMContentLoaded", function() {
    const seats = document.querySelectorAll(".seat-name");
    const dialog = document.getElementById("dialog-1");
    const promptText = document.querySelector(".prompt-text");
    const occupiedBy = document.querySelector(".occupied-by");
    const reserveButton = document.getElementById("reserve-button");
    let numSelected = 0;


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
                    numSelected++;
                } else {
                    seat.style.backgroundColor = "green"; 
                    seat.style.color = "black"; 
                    numSelected--;
                }
            }
        });
    });
    
    reserveButton.addEventListener("click", function() {
        if (numSelected > 0) {
            window.location.href = "LT-Reservation_reservation-details.html";
        } else {
            showPrompt2();
        }
    });

    function showPrompt2() {
        promptText.innerHTML = '<br><br><span class="prompt-class"> <span class="js_note">Please<span class="js_seat"> select</span> <br> atleast 1 seat!</span></span>';
        dialog.style.display = "block";
        dialog.style.display = "block";
    }

    function showPrompt(seatName, occupant) {
        const profileLink = "CT-Profile.html";
        promptText.innerHTML = `<span class="prompt-class"> <span class="js_note">SORRY <span class="js_seat">${seatName}</span> IS <br> TAKEN ALREADY!</span> <br><br> <span class="js_username"><span class="js_occu">Occupied by:</span> <a href='${profileLink}'>${occupant}</a></span></span></span>`;
        dialog.style.display = "block";
        dialog.style.display = "block";
    }

    window.hidePrompt = function() {
        dialog.style.display = "none";
    }
});

