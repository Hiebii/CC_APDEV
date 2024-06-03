$(document).ready(function() {
    $("#datepicker").datepicker({
        dateFormat: "mm/dd/yy",
        onSelect: function(dateText) {
            $("#datepicker").val(dateText);
        }
    });
});