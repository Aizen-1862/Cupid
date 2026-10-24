const QUESTIONS = [
  { category: "Music & sound", kicker: "LET'S START WITH THE GOOD STUFF", question: "What's a song you could listen to a hundred times and never get tired of?", subtitle: "Pick a mood, or write the song that lives rent-free in your head.", options: ["Soft & dreamy", "Happy & upbeat", "Sad songs that hit hard", "A little bit of everything"], symbols: ["♫","☀","☾","✧"] },
  { category: "Music & sound", kicker: "THE ARTIST ON REPEAT", question: "Who's a singer or artist you absolutely love?", subtitle: "Solo artists, bands, indie artists — everyone counts.", options: ["Pop star", "Indie / alternative artist", "A band", "No single favourite"], symbols: ["♪","✿","♬","♡"], customPlaceholder: "Tell us their name…" },
  { category: "Music & sound", kicker: "YOUR PERSONAL SOUNDTRACK", question: "What kind of music do you usually reach for?", subtitle: "Choose the sound that feels most like you.", options: ["Pop & dance", "R&B & soul", "Indie & acoustic", "Classical / lo-fi / instrumental"], symbols: ["✦","♫","♩","☁"] },
  { category: "Movies & series", kicker: "MOVIE NIGHT VIBES", question: "What kind of movie or series can always pull you in?", subtitle: "Go with your first instinct.", options: ["Romance & feel-good", "Thriller & mystery", "Comedy & comfort shows", "Fantasy & adventure"], symbols: ["♡","☾","☀","✧"] },
  { category: "Movies & series", kicker: "ONE MORE EPISODE…", question: "What's your comfort movie, show, or favourite film?", subtitle: "The one you can rewatch whenever.", options: ["A childhood favourite", "A romance / drama", "A mystery / crime story", "An all-time classic"], symbols: ["✿","♡","☾","✦"], customPlaceholder: "Drop the title here…" },
  { category: "Anime & characters", kicker: "FICTIONAL WORLDS", question: "Are you into anime, animated movies, or fictional worlds?", subtitle: "No pressure — every answer is a good answer.", options: ["Yes, anime fan", "Animated movies", "Fantasy / fictional universes", "Not really my thing"], symbols: ["✧","☆","☁","♡"], customPlaceholder: "Favourite anime or character (if any)…" },
  { category: "Colour & aesthetic", kicker: "YOUR COLOUR PALETTE", question: "Which colours feel most like your vibe?", subtitle: "Pick the shades you'd happily surround yourself with.", options: ["Blue & soft sky tones", "Pink, peach & blush", "Black, white & neutrals", "Green, earthy & nature tones"], symbols: ["☁","♡","✦","❀"], customPlaceholder: "Any exact favourite shade?" },
  { category: "Style & fashion", kicker: "YOUR EVERYDAY AESTHETIC", question: "Which style do you feel most yourself in?", subtitle: "You can mix styles — this is just for the vibe.", options: ["Soft & elegant", "Casual & comfy", "Trendy & statement-making", "Minimal & classic"], symbols: ["✿","☁","✦","♡"] },
  { category: "Style & fashion", kicker: "THE LITTLE DETAILS", question: "Which accessories do you tend to love most?", subtitle: "Or tell us if accessories aren't really your thing.", options: ["Earrings & delicate jewellery", "Bags & purses", "Hair clips / scrunchies", "Watches or simple pieces"], symbols: ["♡","◇","✿","◌"], customPlaceholder: "Anything specific you love…" },
  { category: "Hobbies & creativity", kicker: "YOUR HAPPY PLACE", question: "What do you genuinely enjoy doing in your free time?", subtitle: "Choose what you'd do even if nobody asked you to.", options: ["Drawing, crafts or creating", "Reading or journaling", "Music, dance or singing", "Games, sports or being active"], symbols: ["✎","▤","♫","✦"], customPlaceholder: "Another hobby you love…" },
  { category: "Hobbies & creativity", kicker: "A LITTLE CURIOSITY", question: "What's something you'd love to learn or get better at?", subtitle: "Could be a skill, hobby, or something totally random.", options: ["An art or creative skill", "A language or new subject", "A sport or dance", "Something practical or hands-on"], symbols: ["✿","✧","☀","◇"], customPlaceholder: "What would you love to learn?" },
  { category: "Food & little treats", kicker: "THE SNACK QUESTION", question: "What's your kind of treat when you want to make your day better?", subtitle: "The little things count.", options: ["Chocolate or something sweet", "Ice cream / dessert", "Spicy or savoury snacks", "A favourite drink or café treat"], symbols: ["♡","❀","✦","☕"], customPlaceholder: "Specific favourite snack / drink…" },
  { category: "Food & little treats", kicker: "YOUR COMFORT FOOD", question: "If you could pick a favourite meal right now, what would it be?", subtitle: "No judgement. Food favourites are serious business.", options: ["Pizza / pasta", "Biryani / noodles", "Street food / spicy food", "Home-cooked comfort food"], symbols: ["✧","♨","☀","♡"], customPlaceholder: "Name your actual favourite…" },
  { category: "Travel & places", kicker: "SOMEWHERE ELSE", question: "What kind of place would you love to spend a day exploring?", subtitle: "Imagine you have a free day and no rush.", options: ["Beach & ocean breeze", "Mountains & cool air", "A cute city / café hopping", "Quiet nature & green spaces"], symbols: ["≈","△","☕","❀"] },
  { category: "Travel & places", kicker: "A LITTLE ESCAPE", question: "What's your ideal way to spend a completely free day?", subtitle: "The no-plans, no-pressure kind of day.", options: ["Going out with friends", "A cosy day at home", "Exploring somewhere new", "Doing a favourite hobby"], symbols: ["♡","☁","✧","✿"] },
  { category: "Personality & mood", kicker: "YOUR SOCIAL BATTERY", question: "Which sounds most like you?", subtitle: "There are no wrong answers — people can be a mix.", options: ["Quiet at first, then talkative", "Outgoing pretty much everywhere", "A little of both, depending on the people", "I like my own space a lot"], symbols: ["☾","☀","✧","☁"] },
  { category: "Personality & mood", kicker: "THE SMALL THINGS", question: "What's a little thing that can instantly make your day better?", subtitle: "The kind of thing people might not realise matters to you.", options: ["A thoughtful message", "My favourite song playing", "Good food or a sweet treat", "Time with my favourite people"], symbols: ["♡","♫","❀","✿"], customPlaceholder: "Or tell us your own little joy…" },
  { category: "Dreams & goals", kicker: "A FUTURE LITTLE DREAM", question: "What's something you hope you get to experience someday?", subtitle: "Big dream, tiny dream — both belong here.", options: ["Travel somewhere special", "Learn / create something meaningful", "Reach a personal goal", "Have more peaceful, happy days"], symbols: ["✈","✧","☆","☁"], customPlaceholder: "Anything you've been dreaming about…" },
  { category: "Favourite things", kicker: "A FEW MORE FAVOURITES", question: "Which kind of gift or gesture usually feels the most meaningful to you?", subtitle: "Not about price — just what makes something feel thoughtful.", options: ["Something handmade or personal", "Something I mentioned wanting", "A shared memory / experience", "A small surprise that fits my taste"], symbols: ["✿","♡","☾","✧"] },
  { category: "Favourite things", kicker: "LAST ONE, PROMISE ♡", question: "What's one thing you wish more people knew about you?", subtitle: "Anything at all — your answer can be as short or detailed as you like.", options: ["My interests / things I love", "What makes me feel appreciated", "My goals and things I'm working on", "I'm still figuring that out"], symbols: ["♫","♡","☆","☁"], customPlaceholder: "Your own answer… (optional)" }
];

const welcomeScreen = document.querySelector("#welcomeScreen");
const quizScreen = document.querySelector("#quizScreen");
const doneScreen = document.querySelector("#doneScreen");
const startButton = document.querySelector("#startButton");
const categoryLabel = document.querySelector("#categoryLabel");
const currentNumber = document.querySelector("#currentNumber");
const totalNumber = document.querySelector("#totalNumber");
const progressFill = document.querySelector("#progressFill");
const questionKicker = document.querySelector("#questionKicker");
const questionTitle = document.querySelector("#questionTitle");
const questionSubtitle = document.querySelector("#questionSubtitle");
const optionsList = document.querySelector("#optionsList");
const customAnswer = document.querySelector("#customAnswer");
const backButton = document.querySelector("#backButton");
const nextButton = document.querySelector("#nextButton");
const answerSummary = document.querySelector("#answerSummary");
const downloadButton = document.querySelector("#downloadButton");
const shareButton = document.querySelector("#shareButton");
const restartButton = document.querySelector("#restartButton");
const toast = document.querySelector("#toast");

let index = 0;
let answers = QUESTIONS.map(() => ({ choice: "", custom: "" }));
let toastTimeout;

totalNumber.textContent = String(QUESTIONS.length).padStart(2, "0");

function showScreen(screen) {
  [welcomeScreen, quizScreen, doneScreen].forEach(item => {
    item.hidden = item !== screen;
    item.classList.toggle("active", item === screen);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2600);
}

function currentAnswerText(questionIndex) {
  const answer = answers[questionIndex];
  const question = QUESTIONS[questionIndex];
  const chosen = answer.choice ? question.options[Number(answer.choice)] : "";
  if (answer.custom.trim()) return answer.custom.trim();
  return chosen || "";
}

function renderQuestion() {
  const q = QUESTIONS[index];
  const answer = answers[index];
  categoryLabel.textContent = q.category;
  currentNumber.textContent = String(index + 1).padStart(2, "0");
  progressFill.style.width = `${((index + 1) / QUESTIONS.length) * 100}%`;
  questionKicker.textContent = q.kicker;
  questionTitle.textContent = q.question;
  questionSubtitle.textContent = q.subtitle;
  customAnswer.value = answer.custom;
  customAnswer.placeholder = q.customPlaceholder || "Type whatever comes to mind…";
  optionsList.replaceChildren();

  q.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button" + (answer.choice === String(optionIndex) ? " selected" : "");
    button.setAttribute("aria-pressed", answer.choice === String(optionIndex) ? "true" : "false");
    const symbol = document.createElement("span");
    symbol.className = "option-symbol";
    symbol.textContent = q.symbols?.[optionIndex] || "♡";
    const label = document.createElement("span");
    label.className = "option-text";
    label.textContent = option;
    button.append(symbol, label);
    button.addEventListener("click", () => {
      answer.choice = String(optionIndex);
      optionsList.querySelectorAll(".option-button").forEach(el => {
        const selected = el === button;
        el.classList.toggle("selected", selected);
        el.setAttribute("aria-pressed", String(selected));
      });
      nextButton.disabled = !hasAnswer();
    });
    optionsList.append(button);
  });

  backButton.style.visibility = index === 0 ? "hidden" : "visible";
  nextButton.innerHTML = index === QUESTIONS.length - 1
    ? 'Finish <span>♡</span>'
    : 'Continue <span>→</span>';
  nextButton.disabled = !hasAnswer();
}

function hasAnswer() {
  return Boolean(answers[index].choice || answers[index].custom.trim());
}

function startQuiz() {
  index = 0;
  showScreen(quizScreen);
  renderQuestion();
}

function moveNext() {
  answers[index].custom = customAnswer.value.slice(0, 180);
  if (!hasAnswer()) return;
  if (index < QUESTIONS.length - 1) {
    index++;
    renderQuestion();
    quizScreen.querySelector(".question-card").animate(
      [{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }],
      { duration: 240, easing: "ease-out" }
    );
  } else {
    finishQuiz();
  }
}

function moveBack() {
  answers[index].custom = customAnswer.value.slice(0, 180);
  if (index > 0) {
    index--;
    renderQuestion();
  }
}

function finishQuiz() {
  answers[index].custom = customAnswer.value.slice(0, 180);
  answerSummary.replaceChildren();
  QUESTIONS.forEach((q, i) => {
    const value = currentAnswerText(i);
    if (!value) return;
    const item = document.createElement("div");
    item.className = "summary-item";
    const category = document.createElement("small");
    category.textContent = q.category;
    const answer = document.createElement("b");
    answer.textContent = value;
    item.append(category, answer);
    answerSummary.append(item);
  });
  showScreen(doneScreen);
}

function exportText() {
  const lines = [
    "PROJECT CUPID — A LITTLE ABOUT YOU",
    "A personal interest snapshot",
    "",
    ...QUESTIONS.map((q, i) => {
      const answer = currentAnswerText(i) || "Skipped";
      return `${q.category} — ${q.question}\n${answer}`;
    }),
    "",
    "Shared by choice. Made with care."
  ];
  return lines.join("\n\n");
}

function downloadAnswers() {
  const blob = new Blob([exportText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "my-cupid-answers.txt";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("Your answers file is ready ♡");
}

async function shareAnswers() {
  const text = exportText();
  if (navigator.share) {
    try {
      await navigator.share({ title: "My Project Cupid answers", text });
    } catch (error) {
      if (error?.name !== "AbortError") showToast("Sharing wasn't available. You can save your answers instead.");
    }
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    showToast("Answers copied — share them wherever you like ♡");
  } catch {
    downloadAnswers();
  }
}

function restartQuiz() {
  answers = QUESTIONS.map(() => ({ choice: "", custom: "" }));
  startQuiz();
}

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", moveNext);
backButton.addEventListener("click", moveBack);
customAnswer.addEventListener("input", () => {
  answers[index].custom = customAnswer.value.slice(0, 180);
  nextButton.disabled = !hasAnswer();
});
downloadButton.addEventListener("click", downloadAnswers);
shareButton.addEventListener("click", shareAnswers);
restartButton.addEventListener("click", restartQuiz);
document.addEventListener("keydown", event => {
  if (!quizScreen.hidden && event.key === "Enter" && document.activeElement !== customAnswer) {
    event.preventDefault();
    if (!nextButton.disabled) moveNext();
  }
});
