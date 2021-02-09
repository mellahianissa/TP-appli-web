 
 
 function validation() {

  //Vider le message d'erreur
  document.getElementById("error").innerHTML = ""
  document.getElementById("error").classList.remove("display");
  //Vider le message de réussite
  document.getElementById("resultat").innerHTML = ""
  document.getElementById("resultat").classList.remove("display");



  for (let item of document.querySelectorAll('.person')) {
    if (item.value.length < 5) {

      // recuperation du label
      var label = document.querySelector("label[for=" + item.id + "]").textContent;
      // ajout du message d'erreur
      document.getElementById("error").innerHTML += `Minimum 5 caractères pour : ${label} <br/>`;
      // ajout de la classe CSS "display"
      document.getElementById("error").classList.add("display");
      document.getElementById("resultat").classList.remove("display");
    }
  }

  // s'il n'y a pas d'erreur
  if (document.getElementById("error").innerHTML == "") {
    //Récupérer le prénom de la personne
    var firstname = document.getElementById("firstname").value;

    document.getElementById("resultat").innerHTML = `Bienvenue à ${firstname} 😊`;
    document.getElementById("error").classList.remove("display");
    document.getElementById("resultat").classList.add("display");
  }



}

