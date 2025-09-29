let form = document.getElementById("forms-cadastro");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    let name = document.getElementById("nome-cadastro").value;
    let email = document.getElementById("email-cadastro").value;
    let password = document.getElementById("senha-cadastro").value;

    let response = await fetch("https://api.webmercadoria.com.br/api/user/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    });

    if(response.ok)
        window.location.href = "../login/";
});
