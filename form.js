// Listening Submit-Events
const form = document.querySelector('[data-js="form-data"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElement = event.target;

  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);
  console.log(formData);
  console.log(data);

  const questionContainer = document.createElement("li");

  const questionElement = document.createElement("article");
  const questionElementHeader = document.createElement("h2");

  const questionElementAnswerButton = document.createElement("button");

  const questionElementAnswer = document.createElement("p");

  const questionElementList = document.createElement("ul");

  const questionElementListElement = document.createElement("li");

  const questionElementListElementButton1 = document.createElement("button");

  // const questionElementListElementButton2 = document.createElement("button");
  // console.log(questionElementListElementButton2);
  // const questionElementListElementButton3 = document.createElement("button");
  // console.log(questionElementListElementButton3);
  const questionElementBookmarkButton = document.createElement("button");

  questionContainer.classList.add("question-box1");

  questionElement.classList.add("question-box1-flex");

  questionElementHeader.textContent = data.question;

  questionElementAnswerButton.type = "button";
  questionElementAnswerButton.dataset.js = "toggle-answer-button";
  questionElementAnswerButton.ariaLabel = "click the button and get answer";
  questionElementAnswerButton.textContent = "Show Answer";

  questionElementAnswer.classList.add("hidden");
  questionElementAnswer.dataset.js = "show-answer";
  questionElementAnswer.textContent = data.answer;

  questionElementList.classList.add("tags1-flex");

  questionElementListElementButton1.textContent = data.tagging;
  questionElementListElementButton1.ariaLabel = "tag";
  // questionElementListElementButton2.textContent = "#flexbox";
  // questionElementListElementButton3.textContent = "#css";
  questionElementBookmarkButton.classList.add("icon1");
  questionElementBookmarkButton.dataset.js = "bookmark-button";
  questionElementBookmarkButton.textContent = "🔖";

  questionContainer.appendChild(questionElement);
  questionElement.appendChild(questionElementHeader);
  questionElement.appendChild(questionElementAnswerButton);
  questionElement.appendChild(questionElementAnswer);
  questionElement.appendChild(questionElementList);
  questionElement.appendChild(questionElementListElement);
  questionElementList.appendChild(questionElementListElement);
  questionElementListElement.appendChild(questionElementListElementButton1);
  questionElement.appendChild(questionElementBookmarkButton);
  console.log(questionContainer);

  document.body.append(questionContainer);
});
