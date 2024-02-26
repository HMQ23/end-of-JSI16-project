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

  // const docRef = doc(db, "user", `${name}`);
  // const docSnap = getDocs(docRef);
  // console.log("docSnap: ", docSnap.email);

  const querySnapshot = getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });

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
