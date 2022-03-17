const url =
  "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let html = "";
    let productos = [];
    let carrito = [];
    let contador = 0;

    data.forEach((element) => {
      const name = element["name"];
      html += `<a class="nav-link active ${name}" href="#productos" id="btn${contador}">${name}</a>`;
      productos[contador] = element["products"];
      contador++;
    });

    let products = [];

    productos.forEach((p) => {
      p.forEach((e) => {
        products.push(e);
      });
    });

    document.querySelector(".navbar-nav").innerHTML = html;

    const navb = document.querySelector("#navb");

    let cantidad = 0;

    let html1 = "";

    navb.addEventListener("click", (e) => {
      if (e.target.classList.contains("Burguers")) {
        console.log(e.parentElement);
        html1 = "BURGUERS";
        document.querySelector(".Roboto").innerHTML = html1;
        html1 = "";
        productos[0].forEach((p) => {
          html1 +=
            `<div class= "card col-lg-3 d-flex align-items-stretch justify-content-center">` +
            `<div class="d-flex justify-content-center">` +
            `<img src=${p["image"]} class="card-img-top"/>` +
            `</div>` +
            `<div class="card-body d-flex flex-column" id="${p["name"]}">` +
            `<h5 class="card-title d-flex justify-content-center">${p["name"]}</h5>` +
            `<p class="card-text" id="descripcion1">${p["description"]}</p>` +
            `<p class="card-text d-flex justify-content-start" id="price"> $ ${p["price"]} </p>` +
            `<a href="#" class="btn btn-primary d-flex justify-content-center">Add to cart</a>` +
            `</div>` +
            `</div>`;
        });
        document.querySelector("#productos").innerHTML = html1;
      } else if (e.target.classList.contains("Tacos")) {
        html1 = "TACOS";
        document.querySelector(".Roboto").innerHTML = html1;
        html1 = "";
        productos[1].forEach((p) => {
          html1 +=
            `<div class= "card col-lg-3 d-flex align-items-stretch justify-content-center">` +
            `<div class="d-flex justify-content-center">` +
            `<img src=${p["image"]} class="card-img-top"/>` +
            `</div>` +
            `<div class="card-body d-flex flex-column" id="${p["name"]}">` +
            `<h5 class="card-title d-flex justify-content-center">${p["name"]}</h5>` +
            `<p class="card-text" id="descripcion1">${p["description"]}</p>` +
            `<p class="card-text d-flex justify-content-start" id="price"> $ ${p["price"]} </p>` +
            `<a href="#" class="btn btn-primary d-flex justify-content-center">Add to cart</a>` +
            `</div>` +
            `</div>`;
        });
        document.querySelector("#productos").innerHTML = html1;
      } else if (e.target.classList.contains("Salads")) {
        html1 = "SALADS";
        document.querySelector(".Roboto").innerHTML = html1;
        html1 = "";
        productos[2].forEach((p) => {
          html1 +=
            `<div class= "card col-lg-3 d-flex align-items-stretch justify-content-center">` +
            `<div class="d-flex justify-content-center">` +
            `<img src=${p["image"]} class="card-img-top"/>` +
            `</div>` +
            `<div class="card-body d-flex flex-column align-items-stretch" id="${p["name"]}">` +
            `<h5 class="card-title d-flex justify-content-center">${p["name"]}</h5>` +
            `<p class="card-text" id="descripcion1">${p["description"]}</p>` +
            `<p class="card-text d-flex justify-content-start" id="price"> $ ${p["price"]} </p>` +
            `<a href="#" class="btn btn-primary d-flex justify-content-center">Add to cart</a>` +
            `</div>` +
            `</div>`;
        });
        document.querySelector("#productos").innerHTML = html1;
      } else if (e.target.classList.contains("Desserts")) {
        html1 = "DESSERTS";
        document.querySelector(".Roboto").innerHTML = html1;
        html1 = "";
        productos[3].forEach((p) => {
          html1 +=
            `<div class= "card col-lg-3 d-flex align-items-stretch justify-content-center">` +
            `<div class="d-flex justify-content-center">` +
            `<img src=${p["image"]} class="card-img-top"/>` +
            `</div>` +
            `<div class="card-body d-flex flex-column align-items-stretch" id="${p["name"]}">` +
            `<h5 class="card-title d-flex justify-content-center">${p["name"]}</h5>` +
            `<p class="card-text" id="descripcion1">${p["description"]}</p>` +
            `<p class="card-text d-flex justify-content-start" id="price"> $ ${p["price"]} </p>` +
            `<a href="#" class="btn btn-primary d-flex justify-content-center">Add to cart</a>` +
            `</div>` +
            `</div>`;
        });
        document.querySelector("#productos").innerHTML = html1;
      } else if (e.target.classList.contains("Drinks")) {
        html1 = "DRINKS AND SIDES";
        document.querySelector(".Roboto").innerHTML = html1;
        html1 = "";
        productos[4].forEach((p) => {
          html1 +=
            `<div class= "card col-lg-3 d-flex align-items-stretch justify-content-center">` +
            `<div class="d-flex justify-content-center">` +
            `<img src=${p["image"]} class="card-img-top"/>` +
            `</div>` +
            `<div class="card-body d-flex flex-column align-items-stretch" id="${p["name"]}">` +
            `<h5 class="card-title d-flex justify-content-center">${p["name"]}</h5>` +
            `<p class="card-text" id="descripcion1">${p["description"]}</p>` +
            `<p class="card-text d-flex justify-content-start" id="price"> $ ${p["price"]} </p>` +
            `<a href="#" class="btn btn-primary d-flex justify-content-center">Add to cart</a>` +
            `</div>` +
            `</div>`;
        });
        document.querySelector("#productos").innerHTML = html1;
      }
    });

    const cant = document.querySelector("#cantidad");

    const prod = document.querySelector("#productos");

    prod.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn")) {
        var prod = products.filter(
          (p) => p["name"] === e.target.parentElement.id
        );
      
      if (carrito.filter((p) => p === prod[0]).length === 0) {
        carrito.push(prod[0]);
        cantidad++;
      } else {
        carrito.push(prod[0]);
      }
      cant.textContent = cantidad + " items";
      }
      else if (e.target.classList.contains("suma")){

        let name =e.target.parentElement.parentElement.id;
        let obj = carrito.filter((p) => p['name'] === name);
        carrito.push(obj[0]);
        table();

      } else if(e.target.classList.contains("resta")){
        let name =e.target.parentElement.parentElement.id;
        let objetos= carrito.filter((p) => p['name'] === name);
        carrito = carrito.filter((p) => p['name'] !== name);
        objetos.pop();
        objetos.forEach( f => {
            carrito.push(f);
        });
        table();
      }
      else if (e.target.classList.contains("cancel")){

        console.log("suma")

      } else if(e.target.classList.contains("confirm")){
        console.clear();
        console.log(carrito);

      }
    });

    const carr = document.querySelector("#carrito");

    carr.addEventListener("click", (e) => {
        table()
    })
    
    function table(){
      let html2 = "";
      document.querySelector(".Roboto").innerHTML = "ORDER DETAIL";

      html2 += `<div class="container-fluid" id="tabla1">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Qty.</th>
            <th scope="col">Description</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Amount</th>
            <th scope="col">Modify</th>
          </tr>
        </thead>
        <tbody>`;

      let item = 0;
      let qty = 0;
      let des = "";
      let price = 0;
      let amount = 0;
      let items = [];
      let total = 0;

      carrito.forEach((p) => {
        if (!items.includes(p)) {
          item++;
          qty = carrito.filter((p1) => p1 === p).length;
          des = p["name"];
          price = p["price"];
          amount = price * qty;
          items.push(p);
          total += amount;

          html2 += `<tr id= "${des}">
          <th scope="row">${item}</th>
          <td>${qty}</td>
          <td>${des}</td>
          <td>${price}</td>
          <td>${amount.toFixed(2)}</td>
          <td> <button type="button" id="sumar" class="suma">+</button>
          <button type="button" id="restar" class="resta">-</button></td>
          </tr>`;
        }
      });

      html2 += `</tbody>
      </table>
      <div class="row">
      <div class="col-7">
      <p class="d-flex justify-content-start">Total: $ ${total.toFixed(2)}</p>
      </div>
      <div class="col-2">
      <button type="button" class="cancel" id="cancel">Cancel</button>
      </div>
      <div class="col-2">
      <button type="button" class="confirm" id="confirm">Confirm</button></td>
      </div>
      </div>
      </div>`;

      document.querySelector("#productos").innerHTML = html2;
    };
    
  });
