$(function () {
    $(".section-info").hide(); // bij openen pagina wordt de section info verborgen
    $(".circle-min").hide(); // circle min wordt verborgen (moet later pas zichtbaar zijn)

    $(".vraag").click(function (event) { // Als je op de vraag klikt klapt section info uit. Circle plus verandert in circle min
        $(this)
            .children(".circle")
            .toggle();
        $(this)
            .children(".circle-min")
            .toggle();
        $(this)
            .children(".section-info")
            .toggle(); // toggle zorgt ervoor dat je kan in- en uitklappen
    });
});
