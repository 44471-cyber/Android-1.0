let time = document.querySelectorAll(".time");
let date = document.getElementById("date");

function updateTime() {
    const date = new Date();
    const hour = date.getHours() % 12 || 12;
    const min = String(date.getMinutes()).padStart(2, "0");
    const suffix = hour > 12 ? "AM" : "PM";

    time.forEach(element => {
        element.innerHTML = `${hour}:${min} ${suffix}`;
    });
}

updateTime();
setInterval(updateTime);

function updateDate() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const year = now.getFullYear();

    date.innerHTML = `${month}-${day}-${year}`;
}

updateDate();
setInterval(updateDate);