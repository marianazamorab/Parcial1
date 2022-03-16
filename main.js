const url =
  "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let html = "";
    let productos = [];
    const carrito = [];
    let contador = 0;

    data.forEach((element) => {
      const name = element["name"];
      html += `<a class="nav-link active ${name}" href="#productos" id="btn${contador}">${name}</a>`;
      productos[contador] = element["products"];
      contador++;
    });

    let products = [];

    productos.forEach(p => {
        p.forEach(e => {
            products.push(e);
        })
    })

    document.querySelector(".navbar-nav").innerHTML = html;

    const navb = document.querySelector("#navb");

    let cantidad = 0;

    let html1 = "";

    navb.addEventListener("click", (e) => {
      if (e.target.classList.contains("Burguers")) {
        console.log(e.parentElement)
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
            `<p class="card-text">${p["description"]}</p>` +
            `<p class="card-text"> $ ${p["price"]} </p>` +
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
            `<p class="card-text">${p["description"]}</p>` +
            `<p class="card-text"> $ ${p["price"]} </p>` +
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
            `<p class="card-text">${p["description"]}</p>` +
            `<p class="card-text"> $ ${p["price"]} </p>` +
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
            `<p class="card-text">${p["description"]}</p>` +
            `<p class="card-text"> $ ${p["price"]} </p>` +
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
            `<p class="card-text">${p["description"]}</p>` +
            `<p class="card-text"> $ ${p["price"]} </p>` +
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
        carrito.push(prod);
        if(carrito.(prod)){ cantidad++; }
        cant.textContent = cantidad;
      }
    });
  });
