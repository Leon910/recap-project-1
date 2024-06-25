const darkModeButton = document.querySelector("[data-js=dark-mode-button]");
const body = document.body;

// Event listener for dark mode toggle button
darkModeButton.addEventListener("click", () => {
  toggleDarkMode();
});

// Function to toggle dark mode and save state in localStorage
function toggleDarkMode() {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode-enabled", "true");
  } else {
    localStorage.removeItem("dark-mode-enabled");
  }
}

// Apply dark mode based on localStorage on page load
darkModeButton.addEventListener("load", () => {
  if (localStorage.getItem("dark-mode-enabled") === "true") {
    body.classList.add("dark-mode");
  }
});
