const API_URL = "https://dragonball-api.com/api/characters";
const charactersDetailContainer = document.getElementById("character-detail");
const params = new URLSearchParams(window.location.search);
const characterId = params.get("id");

function createCharacterCard(character) {
    const card = document.createElement("article");
    card.classList.add("character-detail-card");

    card.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <div class="character-detail-info">
            <h2>${character.name}</h2>
            <p>Raza: ${character.race}</p>
            <p>Género: ${character.gender}</p>
            <p>${character.description}</p>
        </div>
    `;

    return card;
}

async function getCharacterDetail() {
    // Aqui el id va dentro de la URL (path), no como "?id="
    const response = await fetch(API_URL + "/" + characterId);
    const character = await response.json();
    console.log("Respuesta de la API:", character);

    charactersDetailContainer.innerHTML = "";

    const card = createCharacterCard(character);
    charactersDetailContainer.appendChild(card);
}

getCharacterDetail();
