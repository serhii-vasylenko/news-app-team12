const checkBox = document.querySelector('.theme-switch__checkbox');
checkBox.addEventListener('change', toggleTheme);

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-dark');
      document.getElementById('slider').checked = true;
    }
})();