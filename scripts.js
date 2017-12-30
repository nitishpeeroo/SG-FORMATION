
$(document).ready(function () {
    /**
     *  Affichage de la popup
     */
    $("#search_mod-menu").click(function () {
        $("#search_mod").addClass("opened");
    });
    $(".search_mod-close").click(function () {
        $("#search_mod").removeClass("opened");
    });


    /**
     * clic bouton video
     */
    $("#toVideo").click(function() {
        console.log("test");
        $('html, body').animate({
            scrollTop: $("#video").offset().top - 50
        }, 700);
    });
});
