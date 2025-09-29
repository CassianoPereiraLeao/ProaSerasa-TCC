document.addEventListener("DOMContentLoaded", async () => {
    let session = JSON.parse(sessionStorage.getItem("session"));

    if (session){
        let name = document.getElementById("nome-perfil-h3");
        name.textContent = `Nome: ${session.name.split(" ")[0]}`;

        let email = document.getElementById("email-perfil-p");
        email.textContent = `Email: ${session.email._email}`;

        let fullName = document.getElementById("nome-completo-perfil");
        fullName.textContent = `Nome Completo: ${session.name}`;

        let emailDown = document.getElementById("email-perfil");
        emailDown.textContent = `Email: ${session.email._email}`;

        if (session.petId != "00000000-0000-0000-0000-000000000000") {
            let response = await fetch(`https://api.webmercadoria.com.br/api/pet/?id=${session.petId}`);
            let petPerfil = document.getElementById("pet-perfil");

            petPerfil.textContent = response.pets[0].name;
        }
    }
});