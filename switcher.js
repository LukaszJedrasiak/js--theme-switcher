const theme = document.querySelector("#theme-link");
const btnLight = document.querySelector("#btnLight");
const btnDark = document.querySelector("#btnDark");
const btnNord = document.querySelector("#btnNord");
let currentTheme = 'light';

const saveTheme = (themeName) => {
    currentTheme = themeName;
    theme.href = `${themeName}.css`;
    localStorage.setItem('theme', themeName);
    console.log(`saved and set theme: ${localStorage.getItem('theme')}`);
}

btnDark.addEventListener('click', () => {
    saveTheme('dark');
})

btnNord.addEventListener('click', () => {
    saveTheme('nord');
})

btnLight.addEventListener('click', () => {
    saveTheme('light');
})

if (localStorage.getItem('theme')) {
    saveTheme(localStorage.getItem('theme'));
} else {
    const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)");
    if (prefersLightScheme.matches) {
        saveTheme('light');
    } else {
        saveTheme('dark');
    }
}