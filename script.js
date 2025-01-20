function updateFavicon() {
    const favicon = document.getElementById("favicon");

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // System is in DARK mode, use LIGHT favicon
        favicon.href = "assets/logo/favicons/favicon-dark.ico";
    } else {
        // System is in LIGHT mode, use DARK favicon
        favicon.href = "assets/logo/favicons/favicon-light.ico";
    }
}

// Run function on page load
updateFavicon();

// Listen for changes in system theme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
