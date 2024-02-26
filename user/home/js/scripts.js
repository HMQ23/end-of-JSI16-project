var modal = document.getElementById("myModal");
var btn = document.getElementById("cart");
var close = document.getElementsByClassName("close")[0];
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];

// modal
btn.onclick = function () {
  modal.style.display = "block";
};
close.onclick = function () {
  modal.style.display = "none";
};
close_footer.onclick = function () {
  modal.style.display = "none";
};
order.onclick = function () {
  done = alert("Purchased");
  if (done) {
    modal.style.display = "none";
  }
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

localStorage.setItem("a", "");

// xóa cart
// var remove_cart = document.getElementsByClassName("btn-danger");
// for (var i = 0; i < remove_cart.length; i++) {
//   var button = remove_cart[i];
//   button.addEventListener("click", function () {
//     var button_remove = event.target;
//     button_remove.parentElement.parentElement.remove();
//   });
// }

// update cart
// function updatecart() {
//   var cart_item = document.getElementsByClassName("cart-items")[0];
//   var cart_rows = cart_item.getElementsByClassName("cart-row");
//   var total = 0;
//   for (var i = 0; i < cart_rows.length; i++) {
//     var cart_row = cart_rows[i];
//     var price_item = cart_row.getElementsByClassName("cart-price")[0];
//     var quantity_item = cart_row.getElementsByClassName(
//       "cart-quantity-input"
//     )[0];
//     var price = parseFloat(price_item.innerText); // chuyển một chuổi string sang number để tính tổng tiền.
//     var quantity = quantity_item.value; // lấy giá trị trong thẻ input
//     total = total + price * quantity;
//   }
//   document.getElementsByClassName("cart-total-price")[0].innerText =
//     total + "VNĐ";
// }

// Thêm vào giỏ
// var add_cart = document.getElementsByClassName("btn-cart");
// for (var i = 0; i < add_cart.length; i++) {
//   var add = add_cart[i];
//   add.addEventListener("click", function (event) {
//     var button = event.target;
//     var product = button.parentElement.parentElement;
//     var img = product.parentElement.getElementsByClassName("img-prd")[0].src;
//     var title =
//       product.getElementsByClassName("content-product-h3")[0].innerText;
//     var price = product.getElementsByClassName("price")[0].innerText;
//     addItemToCart(title, price, img);
//     modal.style.display = "block";

//     updatecart();
//   });
// }

// function addItemToCart(title, price, img) {
//   let cartRow = document.createElement("div");
//   cartRow.classList.add("cart-row");
//   let cartItems = document.querySelector("cart-items");
//   let cart_title = cartItems.getElementsByClassName("cart-item-title");
//   for (let i = 0; i < cart_title.length; i++) {
//     if (cart_title[i].innerText == title) {
//       alert("Sản Phẩm Đã Có Trong Giỏ Hàng");
//       return;
//     }
//   }

// let cartRowContents = `
//   <div class="cart-item cart-column">
//       <img class="cart-item-image" src="${img}" width="100" height="100">
//       <span class="cart-item-title">${title}</span>
//   </div>
//   <span class="cart-price cart-column">${price}</span>
//   <div class="cart-quantity cart-column">
//       <input class="cart-quantity-input" type="number" value="1">
//       <button class="btn btn-danger" type="button">Xóa</button>
//   </div>
// `;

//   cartRow.innerHTML = cartRowContents;
//   cartItems.append(cartRow);
//   cartRow
//     .getElementsByClassName("btn-danger")[0]
//     .addEventListener("click", function () {
//       let button_remove = event.target;
//       button_remove.parentElement.parentElement.remove();
//       updatecart();
//     });
//   cartRow
//     .getElementsByClassName("cart-quantity-input")[0]
//     .addEventListener("change", function (event) {
//       var input = event.target;
//       if (isNaN(input.value) || input.value <= 0) {
//         input.value = 1;
//       }
//       updatecart();
//     });
// }

// thay đổi số lượng sản phẩm
// var quantity_input = document.getElementsByClassName("cart-quantity-input");
// for (var i = 0; i < quantity_input.length; i++) {
//   var input = quantity_input[i];
//   input.addEventListener("change", function (event) {
//     var input = event.target;
//     if (isNaN(input.value) || input.value <= 0) {
//       input.value = 1;
//     }
//     updatecart();
//   });
// }

const carting = (id) => {
  localStorage.setItem("a", id);
};

const Cart = () => {
  let cart_items = document.querySelectorAll(".cart-items");

  if (cart_items) {
    aa = localStorage.getItem("a");

    for (let i of aa) {
      fetch(`http://localhost:3000/product/${i}`)
        .then((response) => response.json())
        .then((data) => {
          for (let item of data) {
            cart_items.innerHTML += `
          <div class="cart-item cart-column">
            <img class="cart-item-image" src="${item.image}" width="100" height="100">
            <span class="cart-item-title">${item.name}</span>
          </div>
          <span class="cart-price cart-column">${item.price}</span>
          <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">Xóa</button>
          </div>
        `;
          }
        });
    }
  }
};
Cart();

// content
const Render = () => {
  let products_list = document.querySelector(".products-list");

  fetch("http://localhost:3000/product")
    .then((response) => response.json())
    .then((data) => {
      for (let item of data) {
        products_list.innerHTML += `
          <li class="main-product">
            <a href="/index/details/html/details.html?id=${item.id}">
              <div class="img-product">
                <img class="img-prd" src=${item.image} alt="" />
              </div>
            </a>
            
            <div class="content-product" value="${item.id}">
              <h3 class="content-product-h3">${item.name}</h3>
              <div class="content-product-deltals">
                <div class="price">
                  <span class="money">${item.price} VNĐ</span>
                </div>
                <button type="button" class="btn btn-cart" onclick="carting(${item.id})">Add to Cart</button>
              </div>
            </div>
          </li> 
          `;
      }
    });
};
Render();
