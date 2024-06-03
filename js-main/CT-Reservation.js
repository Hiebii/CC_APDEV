//DATE
src="https://code.jquery.com/jquery-3.5.1.min.js"
src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
    $(document).ready(function() {
        $("#datepicker").datepicker({
            dateFormat: "mm/dd/yy",
            onSelect: function(dateText) {
                $("#datepicker").val(dateText);
            }
        });
    });





//Tooltip or Hover
var seatElements = document.querySelectorAll(".seat-name");
seatElements.forEach(function(element) {

    var value = element.getAttribute("data-value");

    if (value !== null && (value === "0" || value === "1")) {
        var tooltip = document.createElement("div");
        tooltip.className = "tooltip";

   
        if (value === "0") {
            element.style.backgroundColor = "green";
            tooltip.innerText = "This seat is available";
        } else {
            element.style.backgroundColor = "red";
            var valueName = element.getAttribute("data-value-name");
            tooltip.innerHTML = `<span id="tip-seat">Seat ${element.id}</span><br>
                                <span>Sorry, this seat is not available</span><br>
                                <span>Occupied by ${valueName}</span>`;
        }

    
        element.appendChild(tooltip);
      
        element.style.position = "relative";
        tooltip.style.position = "absolute";
        tooltip.style.left = "100%";
        tooltip.style.top = "50%";
        tooltip.style.transform = "translate(0, -50%)";
    }
});
