const API_URL = "https://dragonball-api.com/api/characters";
const characterDetailContainer = document.getElementById("character-detail");
const params = new URLSearchParams(window.location.search);
const characterId = params.get("id");

async function getCharacterDetail() {
    const response = await fetch(API_URL + "/" + characterId);
    const character = await response.json();

    console.log("Respuesta de la API:", character);

    characterDetailContainer.innerHTML = "";

    const card = createCharacterCard(character);
    characterDetailContainer.appendChild(card);
}

function createCharacterCard(character) {
    const card = document.createElement("article");
    card.classList.add("character-detail-card");

    card.innerHTML = `
        <img
            src="${character.image}"
            alt="${character.name}"
        >
        <div class="character-detail-info">
            <h2>${character.name}</h2>
            <p>Raza: ${character.race}</p>
            <p>Género: ${character.gender}</p>
            <p>Ki: ${character.ki}</p>
            <p>Ki máximo: ${character.maxKi}</p>
            <p>Afiliación: ${character.affiliation}</p>
            <p>${character.description}</p>
        </div>
    `;

    return card;
}

getCharacterDetail();
