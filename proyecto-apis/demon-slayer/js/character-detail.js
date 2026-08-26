const API_URL = "https://www.demonslayer-api.com/api/v1/characters";
const charactersDetailContainer = document.getElementById("character-detail");
const params = new URLSearchParams(window.location.search);
const characterId = params.get("id");

function createCharacterCard(character) {
    const card = document.createElement("article");
    card.classList.add("character-detail-card");

    card.innerHTML = `
        <img src="${character.img}" alt="${character.name}">
        <div class="character-detail-info">
            <h2>${character.name}</h2>
            <p>Edad: ${character.age}</p>
            <p>Género: ${character.gender}</p>
            <p>Raza: ${character.race}</p>
        </div>
    `;

    return card;
}

async function getCharacterDetail() {
    // El endpoint por id regresa UN SOLO personaje, no una lista
    const response = await fetch(API_URL + "?id=" + characterId);
    const character = await response.json();
    console.log("Respuesta de la API:", character);

    charactersDetailContainer.innerHTML = "";

    const card = createCharacterCard(character);
    charactersDetailContainer.appendChild(card);
}

getCharacterDetail();
