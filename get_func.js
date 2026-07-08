document.addEventListener('DOMContentLoaded', function () {
  const savedMode = localStorage.getItem('mode');
  if (savedMode === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.add('light-mode');
  }

  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;

      const modeToggleButton = document.getElementById('mode-toggle');
      if (!modeToggleButton) return;

      modeToggleButton.textContent = document.body.classList.contains('dark-mode')
        ? 'Light Mode'
        : 'Dark Mode';

      modeToggleButton.addEventListener('click', function () {
        const isDark = document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode', !isDark);
        localStorage.setItem('mode', isDark ? 'dark' : 'light');
        modeToggleButton.textContent = isDark ? 'Light Mode' : 'Dark Mode';
      });
    });
});
