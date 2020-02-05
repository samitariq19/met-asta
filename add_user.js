$(document).ready(function() {
    $("#add_user").on('click', function() {
        // console.log("This works");
        $("#invite-form").toggleClass("d-none");
        $(this).hide();
    });
});