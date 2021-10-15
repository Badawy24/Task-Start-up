$(document).ready(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 400) {
            $(".navbar").css("background-color", "#000");
        } else {
            $(".navbar").css("background-color", "rgba(255,255,255,0)");
        }
    });

});