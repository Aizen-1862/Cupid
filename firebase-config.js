
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Replace these example values with YOUR Firebase web app config.
const firebaseConfig = {
  apiKey: "AIzaSyA_r8blZS-w00-FhoK292w7I7ZBl_byYp8",
  authDomain: "cupid-abcec.firebaseapp.com",
  projectId: "cupid-abcec",
  storageBucket: "cupid-abcec.firebasestorage.app",
  messagingSenderId: "1:823438889023:web:9a0c4cf67ad6444640e88a",
  appId: "G-5TV211S2CF"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
