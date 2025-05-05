// Selecting DOM elements
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"), // Dark mode toggle button
      searchToggle = document.querySelector(".searchToggle"), // Search box toggle button
      sidebarOpen = document.querySelector(".sidebarOpen"), // Sidebar open button
      siderbarClose = document.querySelector(".siderbarClose"); // Sidebar close button

// Retrieve the saved mode (dark or light) from localStorage
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
    body.classList.add("dark"); // Apply dark mode if saved in localStorage
}

// ===== Toggle Dark and Light Mode =====
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active"); // Toggle active state for the button
    body.classList.toggle("dark"); // Toggle dark mode class on the body

    // Save the user's selected mode in localStorage
    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light-mode"); // Save light mode
    } else {
        localStorage.setItem("mode", "dark-mode"); // Save dark mode
    }
});

// ===== Toggle Search Box =====
searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active"); // Toggle active state for the search box
});

// ===== Toggle Sidebar =====
sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active"); // Add active class to the navigation bar to open the sidebar
});

// Close the sidebar when clicking outside of it
body.addEventListener("click", (e) => {
    let clickedElm = e.target; // Get the clicked element
    if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
        nav.classList.remove("active"); // Remove active class to close the sidebar
    }
});