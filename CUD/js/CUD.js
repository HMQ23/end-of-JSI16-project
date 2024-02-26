let chek = JSON.parse(localStorage.getItem("user"));

if (chek?.role != 0 || chek == null) {
  let NF = document.getElementsByTagName("body")[0];
  NF.innerHTML = `
      <h1 style="text-align:center">Error</h1>
      <br>
      <a href="/index/home/html/index.html">
        <h2 style="text-align:center">Home</h2>
      </a>
  `;
}

function addProduct() {
  let pfp_link = document.querySelector("#pfp-link").value;
  let product_name = document.querySelector("#product-name").value;
  let product_price = document.querySelector("#product-price").value;
  let des1 = document.querySelector("#des1").value;
  let des2 = document.querySelector("#des2").value;

  fetch("http://localhost:3000/product", {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify({
      name: product_name,
      price: product_price,
      image: pfp_link,
      des_1: des1,
      des_2: des2,
    }),
  });
  window.location.href = "products.html";
}

const logOut = () => {
  if (confirm("Are you sure you want to log out?")) {
    localStorage.clear();
    window.location.href = "/index/home/html/index.html";
  }
};

const Render = () => {
  let products = document.querySelector("#products");

  if (products) {
    products.innerHTML = `
    <tr>
      <th style="text-align: center">id</th>
      <th style="text-align: center">Name</th>
      <th style="text-align: center">Prices</th>
      <th style="text-align: center">Update/Delete</th>
    </tr>
    `;

    fetch(`http://localhost:3000/product/`)
      .then((response) => response.json())
      .then((data) => {
        for (let item of data) {
          products.innerHTML += `
            <tr>
                <td style="width:5%; text-align:center">${item.id}</td>
                <td width="55%">${item.name}</td>
                <td style="width:10%; text-align:center">${item.price}</td>
                <td class="buttons">
                    <a href="update.html?id=${item.id}"><button class="bttn button-1">Update</button></a>
                    <button class="bttn button-2" onclick="deleteProduct(${item.id})">Delete</button>
                </td>
            </tr>
          `;
        }
      });
  }
};
Render();

const deleteProduct = (id) => {
  let check = window.confirm("Are you sure to delete this product?");
  if (check) {
    fetch(`http://localhost:3000/product/${id}`, {
      method: "DELETE",
    });
    alert("Deleted");
  }
};

const updateProduct = () => {
  let id = new URLSearchParams(window.location.search).get("id");

  let pfp_link = document.querySelector("#pfp-link").value;
  let product_name = document.querySelector("#product-name").value;
  let product_price = document.querySelector("#product-price").value;
  let product_types = document.querySelector("#product-types").value;
  let des1 = document.querySelector("#des1").value;
  let des2 = document.querySelector("#des2").value;

  fetch(`http://localhost:3000/product/${id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify({
      name: product_name,
      price: product_price,
      image: pfp_link,
      des_1: des1,
      des_2: des2,
    }),
  });

  window.location.href = "products.html";
};

const showUpdate = () => {
  let id = new URLSearchParams(window.location.search).get("id");

  if (id) {
    let update = document.querySelector(".form");

    fetch(`http://localhost:3000/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        update.innerHTML = `
          <div class="left">
            <p>Product Information</p>
            <hr />
            <br />
            <label for="pfp-link">Profile Picture Link</label><br />
            <textarea
              id="pfp-link"
              rows="3"
              cols="35"
              placeholder="Enter picture link"
            >${data.image}</textarea
            ><br />

            <br /><br /><br />
            <button
              type="submit"
              title="submit"
              onclick="updateProduct()"
              style="
                width: 130px;
                height: 50px;
                border-radius: 10px;
                border: none;
                cursor: pointer;
                background-color: #007bff;
              "
            >
              Submit
            </button>
          </div>

          <div class="right">
            <br />
            <br />
            <label for="product-name">Product Name</label><br />
            <textarea
              id="product-name"
              rows="2"
              cols="30"
              placeholder="Enter product name"
            >${data.name}</textarea
            ><br />
            <label for="product-price">Product Price</label><br />
            <input
              type="number"
              id="product-price"
              placeholder="Enter product price"
              value="${data.price}"
            /><br />
            <label for="product-types">Product Types</label><br />
            <select id="product-types">
              <option value="cookies">Cookies</option>
              <option value="candy">Candy</option>
              <option value="chocolate">Chocolate</option></select
            ><br />
            <label for="des1">Description 1</label><br />
            <textarea
              id="des1"
              rows="4"
              cols="50"
              placeholder="Description 1"
            >${data.des_1}</textarea
            ><br />
            <label for="des2">Description 2</label><br />
            <textarea
              id="des2"
              rows="4"
              cols="50"
              placeholder="Description 2"
            >${data.des_2}</textarea
            ><br />
          </div>
        `;
      });
  }
};
showUpdate();

const deleteAcc = () => {
  let checking = confirm("Are you sure to delete this account?");

  ide = chek.id;

  if (checking) {
    fetch(`http://localhost:3000/user/${ide}`, {
      method: "DELETE",
    });
    localStorage.clear();
    window.location.href = "/index/home/html/index.html";
    alert("Deleted");
  }
};
