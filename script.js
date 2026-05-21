function envoyerMessage() {
    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(nom === "" || email === "" || message === "") {
        alert("Veuillez remplir tout les champs !");
    }   else {
        alert("Message envoyé avec succés ! Je vous répondrai bientôt.");
        document.getElementById("contact-form").reset();
    }
}