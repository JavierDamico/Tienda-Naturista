var products = [
    {
        photo: "https://placeimg.com/250/250/nature",
        productName: "Nombre del producto 1",
        price: "$2000"
    },
    {
        photo: "https://placeimg.com/250/250/nature",
        productName: "Nombre del producto 2",
        price: "$2000"
    },
    {
        photo: "https://placeimg.com/250/250/nature",
        productName: "Nombre del producto 3",
        price: "$2000"
    },
    {
        photo: "https://placeimg.com/250/250/nature",
        productName: "Nombre del producto 4",
        price: "$2000"
    },
    {
        photo: "https://placeimg.com/250/250/nature",
        productName: "Nombre del producto 5",
        price: "$2000"
    },
    {
        photo: "https://placeimg.com/250/250/nature",
        productName: "Nombre del producto 6",
        price: "$2000"
    },
    {
        photo: "https://placeimg.com/250/250/nature",
        productName: "Nombre del producto 7",
        price: "$2000"
    },
    {
        photo: "https://placeimg.com/250/250/nature",
        productName: "Nombre del producto 8",
        price: "$2000"
    },
    {
        photo: "https://placeimg.com/250/250/nature",
        productName: "Nombre del producto 9",
        price: "$2000"
    },
    {
        photo: "https://placeimg.com/250/250/nature",
        productName: "Nombre del producto 10",
        price: "$2000"
    },
    {
        photo: "https://placeimg.com/250/250/nature",
        productName: "Nombre del producto 11",
        price: "$2000"
    },
    {
        photo: "https://placeimg.com/250/250/nature",
        productName: "Nombre del producto 12",
        price: "$2000"
    }
];

var items = document.querySelector(".tarj-prod");

var count = 4;

function showItems(q) {
    for (var i = 0; i < q; i++) {
        items.innerHTML += `
              <div class="items">
                  <img src="${products[i].photo}" alt="${products[i].productName}" />
                  <p>
                    <span class="nombre">${products[i].productName}</span>
                    <span class="precio">${products[i].price}</span>
                  </p>
              </div>
          `;
    }

};

showItems(count);


// var verMas = document.querySelector(".btn");

// verMas.addEventListener("click", function () {



// });

