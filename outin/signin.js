import {
  collection,
  doc,
  getDocs,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { db } from "./firebase.js";

const registerForm = document.querySelector("#register-form");
const submitButton = document.querySelector(".submit-button");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let email = registerForm.email.value.trim();
  let password = registerForm.password.value.trim();
  let name = registerForm.name.value.trim();

  async function checkData(email, password, name) {
    const querySnapshot = await getDocs(collection(db, "users"));
    let count = 0;

    try {
      querySnapshot.forEach((user) => {
        if (
          name == user.data().name &&
          email == user.data().email &&
          password == user.data().password
        ) {
          throw new Error("Break the loop");
        }
      });
    } catch (error) {
      count += 1;
    }

    if (count == 1) {
      alert("account founded!");
    } else {
      alert("account NOT founded!");
    }
  }

  checkData(email, password, name);

  // fetch("http://localhost:3000/user")
  // .then((response) => response.json())
  // .then((data) => {
  //   for (let user of data) {
  //     if (
  //       (name == user.name || email == user.email) &&
  //       password == user.password
  //     ) {
  //       localStorage.setItem("user", JSON.stringify(user));
  //       if (user.role == 1) {
  //         window.location.href = `/admin/html/admin.html`;
  //       } else {
  //         window.location.href = `/CUD/html/dashboard.html`;
  //       }
  //       return;
  //     } else if (
  //       (name == user.name || email == user.email) &&
  //       password != user.password
  //     ) {
  //       alert("Wrong password");
  //       return;
  //     }
  //   }
  //   alert("User not found");
  // });
});
