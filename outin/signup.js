import {
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { db } from "./firebase.js";

// if (localStorage.getItem("user") != null) {
//   if (JSON.parse(localStorage.getItem("user"))["role"] != 1) {
//     window.location.href = "/CUD/html/dashboard.html";
//   } else {
//     window.location.href = "/admin/html/admin.html";
//   }
// }

const registerForm = document.getElementById("register-form");
const submitButton = document.querySelector(".submit-button");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let email = registerForm.email.value.trim();
  let password = registerForm.password.value.trim();
  let name = registerForm.name.value.trim();
  let repassword = registerForm.repassword.value.trim();

  if (name == "" || email == "" || password == "" || repassword == "") {
    alert("Please fill all the fields below");
  } else if (repassword != password) {
    alert("Passwords are not the same");
  } else {
    setDoc(doc(db, "users", `${name}`), {
      email: email,
      password: password,
    });
    alert("account created!");
  }
});
