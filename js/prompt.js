function showPrompt() {
    document.getElementById("dialog-1").style.display = "block";
}
function hidePrompt() {
    document.getElementById("dialog-1").style.display = "none";
}

function showPrompt2() {
    document.getElementById("dialog-2").style.display = "block";
}
function hidePrompt2() {
    document.getElementById("dialog-2").style.display = "none";
}


function showPrompt3() {
    document.getElementById("dialog-3").style.display = "block";
}
function hidePrompt3() {
    document.getElementById("dialog-3").style.display = "none";
}

function confirmReservation() {
    window.location.href = "CT-Reservation_success.html";
}

function confirmEdit() {
    window.location.href = "LT-View-Edit_success-edit.html";
}

function cancelReservation() {
    window.location.href = "CT-View-Edit_success-cancel.html";
}

function deleteReservation() {
    window.location.href = "LT-View-Edit_success-delete.html";
}

function toLoginpage() {
    window.location.href = "login-page.html"
}