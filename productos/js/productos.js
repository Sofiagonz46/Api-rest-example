const API_URL = "https://dummyjson.com/products";

// Botón para cargar los productos
const loadProductsButton = document.getElementById("load-products");
loadProductsButton.addEventListener("click", loadProducts);

// Input para buscar por nombre
const nameFilter = document.getElementById("name-filter");
nameFilter.addEventListener("input", applyFilters);

// Contenedor de productos
const productsContainer = document.getElementById("products-container");

// Contador de productos
const productsCounter = document.getElementById("products-counter");

// Productos obtenidos de la API
let _products = [];

// Cargar productos desde la API
async function loadProducts() {
  try {
    const productsData = await fetch(API_URL);
    const productsJsonData = await productsData.json();

    console.log(productsJsonData);
    console.log("Cantidad de productos:", productsJsonData.products.length);

    _products = productsJsonData.products;

    displayProducts(_products);
  } catch (error) {
    console.log("Error al cargar los productos:", error);
  }
}

// Mostrar cards
function displayProducts(productsToDisplay) {
  productsContainer.innerHTML = "";

  productsCounter.textContent =
    `Productos encontrados: ${productsToDisplay.length}`;

  productsToDisplay.forEach((product) => {
    const card = document.createElement("article");
    card.classList.add("product-card");

    card.innerHTML = `
      <h4>ID: ${product.id}</h4>
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p class="product-price">
        Precio: $${product.price.toFixed(2)}
      </p>
      <p>Rating: ${product.rating}</p>
    `;

    productsContainer.appendChild(card);
  });
}

// Aplicar filtro por nombre
function applyFilters() {
  const inputValue = nameFilter.value.toLowerCase().trim();

  // OPCIÓN 1: FOREACH

  const newProductsList = [];

  _products.forEach((product) => {
    const productName = product.title.toLowerCase();

    if (productName.includes(inputValue)) {
      newProductsList.push(product);
    }
  });

  console.log("Resultado usando foreach:", newProductsList);

  displayProducts(newProductsList);

  // OPCIÓN 2: FILTER + INCLUDES
  /*
  const newProductsList = _products.filter((product) =>
    product.title.toLowerCase().includes(inputValue)
  );

  console.log("Resultado usando filter e includes:", newProductsList);

  displayProducts(newProductsList);
  */
}
