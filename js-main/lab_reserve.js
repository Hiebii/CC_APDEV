
document.getElementById('lab-dropdown').addEventListener('change', function() {
    var selectedOption = this.options[this.selectedIndex].value;
    window.location.href = selectedOption;
});

