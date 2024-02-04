// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUxISpYEEwi_He014tjV6LSspoAcVQa8w",
  authDomain: "end-of-jsi16-project.firebaseapp.com",
  projectId: "end-of-jsi16-project",
  storageBucket: "end-of-jsi16-project.appspot.com",
  messagingSenderId: "418674849006",
  appId: "1:418674849006:web:0c3cb606b1ca3153452fff",
  measurementId: "G-TF32YC5ZDL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
