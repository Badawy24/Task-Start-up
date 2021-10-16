$(document).ready(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 150) {
            $(".navbar").css("background-color", "rgba(0,0,0,0.9");
        } else {
            $(".navbar").css("background-color", "rgba(255,255,255,0)");
        }
    });
    $(".navbar-toggle").click(function() {
        $("header .overlay .container").slideToggle(200);
    });

});