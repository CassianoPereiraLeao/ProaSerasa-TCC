async function generateCard() {
    let caixaCards = document.getElementById("caixa-card");

    let session = JSON.parse(sessionStorage.getItem("pets"));

    let lista = [
        "../../assets/aldogao.jpg",
        "../../assets/alex.jpg",
        "../../assets/cachorro-em-estudio.jpg",
        "../../assets/cachorro-sorrindo.jpg",
        "../../assets/cao-sentado-feliz.jpg",
        "../../assets/pata.jpg",
        "../../assets/flor.jpg",
        "../../assets/foto-cao.jpg"
    ];

    let listaGato = [
        "../../assets/cat.jpg"
    ];

    if(!session) {
        await fetch("https://api.webmercadoria.com.br/api/pet")
        .then(res => res.json())
        .then(data => {
            sessionStorage.setItem("pets", JSON.stringify(data, null, 2));
            session = data;
        });
    }

    let petArray = session.pets || session;

    petArray.forEach(element => {
        let card = document.createElement("div");

        let img = document.createElement("img");
        if (element.type === "Cachorro" || element.type === "Cadela"){
            img.src = lista[Math.floor(Math.random() * lista.length)];
            img.alt = `Foto do ${element.name}`;
        } else if (element.type === "Gato" || element.type === "Gata") {
            img.src = listaGato[Math.floor(Math.random() * lista.length)];
            img.alt = `Foto do ${element.name}`;
        }

        card.className = "card";

        let petName = document.createElement("h3");
        petName.textContent = element.name;
        
        let petType = document.createElement("span");
        petType.textContent = element.type;

        let petVaccines = document.createElement("p");
        petVaccines.textContent = `Vacinas: ${element.vaccines}`;

        let petAge = document.createElement("p");
        petAge.textContent = `Idade: ${element.age} anos`;

        let petSize = document.createElement("p");
        petSize.textContent = element.animalSize;
        
        let petLocale = document.createElement("p");
        petLocale.textContent = element.locale;

        let petAbout = document.createElement("a");
        petAbout.textContent = "Saiba Mais";
        petAbout.classList.add("card-btn");
        petAbout.href = `../perfil-cachorro/?id=${element.id}`;

        card.appendChild(img);
        card.appendChild(petName);
        card.appendChild(petType);
        card.appendChild(petVaccines);
        card.appendChild(petAge);
        card.appendChild(petSize);
        card.appendChild(petLocale);
        card.appendChild(petAbout);
        caixaCards.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    await generateCard();
});