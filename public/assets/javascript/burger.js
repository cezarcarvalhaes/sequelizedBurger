$(document).ready(function () {

    //Add a new burger function
    $("#add-burger").on("click", function (event) {
        event.preventDefault();
        var newBurger = $("#new-burger").val().trim();
        $("#add-burger").val("");

        $.post("/api/burgers", { burger_name: newBurger }).then(
            function () {
                location.reload();
            }
        )
    });

    //Devour a burger!
    $(".devour-btn").on("click", function () {
        var id = $(this).data("id");
        var customerName = $(".cust-input"+id).val().trim();
        var customerData = {name: customerName, BurgerId: id}
        var burgerData = {
            devoured: 1,
        }

        //First create a customer
        $.post("/api/customers", customerData).then(
            function () {
                //Then update the burger
                $.ajax("api/burgers/" + id, {
                    type: "PUT",
                    data: burgerData
                }).then(
                    function () {
                        location.reload();
                    }
                )
            }
        )
    })


})