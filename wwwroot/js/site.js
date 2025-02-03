const themeToggle = document.getElementById('theme-toggle'); // This is now the checkbox
const body = document.body;

themeToggle.addEventListener('change', () => {  // Use 'change' event for checkboxes
  if (themeToggle.checked) {  // Check if the checkbox is checked
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
  }
});

// Check for a saved theme preference on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-theme');
  themeToggle.checked = true; // Make sure the checkbox reflects the saved state
}

