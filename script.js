
const QUESTIONS = [
  {
    category: "Music & sound",
    kicker: "LET'S START WITH THE GOOD STUFF",
    question: "What's a song you could listen to a hundred times and never get tired of?",
    subtitle: "Pick a mood, or write the song that lives rent-free in your head.",
    options: ["Soft & dreamy", "Happy & upbeat", "Sad songs that hit hard", "A little bit of everything"],
    symbols: ["♫", "☀", "☾", "✧"]
  },
  {
    category: "Music & sound",
    kicker: "THE ARTIST ON REPEAT",
    question: "Who's a singer or artist you absolutely love?",
    subtitle: "Solo artists, bands, indie artists — everyone counts.",
    options: ["Pop star", "Indie / alternative artist", "A band", "No single favourite"],
    symbols: ["♪", "✿", "♬", "♡"],
    customPlaceholder: "Tell us their name…"
  },
  {
    category: "Music & sound",
    kicker: "YOUR PERSONAL SOUNDTRACK",
    question: "What kind of music do you usually reach for?",
    subtitle: "Choose the sound that feels most like you.",
    options: ["Pop & dance", "R&B & soul", "Indie & acoustic", "Classical / lo-fi / instrumental"],
    symbols: ["✦", "♫", "♩", "☁"]
  },
  {
    category: "Movies & series",
    kicker: "MOVIE NIGHT VIBES",
    question: "What kind of movie or series can always pull you in?",
    subtitle: "Go with your first instinct.",
    options: ["Romance & feel-good", "Thriller & mystery", "Comedy & comfort shows", "Fantasy & adventure"],
    symbols: ["♡", "☾", "☀", "✧"]
  },
  {
    category: "Movies & series",
    kicker: "ONE MORE EPISODE…",
    question: "What's your comfort movie, show, or favourite film?",
    subtitle: "The one you can rewatch whenever.",
    options: ["A childhood favourite", "A romance / drama", "A mystery / crime story", "An all-time classic"],
    symbols: ["✿", "♡", "☾", "✦"],
    customPlaceholder: "Drop the title here…"
  },
  {
    category: "Anime & characters",
    kicker: "FICTIONAL WORLDS",
    question: "Are you into anime, animated movies, or fictional worlds?",
    subtitle: "No pressure — every answer is a good answer.",
    options: ["Yes, anime fan", "Animated movies", "Fantasy / fictional universes", "Not really my thing"],
    symbols: ["✧", "☆", "☁", "♡"],
    customPlaceholder: "Favourite anime or character (if any)…"
  },
  {
    category: "Colour & aesthetic",
    kicker: "YOUR COLOUR PALETTE",
    question: "Which colours feel most like your vibe?",
    subtitle: "Pick the shades you'd happily surround yourself with.",
    options: ["Blue & soft sky tones", "Pink, peach & blush", "Black, white & neutrals", "Green, earthy & nature tones"],
    symbols: ["☁", "♡", "✦", "❀"],
    customPlaceholder: "Any exact favourite shade?"
  },
  {
    category: "Style & fashion",
    kicker: "YOUR EVERYDAY AESTHETIC",
    question: "Which style do you feel most yourself in?",
    subtitle: "You can mix styles — this is just for the vibe.",
    options: ["Soft & elegant", "Casual & comfy", "Trendy & statement-making", "Minimal & classic"],
    symbols: ["✿", "☁", "✦", "♡"]
  },
  {
    category: "Style & fashion",
    kicker: "THE LITTLE DETAILS",
    question: "Which accessories do you tend to love most?",
    subtitle: "Or tell us if accessories aren't really your thing.",
    options: ["Earrings & delicate jewellery", "Bags & purses", "Hair clips / scrunchies", "Watches or simple pieces"],
    symbols: ["♡", "◇", "✿", "◌"],
    customPlaceholder: "Anything specific you love…"
  },
  {
    category: "Hobbies & creativity",
    kicker: "YOUR HAPPY PLACE",
    question: "What do you genuinely enjoy doing in your free time?",
    subtitle: "Choose what you'd do even if nobody asked you to.",
    options: ["Drawing, crafts or creating", "Reading or journaling", "Music, dance or singing", "Games, sports or being active"],
    symbols: ["✎", "▤", "♫", "✦"],
    customPlaceholder: "Another hobby you love…"
  },
  {
    category: "Hobbies & creativity",
    kicker: "A LITTLE CURIOSITY",
    question: "What's something you'd love to learn or get better at?",
    subtitle: "Could be a skill, hobby, or something totally random.",
    options: ["An art or creative skill", "A language or new subject", "A sport or dance", "Something practical or hands-on"],
    symbols: ["✿", "✧", "☀", "◇"],
    customPlaceholder: "What would you love to learn?"
  },
  {
    category: "Food & little treats",
    kicker: "THE SNACK QUESTION",
    question: "What's your kind of treat when you want to make your day better?",
    subtitle: "The little things count.",
    options: ["Chocolate or something sweet", "Ice cream / dessert", "Spicy or savoury snacks", "A favourite drink or café treat"],
    symbols: ["♡", "❀", "✦", "☕"],
    customPlaceholder: "Specific favourite snack / drink…"
  },
  {
    category: "Food & little treats",
    kicker: "YOUR COMFORT FOOD",
    question: "If you could pick a favourite meal right now, what would it be?",
    subtitle: "No judgement. Food favourites are serious business.",
    options: ["Pizza / pasta", "Biryani / noodles", "Street food / spicy food", "Home-cooked comfort food"],
    symbols: ["✧", "♨", "☀", "♡"],
    customPlaceholder: "Name your actual favourite…"
  },
  {
    category: "Travel & places",
    kicker: "SOMEWHERE ELSE",
    question: "What kind of place would you love to spend a day exploring?",
    subtitle: "Imagine you have a free day and no rush.",
    options: ["Beach & ocean breeze", "Mountains & cool air", "A cute city / café hopping", "Quiet nature & green spaces"],
    symbols: ["≈", "△", "☕", "❀"]
  },
  {
    category: "Travel & places",
    kicker: "A LITTLE ESCAPE",
    question: "What's your ideal way to spend a completely free day?",
    subtitle: "The no-plans, no-pressure kind of day.",
    options: ["Going out with friends", "A cosy day at home", "Exploring somewhere new", "Doing a favourite hobby"],
    symbols: ["♡", "☁", "✧", "✿"]
  },
  {
    category: "Personality & mood",
    kicker: "YOUR SOCIAL BATTERY",
    question: "Which sounds most like you?",
    subtitle: "There are no wrong answers — people can be a mix.",
    options: ["Quiet at first, then talkative", "Outgoing pretty much everywhere", "A little of both, depending on the people", "I like my own space a lot"],
    symbols: ["☾", "☀", "✧", "☁"]
  },
  {
    category: "Personality & mood",
    kicker: "THE SMALL THINGS",
    question: "What's a little thing that can instantly make your day better?",
    subtitle: "The kind of thing people might not realise matters to you.",
    options: ["A thoughtful message", "My favourite song playing", "Good food or a sweet treat", "Time with my favourite people"],
    symbols: ["♡", "♫", "❀", "✿"],
    customPlaceholder: "Or tell us your own little joy…"
  },
  {
    category: "Dreams & goals",
    kicker: "A FUTURE LITTLE DREAM",
    question: "What's something you hope you get to experience someday?",
    subtitle: "Big dream, tiny dream — both belong here.",
    options: ["Travel somewhere special", "Learn / create something meaningful", "Reach a personal goal", "Have more peaceful, happy days"],
    symbols: ["✈", "✧", "☆", "☁"],
    customPlaceholder: "Anything you've been dreaming about…"
  },
  {
    category: "Favourite things",
    kicker: "A FEW MORE FAVOURITES",
    question: "Which kind of gift or gesture usually feels the most meaningful to you?",
    subtitle: "Not about price — just what makes something feel thoughtful.",
    options: ["Something handmade or personal", "Something I mentioned wanting", "A shared memory / experience", "A small surprise that fits my taste"],
    symbols: ["✿", "♡", "☾", "✧"]
  },
  {
    category: "Favourite things",
    kicker: "LAST ONE, PROMISE ♡",
    question: "What's one thing you wish more people knew about you?",
    subtitle: "Anything at all — your answer can be as short or detailed as you like.",
    options: ["My interests / things I love", "What makes me feel appreciated", "My goals and things I'm working on", "I'm still figuring that out"],
    symbols: ["♫", "♡", "☆", "☁"],
    customPlaceholder: "Your own answer… (optional)"
  }
];

import { db } from "./firebase-config.js?v=3";
import {
  addDoc,
  collection,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const welcomeScreen = document.querySelector("#welcomeScreen");
const quizScreen = document.querySelector("#quizScreen");
const doneScreen = document.querySelector("#doneScreen");

const consentCheckbox = document.querySelector("#consentCheckbox");
const participantNameInput = document.querySelector("#participantName");
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
const restartButton = document.querySelector("#restartButton");
const shareButton = document.querySelector("#shareButton");

const doneIntro = document.querySelector("#doneIntro");
const doneMessage = document.querySelector("#doneMessage");
const answerSummary = document.querySelector("#answerSummary");
const toast = document.querySelector("#toast");

let index = 0;
let answers = QUESTIONS.map(() => ({ choice: "", custom: "" }));
let toastTimeout;
let isSubmitting = false;

totalNumber.textContent = String(QUESTIONS.length).padStart(2, "0");
startButton.disabled = true;

consentCheckbox.addEventListener("change", () => {
  startButton.disabled = !consentCheckbox.checked;
});

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
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

function currentAnswerText(questionIndex) {
  const answer = answers[questionIndex];
  const question = QUESTIONS[questionIndex];
  const chosen = answer.choice
    ? question.options[Number(answer.choice)]
    : "";

  if (answer.custom.trim() && chosen) {
    return `${chosen} — ${answer.custom.trim()}`;
  }

  if (answer.custom.trim()) {
    return answer.custom.trim();
  }

  return chosen || "Skipped";
}

function hasAnswer() {
  return Boolean(
    answers[index].choice || answers[index].custom.trim()
  );
}

function renderQuestion() {
  const question = QUESTIONS[index];
  const answer = answers[index];

  categoryLabel.textContent = question.category;
  currentNumber.textContent = String(index + 1).padStart(2, "0");
  progressFill.style.width =
    `${((index + 1) / QUESTIONS.length) * 100}%`;

  questionKicker.textContent = question.kicker;
  questionTitle.textContent = question.question;
  questionSubtitle.textContent = question.subtitle;

  customAnswer.value = answer.custom;
  customAnswer.placeholder =
    question.customPlaceholder || "Type whatever comes to mind…";

  optionsList.replaceChildren();

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className =
      "option-button" +
      (answer.choice === String(optionIndex) ? " selected" : "");

    button.setAttribute(
      "aria-pressed",
      answer.choice === String(optionIndex) ? "true" : "false"
    );

    const symbol = document.createElement("span");
    symbol.className = "option-symbol";
    symbol.textContent = question.symbols?.[optionIndex] || "♡";

    const label = document.createElement("span");
    label.className = "option-text";
    label.textContent = option;

    button.append(symbol, label);

    button.addEventListener("click", () => {
      answer.choice = String(optionIndex);

      optionsList.querySelectorAll(".option-button").forEach(item => {
        const selected = item === button;
        item.classList.toggle("selected", selected);
        item.setAttribute("aria-pressed", String(selected));
      });

      nextButton.disabled = isSubmitting;
    });

    optionsList.append(button);
  });

  backButton.style.visibility = index === 0 ? "hidden" : "visible";

  nextButton.innerHTML =
    index === QUESTIONS.length - 1
      ? 'Finish <span>♡</span>'
      : 'Continue <span>→</span>';

  nextButton.disabled = isSubmitting;
}

function startQuiz() {
  if (!consentCheckbox.checked) return;
  if (!participantNameInput.value.trim()) {
    participantNameInput.setCustomValidity("Please enter your name before starting.");
    participantNameInput.reportValidity();
    participantNameInput.focus();
    return;
  }
  participantNameInput.setCustomValidity("");

  index = 0;
  answers = QUESTIONS.map(() => ({ choice: "", custom: "" }));

  showScreen(quizScreen);
  renderQuestion();
}

function moveBack() {
  answers[index].custom = customAnswer.value.slice(0, 180);

  if (index > 0) {
    index--;
    renderQuestion();
  }
}

async function moveNext() {
  answers[index].custom = customAnswer.value.slice(0, 180);

  if (isSubmitting) return;

  if (index < QUESTIONS.length - 1) {
    index++;
    renderQuestion();

    quizScreen.querySelector(".question-card").animate(
      [
        { opacity: 0, transform: "translateY(8px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 240, easing: "ease-out" }
    );

    return;
  }

  await submitAnswers();
}

async function submitAnswers() {
  if (isSubmitting) return;

  isSubmitting = true;
  nextButton.disabled = true;
  nextButton.textContent = "Saving…";

  // Always show the user's recap immediately; saving happens in the background.
  renderAnswerSummary();
  showScreen(doneScreen);
  doneIntro.textContent = "Here's a recap of what you shared. Your answers are being saved for the page's creator.";
  doneMessage.textContent = "Saving your responses…";

  const payload = QUESTIONS.map((question, questionIndex) => ({
    category: question.category,
    question: question.question,
    answer: currentAnswerText(questionIndex)
  }));

  try {
    await addDoc(collection(db, "cupidSubmissions"), {
      participantName: participantNameInput.value.trim().slice(0, 60),
      quizVersion: 1,
      answers: payload,
      consentGiven: true,
      createdAt: serverTimestamp()
    });

    doneIntro.textContent = "Your answers have been saved. Here's your little recap — you can review it before you go.";
    doneMessage.textContent = "Your responses have been saved. This recap is yours to keep or share.";
  } catch (error) {
    console.error("PROJECT CUPID submission failed:", error);
    doneIntro.textContent = "Here's your recap of what you shared. We couldn't save your answers to the creator's page this time.";
    doneMessage.textContent = "Your recap is still here, but the submission may not have reached the creator. Check your connection and try again later.";
    showToast("Your recap is ready, but saving failed. Please check your connection.");
  } finally {
    isSubmitting = false;
    nextButton.disabled = false;
  }
}

function renderAnswerSummary() {
  answerSummary.replaceChildren();

  QUESTIONS.forEach((question, questionIndex) => {
    const item = document.createElement("article");
    item.className = "summary-item";

    const category = document.createElement("small");
    category.textContent = question.category;

    const prompt = document.createElement("b");
    prompt.textContent = question.question;

    const response = document.createElement("p");
    response.className = "summary-answer-text";
    response.textContent = currentAnswerText(questionIndex);

    item.append(category, prompt, response);
    answerSummary.append(item);
  });
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = String(text).split(/\\s+/);
  let line = "";
  let cursorY = y;

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (ctx.measureText(candidate).width > maxWidth && line) {
      ctx.fillText(line, x, cursorY);
      line = word;
      cursorY += lineHeight;
    } else {
      line = candidate;
    }
  }

  if (line) {
    ctx.fillText(line, x, cursorY);
    cursorY += lineHeight;
  }

  return cursorY;
}

async function createRecapImage() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Image canvas is unavailable.");

  // Square social-card layout: 10 answers in each column.
  const size = 1200;
  const scale = 2;
  const margin = 72;
  const gap = 40;
  const cardX = 42;
  const cardY = 42;
  const cardSize = size - cardX * 2;
  const contentX = margin;
  const contentWidth = (size - margin * 2 - gap) / 2;
  const col2X = contentX + contentWidth + gap;
  const rows = QUESTIONS.map((question, questionIndex) => ({
    category: question.category,
    question: question.question,
    answer: currentAnswerText(questionIndex)
  }));

  canvas.width = size * scale;
  canvas.height = size * scale;
  ctx.scale(scale, scale);

  // Soft lavender paper with a warm, receipt-inspired card.
  ctx.fillStyle = "#eeeafa";
  ctx.fillRect(0, 0, size, size);
  const glow = ctx.createLinearGradient(0, 0, size, size);
  glow.addColorStop(0, "#f8eafa");
  glow.addColorStop(0.52, "#eef2ff");
  glow.addColorStop(1, "#e6f4f5");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, size, size);

  ctx.fillStyle = "rgba(255,255,255,0.46)";
  ctx.beginPath();
  ctx.arc(1080, 105, 170, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(80, 1110, 190, 0, Math.PI * 2);
  ctx.fill();

  ctx.shadowColor = "rgba(66, 52, 92, 0.12)";
  ctx.shadowBlur = 32;
  ctx.shadowOffsetY = 12;
  ctx.beginPath();
  ctx.roundRect(cardX, cardY, cardSize, cardSize, 38);
  ctx.fillStyle = "#fffdfc";
  ctx.fill();
  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;

  const name = participantNameInput.value.trim().slice(0, 60);
  ctx.textAlign = "center";
  ctx.fillStyle = "#b17b9f";
  ctx.font = "600 20px Arial";
  ctx.fillText("♡  A LITTLE ABOUT YOU  ♡", size / 2, 96);

  ctx.fillStyle = "#302d49";
  ctx.font = "bold 48px Georgia, serif";
  ctx.fillText("My little world", size / 2, 151);

  ctx.fillStyle = "#89839a";
  ctx.font = "400 20px Arial";
  const subtitle = name ? `A little recap for ${name}` : "A little recap of me";
  ctx.fillText(subtitle.length > 48 ? subtitle.slice(0, 45) + "…" : subtitle, size / 2, 185);

  // Decorative heart divider and clear two-column layout.
  ctx.strokeStyle = "#e8dce9";
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 7]);
  ctx.beginPath();
  ctx.moveTo(margin, 211);
  ctx.lineTo(size - margin, 211);
  ctx.stroke();
  ctx.setLineDash([]);

  const listTop = 244;
  const footerY = 1138;
  const listBottom = 1098;
  const columnGapX = contentX + contentWidth + gap / 2;
  ctx.strokeStyle = "#f0e6ee";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(columnGapX, listTop - 8);
  ctx.lineTo(columnGapX, listBottom);
  ctx.stroke();

  function drawWrapped(text, x, y, maxWidth, lineHeight, maxLines) {
    const words = String(text || "—").split(/\\s+/);
    let line = "";
    let lines = [];
    for (const word of words) {
      const candidate = line ? line + " " + word : word;
      if (ctx.measureText(candidate).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = candidate;
      }
    }
    if (line) lines.push(line);
    if (lines.length > maxLines) {
      lines = lines.slice(0, maxLines);
      let last = lines[maxLines - 1];
      while (last.length && ctx.measureText(last + "…").width > maxWidth) last = last.slice(0, -1);
      lines[maxLines - 1] = last.trimEnd() + "…";
    }
    lines.forEach((lineText, i) => ctx.fillText(lineText, x, y + i * lineHeight));
    return y + lines.length * lineHeight;
  }

  rows.forEach((row, index) => {
    const col = index < 10 ? 0 : 1;
    const localIndex = index % 10;
    const x = col === 0 ? contentX : col2X;
    const rowTop = listTop + localIndex * 84;
    const textWidth = contentWidth - 12;

    ctx.fillStyle = "#bd8bac";
    ctx.font = "bold 13px Arial";
    ctx.textAlign = "left";
    ctx.fillText(String(localIndex + 1).padStart(2, "0") + "  " + String(row.category).toUpperCase().slice(0, 22), x, rowTop);

    ctx.fillStyle = "#37324c";
    ctx.font = "600 16px Arial";
    let y = drawWrapped(row.question, x, rowTop + 22, textWidth, 19, 2);

    ctx.fillStyle = "#777187";
    ctx.font = "400 15px Arial";
    y = drawWrapped(row.answer, x, y + 2, textWidth, 18, 2);

    ctx.strokeStyle = "#f0e8ef";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, rowTop + 75);
    ctx.lineTo(x + contentWidth - 8, rowTop + 75);
    ctx.stroke();
  });

  ctx.textAlign = "center";
  ctx.fillStyle = "#ad7b9d";
  ctx.font = "600 19px Arial";
  ctx.fillText("made of little things  ♡", size / 2, footerY);

  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (blob) resolve(blob);
      else reject(new Error("Could not create recap image."));
    }, "image/png");
  });
}

async function shareResults() {
  shareButton.disabled = true;
  const originalButtonText = shareButton.innerHTML;
  shareButton.textContent = "Preparing image…";

  try {
    const blob = await createRecapImage();
    const file = new File([blob], "my-little-recap.png", { type: "image/png" });
    const shareData = { title: "My little world — recap", files: [file] };

    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      await navigator.share(shareData);
      return;
    }

    // If the browser cannot share image files directly, save the same PNG
    // so it can be attached to any app from the phone's gallery/downloads.
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "my-little-recap.png";
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
    showToast("Your recap image is ready! Open Downloads and share the PNG.");
  } catch (error) {
    if (error?.name !== "AbortError") {
      console.error("PROJECT CUPID image share failed:", error);
      showToast("Couldn't prepare the recap image. Please try again.");
    }
  } finally {
    shareButton.disabled = false;
    shareButton.innerHTML = originalButtonText;
  }
}

function restartQuiz() {
  if (isSubmitting) return;

  answers = QUESTIONS.map(() => ({ choice: "", custom: "" }));
  index = 0;

  showScreen(welcomeScreen);
}

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", moveNext);
backButton.addEventListener("click", moveBack);

customAnswer.addEventListener("input", () => {
  answers[index].custom = customAnswer.value.slice(0, 180);
  nextButton.disabled = isSubmitting;
});

restartButton.addEventListener("click", restartQuiz);
shareButton.addEventListener("click", shareResults);

document.addEventListener("keydown", event => {
  if (
    !quizScreen.hidden &&
    event.key === "Enter" &&
    document.activeElement !== customAnswer
  ) {
    event.preventDefault();

    if (!nextButton.disabled) {
      moveNext();
    }
  }
});
