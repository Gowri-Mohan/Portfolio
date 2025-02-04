const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');

    // Update button text
    if (body.classList.contains('light-theme')) {
        themeToggle.textContent = "Switch to Dark Mode";
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.textContent = "Switch to Light Mode";
        localStorage.setItem('theme', 'dark');
    }
});

//... (rest of your JavaScript to check localStorage)...

// Check for a saved theme preference on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-theme');
  themeToggle.checked = true; // Make sure the checkbox reflects the saved state
}

