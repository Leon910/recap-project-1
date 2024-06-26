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

// Toggle-Bookmark-Button

const bookmarkButtonToggle = document.querySelector(
  '[data-js="bookmark-button"]'
);

// console.log(bookmarkButtonToggle);

bookmarkButtonToggle.addEventListener("click", () => {
  bookmarkButtonToggle.classList.toggle("icon1-toggle");
});

// Toogle-Answer-Button

const toggleAnswerButton = document.querySelector(
  '[data-js="toggle-answer-button"]'
);
const answer = document.querySelector('[data-js="show-answer"]');

toggleAnswerButton.addEventListener("click", () => {
  answer.classList.toggle("hidden");
  if (answer.classList.contains("hidden")) {
    toggleAnswerButton.textContent = "Show Answer";
  } else {
    toggleAnswerButton.textContent = "Hide Answer";
  }
});

// forEach button
// -> here comes my code

/* Count Questions*/

// If we are on the questions page, count the bookmark boxes and store in localStorage

document.addEventListener("DOMContentLoaded", function () {
  const questionBoxList = document.querySelector(
    '[data-js="count-question-box"]'
  );
  if (questionBoxList) {
    const questionBoxes = questionBoxList.children.length;
    localStorage.setItem("questionBoxCount", questionBoxes);

    console.log("Question Box Count:", questionBoxes);
  }
});

// If we are on the profile page, retrieve and display the bookmark count on the button
const countDisplayButton = document.querySelector(
  '[data-js="count-created-questions"]'
);
if (countDisplayButton) {
  const questionBoxCountRetrieve =
    localStorage.getItem("questionBoxCount") || 0;
  countDisplayButton.textContent = `Created Questions (${questionBoxCountRetrieve})`;

  console.log(
    "Question Box Count from Local Storage:",
    questionBoxCountRetrieve
  );
}

/* Count Bookmarks*/

document.addEventListener("DOMContentLoaded", function () {
  // If we are on the bookmarks page, count the bookmark boxes and store in localStorage
  const bookmarkBoxList = document.querySelector(
    '[data-js="count-bookmark-box"]'
  );
  if (bookmarkBoxList) {
    const bookmarkBoxes = bookmarkBoxList.children.length;
    localStorage.setItem("bookmarkBoxCount", bookmarkBoxes);

    console.log("Bookmark Box Count:", bookmarkBoxes);
  }

  // If we are on the profile page, retrieve and display the bookmark count on the button
  const countDisplayButton = document.querySelector(
    '[data-js="count-created-bookmarks"]'
  );
  if (countDisplayButton) {
    const bookmarkBoxCountRetrieve =
      localStorage.getItem("bookmarkBoxCount") || 0;
    countDisplayButton.textContent = `Created Bookmarks (${bookmarkBoxCountRetrieve})`;

    console.log(
      "Bookmark Box Count from Local Storage:",
      bookmarkBoxCountRetrieve
    );
  }
});
