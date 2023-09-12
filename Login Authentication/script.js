document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the password is correct
    if (password === "12345") {
        // Display a popup message for a successful login
        showMessage("Thank you for logging in", "green");
    } else {
        // Display a popup message for an incorrect password
        showMessage("Your password is incorrect. Please try again later", "red");
    }
});

function showMessage(message, color) {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.style.backgroundColor = color;
    popup.textContent = message;

    document.body.appendChild(popup);

    setTimeout(function () {
        popup.remove();
    }, 3000); // Remove the popup after 3 seconds
}

