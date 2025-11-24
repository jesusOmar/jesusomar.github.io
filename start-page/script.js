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

const themeStorageKey = 'startpage-theme';

const systemPrefersLight = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

const applyThemeClass = theme => {
    const body = document.body;
    body.classList.remove('light', 'dark');
    if (theme === 'light' || theme === 'dark') {
        body.classList.add(theme);
    }
};

const setTheme = theme => {
    if (theme === 'light' || theme === 'dark') {
        localStorage.setItem(themeStorageKey, theme);
        applyThemeClass(theme);
    } else {
        localStorage.removeItem(themeStorageKey);
        applyThemeClass(null);
    }
};

const hydrateThemeFromStorage = () => {
    const storedTheme = localStorage.getItem(themeStorageKey);
    if (storedTheme === 'light' || storedTheme === 'dark') {
        applyThemeClass(storedTheme);
    } else if (storedTheme) {
        localStorage.removeItem(themeStorageKey);
    }
};

setInterval(function () {
    let today = new Date()
    document.getElementById("time").innerHTML = today.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
}, 1000)

function displayTime(time) {
    document.getElementById("time").innerHTML = time
}

// Theme toggle with persistence and reset
window.addEventListener('load', () => {
    const modeBtn = document.getElementById('mode');
    const resetThemeBtn = document.getElementById('reset-theme');

    hydrateThemeFromStorage();
    if (!modeBtn) return;

    modeBtn.addEventListener('click', () => {
        const body = document.body;

        const isLight = body.classList.contains('light');
        const isDark = body.classList.contains('dark');
        let nextTheme;

        if (isLight) {
            nextTheme = 'dark';
        } else if (isDark) {
            nextTheme = 'light';
        } else {
            nextTheme = systemPrefersLight() ? 'dark' : 'light';
        }

        setTheme(nextTheme);
    });

    if (resetThemeBtn) {
        resetThemeBtn.addEventListener('click', event => {
            event.preventDefault();
            setTheme(null);
        });
    }
});
