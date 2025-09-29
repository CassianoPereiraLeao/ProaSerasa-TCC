document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);

    const id = params.get("id");

    let response = await fetch(`https://api.webmercadoria.com.br/api/pet/?id=${id}`);
    let data = await response.json();
    let pet = data.pet[0];

    let caixaCards = document.getElementById("caixa-card-perfil-dog");

    let card = document.createElement("div");

    let img = document.createElement("img");
    img.src = "../../cachorro-em-estudio.jpg";
    img.alt = `Foto do ${pet.name}`;
    card.className = "card";

    let petName = document.createElement("h3");
    petName.textContent = pet.name;

    let petType = document.createElement("span");
    petType.textContent = pet.type;

    let petVaccines = document.createElement("p");
    petVaccines.textContent = `Vacinas: ${pet.vaccines}`;

    let petAge = document.createElement("p");
    petAge.textContent = `Idade: ${pet.age}`;

    let petSize = document.createElement("p");
    petSize.textContent = pet.animalSize;

    let petLocale = document.createElement("p");
    petLocale.textContent = pet.locale;

    let petMessage = document.createElement("span");
    petMessage.textContent = "Cachorro dócil e brincalhão, com um pouco de atenção ele se apega a você";

    card.appendChild(img);
    card.appendChild(petName);
    card.appendChild(petType);
    card.appendChild(petVaccines);
    card.appendChild(petAge);
    card.appendChild(petSize);
    card.appendChild(petLocale);
    caixaCards.appendChild(card);
});