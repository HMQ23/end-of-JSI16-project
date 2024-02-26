import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUxISpYEEwi_He014tjV6LSspoAcVQa8w",
  authDomain: "end-of-jsi16-project.firebaseapp.com",
  projectId: "end-of-jsi16-project",
  storageBucket: "end-of-jsi16-project.appspot.com",
  messagingSenderId: "418674849006",
  appId: "1:418674849006:web:0c3cb606b1ca3153452fff",
  measurementId: "G-TF32YC5ZDL",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
