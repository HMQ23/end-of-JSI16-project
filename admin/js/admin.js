let check = JSON.parse(localStorage.getItem("user"));

if (check?.role != 1 || check == null) {
  let NF = document.getElementsByTagName("body")[0];
  NF.innerHTML = `
      <h1>Error</h1>
      <br>
      <a href="/index/home/html/index.html"><h2>Home</h2></a>
  `;
}

let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
  nav.classList.toggle("navclose");
});

const logOut = () => {
  if (confirm("Are you sure you want to log out?")) {
    localStorage.clear();
    window.location.href = "/index/home/html/index.html";
  }
};
