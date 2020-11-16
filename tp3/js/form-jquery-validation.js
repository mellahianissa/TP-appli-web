
  
  
  
        $( document ).ready(function() {
            $("#valider").on("click",function(event){
                var v_nom = $("#nom").val();
                var v_prenom = $("#prenom").val();
                var v_date =  $("#date").val();
                var v_adresse = $("#adresse").val();
                var v_mail = $("#mail").val();
              
          

            
            
                if(v_nom !== "" && v_prenom !== "" && v_date !== "" && v_adresse !=="" && v_mail !== "") {

                   
                    
                    $(".modal-title").html('Bienvenue ' + $("#nom").val() +' '+''+$("#prénom").val()+''+'Vous êtes née le ' + ''+''+ $("#date").val());
                   
                    $(".modal-body").html(`Vous habitez :
                    <a class="link"  href="http://maps.google.com/maps?" ><img src="https://maps.googleapis.com/maps/api/staticmap?markers=${v_adresse}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/> Lien Google Maps </a>`);
                    $("#myModal").modal("show");
                   
   
                   
                }
                else  if(v_nom == "" || v_prenom == "" || v_date == "" ||v_adresse =="" || v_mail == ""){
                    $(".modal-title").html('Tout les champs sont obligatoire' );
                    $("#myModal").modal("show");
                }
               });
              
            
               

              
         });
        


 
