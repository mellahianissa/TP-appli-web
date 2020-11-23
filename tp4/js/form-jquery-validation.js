$(document).ready(function () {

    var test = 0;

    $("#date").flatpickr({
        dateFormat: "d-m-Y",
        maxDate: "today"
    });

    $("#lastname").keyup(function () {
        var len = $(this).val().length;
        var count = len + " Car."
        $("#lastnm_counter").text(count);

    });

    $("#firstname").keyup(function () {
        var len = $(this).val().length;
        var count = len + " Car."
        $("#firstnm_counter").text(count);

    });

    $("#subbutton").click(function (event) {

        event.preventDefault();



        // for(var index in contactList){
        //     console.log(contactList[index].name);
        //   }
        for (let item of $(".person")) {
            if (item.value.length < 5) {

                $('#myModal').modal("show");
                $(".modal-title").text("Attention ! ");
                $(".modal-body").html('Veuillez renseigner tous les champs s\'il vous plait');
                test += 1;


            } else {
                test = 0;
                $('#myModal').modal("show");
                $(".modal-title").text("Bravo!  ");
                $(".modal-body").html("Le formulaire est sauvegardé.");
            }
        }

        if (test == 0) {
            contactStore.add($("#lastname").val(), $("#firstname").val(), $("#date").val(), $("#address").val(), $("#mail").val());
        }

        $("#tableContacts").html("");
        $("#tableContacts").append(
            "<thead>" +
            "<tr>" +
            "<th>Nom</th>" +
            "<th>Prénom</th>" +
            "<th>Date de naissance</th>" +
            "<th>Adresse</th>" +
            "<th>Mail</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            " </tbody>"

        );
        for (var i in contactStore.getList()) {
            $("#tableContacts tbody").append(
                "<tr>" +
                "<td>" + contactStore.getList()[i].lastname + "</td>" +
                "<td>" + contactStore.getList()[i].firstname + "</td>" +
                "<td>" + contactStore.getList()[i].date + "</td>" +
                "<td> <a href=\"https://maps.google.com/?q=" + contactStore.getList()[i].address + "\">" + contactStore.getList()[i].address + "</a> </td>" +
                "<td> <a href=\"mailto:" + contactStore.getList()[i].mail + "\">" + contactStore.getList()[i].mail + "</a> </td>" +
                "</tr>"

            );
        }



    });
});

