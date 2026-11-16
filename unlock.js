const key = document.getElementById("key");

document.addEventListener("keydown", function(event) {
    if (event.key.toLowerCase() === "m") {
        window.location.href = "Home_screen/screen.html";
    }
});