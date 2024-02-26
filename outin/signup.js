import {
  collection,
  doc,
  getFirestore,
  setDoc,
  getDocs,
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
    async function checkData(email, password, name) {
      const querySnapshot = await getDocs(collection(db, "users"));
      let count = 0;

      try {
        querySnapshot.forEach((user) => {
          if (name == user.data().name || email == user.data().email) {
            throw new Error("Break the loop");
          }
        });
      } catch (error) {
        count += 1;
      }

      if (count == 0) {
        setDoc(doc(db, "users", `${name}`), {
          name: name,
          email: email,
          password: password,
        });
        localStorage.setItem(
          "user",
          JSON.stringify({ name: name, email: email, password: password })
        );
        alert("account created!");
        // window.location.href = "/cuoikhoa/CUD/html/dashboard.html";
      } else {
        alert("account already exists!, please sign in");
        // window.location.href = "signin.html";
      }
    }

    checkData(email, password, name);
  }
});
