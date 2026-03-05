function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
document.getElementById("colorButton").onclick = function() {
    const colors = ["#83151562", "#63509970", "#eb4dc971", "#153126ff", "#e0dd2544"];
    let currentColor = document.body.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    document.body.style.backgroundColor = newColor;
};