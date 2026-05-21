document.getElementById("contact-form").addEventListener("submit", function(e) {

  let nom = document.getElementById("nom").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (nom === "" || email === "" || message === "") {
    e.preventDefault();
    alert("Veuillez remplir tous les champs !");
  }

});
