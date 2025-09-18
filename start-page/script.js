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

// Theme toggle (no persistence)
window.addEventListener('load', () => {
    const modeBtn = document.getElementById('mode');
    if (!modeBtn) return;

    modeBtn.addEventListener('click', () => {
        const b = document.body;

        // If an explicit class is set, flip it
        if (b.classList.contains('light')) {
            b.classList.remove('light');
            b.classList.add('dark');
            return;
        }
        if (b.classList.contains('dark')) {
            b.classList.remove('dark');
            b.classList.add('light');
            return;
        }

        // No explicit class yet: infer current system and switch to the opposite
        const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
        b.classList.add(prefersLight ? 'dark' : 'light');
    });
});
