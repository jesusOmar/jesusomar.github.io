// Change this to your username
let username = "Jesus Fernandez"

const determineGreet = hours => document.getElementById("greeting").innerText = `Good ${hours < 12 ? "Morning," : hours < 18 ? "Afternoon," : "Evening,"} ${username}.`

// The same as "onload"
window.addEventListener('load', (event) => {
    let today = new Date()
    let time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    determineGreet(new Date().getHours())
    displayTime(time)
});

setInterval(function () {
    let today = new Date()
    document.getElementById("time").innerHTML = today.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
}, 1000)

function displayTime(time) {
    document.getElementById("time").innerHTML = time
}
