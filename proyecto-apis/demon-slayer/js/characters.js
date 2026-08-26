const API_URL = "https://www.demonslayer-api.com/api/v1/characters";

const charactersContainer = document.getElementById("characters-container");
const paginationContainer = document.getElementById("paginationId");

function createCharacterCard(character) {
    const card = document.createElement("article");
    card.classList.add("character-card");

    card.innerHTML = `
        <img src="${character.img}" alt="${character.name}">
        <h3>${character.id}</h3>
        <h2>${character.name}</h2>
        <p>Edad: ${character.age}</p>
    `;

    card.addEventListener("click", () => {
        window.location.href = `character-detail.html?id=${character.id}`;
    });

    return card;
}

async function getCharacters(pageNumber) {
    const response = await fetch(API_URL+"?page=" + pageNumber);
    //https://www.demonslayer-api.com/api/v1/characters?page=1
    const data = await response.json();

    console.log("Respuesta de la API:", data);

    charactersContainer.innerHTML = "";

    data.content.forEach(character => {
        const card = createCharacterCard(character);
        charactersContainer.appendChild(card);
    });
    createPagination(data.pagination);
}

function createPagination(paginationData){
    paginationContainer.innerHTML = ``;
    for(let i =1; i <= paginationData.totalPages; i++){
        const _paginationButton = document.createElement("button");
        _paginationButton.textContent = i;
        _paginationButton.addEventListener("click", () =>{
            getCharacters(i);
        });
        paginationContainer.appendChild(_paginationButton);
    }
}
getCharacters();
