const API_URL = "https://fakestoreapi.com/products";

const productsContainer = document.getElementById("products-container");

function createProductCard(product) {
    const card = document.createElement("article");
    card.classList.add("character-card");

    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>$${product.price}</p>
    `;

    return card;
}

async function getProducts() {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log("Respuesta de la API:", data);

    productsContainer.innerHTML = "";

    data.forEach(product => {
        const card = createProductCard(product);
        productsContainer.appendChild(card);
    });
}

getProducts();
