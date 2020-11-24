$(document).ready(function () {
    console.log("DOM ready!");
var contactStore = (function () {
    
    // variable privée
    var contactList = [];
  
    // Expose these functions via an interface while hiding
    // the implementation of the module within the function() block
  
    return {
      add: function(_nom, _, _prénom,_date, _adresse, _mail) {
        var contact = { nom: _nom,
                        prénom: _prénom,
                        date: _date,
                        adress: _adresse,
                        mail: _mail
        };
        // ajout du contact à la liste
        contactList.push(contact);
          
        return contactList;
      },
  
      getList: function() {
        return contactList;
      }
    }
  });

  $("#valider").on("click",function store(event) { 
    event.preventDefault();
    
        var inputNom= document.getElementById("nom");
        var inputPrenom= document.getElementById("prénom");
        var inputDate= document.getElementById("date");
        var inputAdresse= document.getElementById("adresse");
        var inputMail= document.getElementById("mail");
        
        if($("#nom").val() !== "" && $("#prénom").val() !== "" && $("#date").val() !== "" && $("#adresse").val() !== "" && $("#mail").val() !== "" ){
        
        localStorage.setItem("nom", inputNom.value);
        localStorage.setItem("prénom", inputPrenom.value);
        localStorage.setItem("date", inputDate.value);
        localStorage.setItem("adresse", inputAdresse.value);
        localStorage.setItem("mail", inputMail.value);

       $('#success').addClass("alert alert-success").text("félicitation! votre formulaire est sauvegardé.");

      $("#table").show();
      $("#liste_des_contacts").show()
       
       document.querySelector("table tbody").innerHTML = document.querySelector("table tbody")
       .innerHTML +'<tr><td>'+localStorage.getItem("nom")+'</td><td>'+localStorage.getItem("prénom") +'</td><td>'+localStorage.getItem("date")+'</td><td><a href="https://maps.google.com/maps?q=' +localStorage.getItem("adresse")+'">'+localStorage.getItem("adresse") +'</a></td><td><a href=mailto:>'+localStorage.getItem("mail")+'</a></td>';
       }
      
       document.querySelector("table tbody").innerHTML = document.querySelector("table tbody")
       .innerHTML +'<tr><td>'+contactStore.getList.nom.val()+
       '</td><td>'+localStorage.getItem("nom") +
       '</td><td>'+localStorage.getItem("date")+'</td><td><a href="https://maps.google.com/maps?q=' +
       localStorage.getItem("adresse")+'">'+localStorage.getItem("adresse") +'</a></td><td><a href=mailto:>'+localStorage.getItem("mail")+'</a></td>';
       
     
       
      
  });
});