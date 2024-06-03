function showPrompt() {
    document.getElementById("confirmation-dialog").style.display = "block";
}

function hidePrompt() {
    document.getElementById("confirmation-dialog").style.display = "none";
}

function confirmReservation() {
    window.location.href = "CT-Reservation_success.html";
}

function confirmEdit() {
    window.location.href = "LT-View-Edit_success-edit.html";
}