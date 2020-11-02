 
 
 function validation(){
  
        document.getElementById("resultat").classList.remove("visible");
        document.getElementById("error").classList.remove("visible");
        
       //Déclaration de variable :
        var length_nom = document.getElementById("Nom").value.length;
        var length_prenom = document.getElementById("Prénom").value.length;
        var length_date = document.getElementById("Date").value.length;
        var length_adresse = document.getElementById("Adresse").value.length;
        var length_mail = document.getElementById("Mail").value.length;


        // les variabes qui nous permets de récuperer la longeur de valeur dans le champs de saisi 
        
        
        //Test sur le nom-prénom-date-adresse-mail:
        if(length_nom==0 && length_prenom==0 && length_date== 0 && length_adresse==0 && length_mail==0 ){
        document.getElementById("error").classList.add("visible");//renvoie le message erreur le formulaire ne complet 
        }
              else if(length_nom < 5 ){
              document.getElementById("error").classList.add("visible");
              document.getElementById("error").innerHTML = "Le nom doit contenir au moins 5 carractère";
        // en remplace le message erreur par un nouveu mesg qui est 
         //La saisie du nom est obligatoire
         //Test sur la longeur de la valeur de prénom saisi dans le champ prénom
                                     }
        
         
             else if(length_prenom < 5 ){
             document.getElementById("error").classList.add("visible");
             document.getElementById("error").innerHTML = "erreur:Le prénom doit contenir au moins 5 carractère";
             } // //Test sur la longeur de la valeur de prénom saisi dans le champ date


             else if (length_date ==0 ) {
             document.getElementById("error").classList.add("visible");
             document.getElementById("error").innerHTML = "erreur:La date doit contenir au moins 5 carractère";
              }// //Test sur la longeur de la valeur de prénom saisi dans le champ adresse


              else if (length_adresse < 5 ){
              document.getElementById("error").classList.add("visible");
              document.getElementById("error").innerHTML = "erreur:L'adresse doit contenir au moins 5 carractère";
               } //Test sur la longeur de la valeur de prénom saisi dans le champ mail


              else if (length_mail < 5 ){
              document.getElementById("error").classList.add("visible");
              document.getElementById("error").innerHTML = "erreur:Le mail doit contenir au moins 5 carractère";
                  } 
// si tt les champs de formulaire sont bien remplie en remplace la valeur de champs resultat par un nouveau msg Bienvenue nom et prenom 
              else {
              document.getElementById("resultat").classList.add("visible");
              document.getElementById("resultat").innerHTML = "Bienvenue"
               +" " + document.querySelector("#Nom").value + " " + document.querySelector("#Prénom").value;
               }
        }
        
       
        