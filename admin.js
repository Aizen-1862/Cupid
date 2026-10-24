import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";
import { collection, getDocs, limit, orderBy, query } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";

const loginPanel = document.querySelector("#loginPanel");
const dashboardPanel = document.querySelector("#dashboardPanel");
const loginForm = document.querySelector("#loginForm");
const loginMessage = document.querySelector("#loginMessage");
const statusMessage = document.querySelector("#statusMessage");
const uidLine = document.querySelector("#uidLine");
const submissionsList = document.querySelector("#submissionsList");
const signOutButton = document.querySelector("#signOutButton");
const refreshButton = document.querySelector("#refreshButton");

loginForm.addEventListener("submit", async event => {
  event.preventDefault();
  loginMessage.textContent = "Signing in…";
  try {
    await signInWithEmailAndPassword(auth, document.querySelector("#email").value.trim(), document.querySelector("#password").value);
    loginMessage.textContent = "Signed in.";
  } catch (error) {
    loginMessage.textContent = friendlyError(error);
  }
});
signOutButton.addEventListener("click", () => signOut(auth));
refreshButton.addEventListener("click", () => loadSubmissions());

onAuthStateChanged(auth, async user => {
  loginPanel.hidden = Boolean(user);
  dashboardPanel.hidden = !user;
  if (!user) return;
  uidLine.textContent = `Signed in UID: ${user.uid} — use this UID in firestore.rules, then Publish the rules.`;
  await loadSubmissions();
});

function friendlyError(error) {
  if (error?.code === "auth/invalid-credential" || error?.code === "auth/wrong-password" || error?.code === "auth/user-not-found") return "Email or password is incorrect. Check Firebase Authentication setup.";
  if (error?.code === "auth/too-many-requests") return "Too many attempts. Wait a while, then try again.";
  return `Sign-in failed: ${error?.message || "unknown error"}`;
}
function safeText(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  node.textContent = text;
  return node;
}
async function loadSubmissions() {
  statusMessage.textContent = "Loading submissions…";
  submissionsList.replaceChildren();
  try {
    const q = query(collection(db, "cupidSubmissions"), orderBy("createdAt", "desc"), limit(100));
    const snapshot = await getDocs(q);
    if (snapshot.empty) {
      statusMessage.textContent = "No submissions yet. When someone finishes the quiz, their answers will appear here.";
      return;
    }
    statusMessage.textContent = `${snapshot.size} submission${snapshot.size === 1 ? "" : "s"} shown (maximum 100).`;
    snapshot.forEach((docSnap, i) => {
      const data = docSnap.data();
      const card = document.createElement("article");
      card.className = "submission-card";
      card.append(safeText("h2", "", `Response ${snapshot.size - i}`));
      let dateLabel = "Date unavailable";
      if (data.createdAt?.toDate) dateLabel = data.createdAt.toDate().toLocaleString();
      card.append(safeText("p", "submission-meta", `${dateLabel} · consent recorded`));
      const grid = document.createElement("div");
      grid.className = "submission-answers";
      (Array.isArray(data.answers) ? data.answers : []).forEach(answer => {
        const tile = document.createElement("div");
        tile.className = "answer-tile";
        tile.append(safeText("small", "", answer.category || "Answer"));
        tile.append(safeText("b", "", `${answer.question || ""}\n${answer.answer || "Skipped"}`));
        grid.append(tile);
      });
      card.append(grid);
      submissionsList.append(card);
    });
  } catch (error) {
    console.error("Could not load submissions:", error);
    statusMessage.textContent = "Could not load submissions. Check that your signed-in UID exactly matches the admin UID in Firestore Rules, and that the rules are published. " + (error?.message || "");
  }
}
