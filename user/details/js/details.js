// const imgs = document.querySelectorAll(".img-select a");
// const imgBtns = [...imgs];
// let imgId = 1;

// imgBtns.forEach((imgItem) => {
//   imgItem.addEventListener("click", (event) => {
//     event.preventDefault();
//     imgId = imgItem.dataset.id;
//     slideImage();
//   });
// });

// function slideImage() {
//   const displayWidth = document.querySelector(
//     ".img-showcase img:first-child"
//   ).clientWidth;

//   document.querySelector(".img-showcase").style.transform = `translateX(${
//     -(imgId - 1) * displayWidth
//   }px)`;
// }

// window.addEventListener("resize", slideImage);

const Render = () => {
  let id = new URLSearchParams(window.location.search).get("id");

  let img_showcase = document.querySelector(".img-showcase");
  let title = document.getElementsByTagName("title");
  let lp = document.querySelector(".lp");
  let np = document.querySelector(".np");
  let des_1 = document.querySelector(".des-1");
  let des_2 = document.querySelector(".des-2");
  let product_title = document.querySelector(".product-title");

  fetch(`http://localhost:3000/product/${id}`)
    .then((response) => response.json())
    .then((data) => {
      title[0].innerHTML = `${data.name}`;

      product_title.innerHTML = `${data.name}`;

      img_showcase.innerHTML = `
      <img src="${data.image}" alt="chocolate image" />
      `;

      lp.innerHTML = `${
        parseInt(data.price) + parseInt((data.price * 20) / 100)
      } VND`;
      np.innerHTML = `${data.price} VND (20%)`;

      des_1.innerHTML = `${data.des_1}`;
      des_2.innerHTML = `${data.des_2}`;
    });
};
Render();
