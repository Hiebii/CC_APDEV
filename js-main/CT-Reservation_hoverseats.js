var seatElements = document.querySelectorAll(".seat-name");
seatElements.forEach(function(element) {

    var value = element.getAttribute("data-value");

    if (value !== null && (value === "0" || value === "1")) {
        var tooltip = document.createElement("div");
        tooltip.className = "tooltip";

   
        if (value === "0") {
            element.style.backgroundColor = "green";
            var valueName = element.getAttribute("data-value-name");
            var seatName = element.getAttribute("data-seat");
            tooltip.innerHTML = `<span class="tip-seat">${seatName}</span><br> 
                                <span id="tip-note-green" class="tip-note">Seat is still available.</span><br>
                                <span class="tip-name"><strong>Occupied by:</strong>‎  ${valueName}</span>`;
        } else {
            element.style.backgroundColor = "red";
            var valueName = element.getAttribute("data-value-name");
            var seatName = element.getAttribute("data-seat");
            tooltip.innerHTML = `<span class="tip-seat">${seatName}</span><br>
                                <span id="tip-note-red" class="tip-note">Sorry, this seat is not available.</span><br>
                                <span class="tip-name"><strong>Occupied by:</strong>‎ ${valueName}</span>`;
        }

    
        element.appendChild(tooltip);
      
        element.style.position = "relative";
        tooltip.style.position = "absolute";
        tooltip.style.left = "120%";
        tooltip.style.top = "-100%";
        tooltip.style.transform = "translate(0, -50%)";
        
    }
});