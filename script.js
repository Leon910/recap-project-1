document.addEventListener("DOMContentLoaded", () => {
  // Query Selector for dark mode toggle button and body-element selection
  const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
  const body = document.body;

  // Function to toggle dark mode and save state in localStorage
  function toggleDarkMode() {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode-disabled")) {
      localStorage.setItem("dark-mode-disabled", "true");
    } else {
      localStorage.removeItem("dark-mode-disabled");
    }
  }

  if (darkModeButton) {
    darkModeButton.addEventListener("click", () => {
      toggleDarkMode();
    });

    // Apply dark mode based on localStorage on page load
    if (localStorage.getItem("dark-mode-disabled") === "true") {
      body.classList.add("dark-mode");
    }
  }

  // Toggle-Bookmark-Button
  const bookmarkButtonToggle = document.querySelector(
    '[data-js="bookmark-button"]'
  );
  if (bookmarkButtonToggle) {
    bookmarkButtonToggle.addEventListener("click", () => {
      bookmarkButtonToggle.classList.toggle("icon1-toggle");
    });
  }

  // Toggle-Answer-Button
  const toggleAnswerButton = document.querySelector(
    '[data-js="toggle-answer-button"]'
  );
  const answer = document.querySelector('[data-js="show-answer"]');
  if (toggleAnswerButton && answer) {
    toggleAnswerButton.addEventListener("click", () => {
      answer.classList.toggle("hidden");
      toggleAnswerButton.textContent = answer.classList.contains("hidden")
        ? "Show Answer"
        : "Hide Answer";
    });
  }

  // Count Questions
  const questionBoxList = document.querySelector(
    '[data-js="count-question-box"]'
  );
  if (questionBoxList) {
    const questionBoxes = questionBoxList.children.length;
    localStorage.setItem("questionBoxCount", questionBoxes);

    console.log("Question Box Count:", questionBoxes);
  }

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

  // Count Bookmarks
  const bookmarkBoxList = document.querySelector(
    '[data-js="count-bookmark-box"]'
  );
  if (bookmarkBoxList) {
    const bookmarkBoxes = bookmarkBoxList.children.length;
    localStorage.setItem("bookmarkBoxCount", bookmarkBoxes);

    console.log("Bookmark Box Count:", bookmarkBoxes);
  }

  const countBookmarksButton = document.querySelector(
    '[data-js="count-created-bookmarks"]'
  );
  if (countBookmarksButton) {
    const bookmarkBoxCountRetrieve =
      localStorage.getItem("bookmarkBoxCount") || 0;
    countBookmarksButton.textContent = `Created Bookmarks (${bookmarkBoxCountRetrieve})`;

    console.log(
      "Bookmark Box Count from Local Storage:",
      bookmarkBoxCountRetrieve
    );
  }
});
