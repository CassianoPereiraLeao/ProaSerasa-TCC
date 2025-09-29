document.addEventListener("DOMContentLoaded", async () => {
    let response = await fetch(`https://api.webmercadoria.com.br/api/pet/${id}`);
    let pet = response.pet[0];

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

    let petAbout = document.createElement("a");
    petAbout.href = `../perfil-cachorro/?id=${pet.id}`;

    card.appendChild(img);
    card.appendChild(petName);
    card.appendChild(petType);
    card.appendChild(petVaccines);
    card.appendChild(petAge);
    card.appendChild(petSize);
    card.appendChild(petLocale);
    caixaCards.appendChild(card);
});