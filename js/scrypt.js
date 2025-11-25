$(document).ready(function() {
    $(".button a").on("click", function(e) {
        e.preventDefault();

        let link = $(this).attr("href");
        $("#confirmBtn").attr("href", link);

        $("#confirmModal").fadeIn(200);
    });
    $("#cancelBtn").on("click", function() {
        $("#confirmModal").fadeOut(200);
    });

    $("#confirmModal").on("click", function(e) {
        if (e.target === this) {
            $("#confirmModal").fadeOut(200);
        }
    });

});