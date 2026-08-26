const API_URL = "https://fakestoreapi.com/products";
const productDetailContainer = document.getElementById("product-detail");
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

async function getProductDetail() {
    const response = await fetch(API_URL + "/" + productId);
    const product = await response.json();

    console.log("Respuesta de la API:", product);

    productDetailContainer.innerHTML = "";

    const card = createProductCard(product);
    productDetailContainer.appendChild(card);
}

function createProductCard(product) {
    const card = document.createElement("article");
    card.classList.add("product-detail-card");

    card.innerHTML = `
        <img
            src="${product.image}"
            alt="${product.title}"
        >
        <div class="product-detail-info">
            <h2>${product.title}</h2>
            <p>Categoría: ${product.category}</p>
            <p>Precio: $${product.price}</p>
            <p>Calificación: ${product.rating.rate} (${product.rating.count} reseñas)</p>
            <p>${product.description}</p>
        </div>
    `;

    return card;
}

getProductDetail();
