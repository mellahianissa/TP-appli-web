$(document).ready(function () {

    $("#date").flatpickr({
        dateFormat: "d-m-Y",
        maxDate: "today"
    });

    $("#subbutton").click(function (event) {

        event.preventDefault();


        for (let item of $(".person")) {
            if (item.value.length < 5) {
                
                $('#myModal').modal("show");
                $(".modal-title").text("Attention ! ");
                $(".modal-body").html('Veuillez renseigner tous les champs s\'il vous plait');

            } else {

                $('#myModal').modal("show");
                $(".modal-title").text("Bienvenue " + $("#firstname").val() + " 👋");

                var city = $("#address").val();
                var date = $("#date").val();

                $(".modal-body").html(`Vous êtes nés le ${date} et vous habitez :
                <br>
                <br>
                <a class="link text-right"  href="http://maps.google.com/maps?" >
                <img src="https://maps.googleapis.com/maps/api/staticmap?markers=${city}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/> Google Map </a>`
                );

            }
        }
    });
});

