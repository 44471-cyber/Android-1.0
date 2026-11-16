const batteryEls = document.querySelectorAll(".battery");
const percentage = document.querySelectorAll(".percentage");

if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
        const updateBatteryStatus = () => {
            percentage.forEach((el) => {
                el.textContent = ` (${Math.round(battery.level * 100)}%)`;
            });

            const statusText = battery.charging ? "Charging" : "Not charging";

            batteryEls.forEach((el) => {
                el.firstChild.textContent = statusText;
            });
        };

        updateBatteryStatus();

        battery.addEventListener("levelchange", updateBatteryStatus);
        battery.addEventListener("chargingchange", updateBatteryStatus);
    });
} else {
    console.warn("Battery Status API is not supported on this browser.");
}