$(document).ready(function() {
    localStorage.boardStorage = {};
    function Board(name) {
        this.name = name;
    }
    var newcard = "<li class='card'>" +
        "<div class='title-bar'>" +
        "<div class='card-title'></div>" +
        "</div>" +
        "</li>";
    for (var key in localStorage) {
        var card = "<li class='card'>" +
        "<div class='title-bar'>" +
        "<div class='card-title'>" + localStorage.getItem("name1") + "</div>" +
        "</div>" +
        "</li>";
        document.getElementById("grid-wrapper").innerHTML = card;
    }

    $(".card").click(function(){
        $("#grid-wrapper").append(newcard);
        localStorage.setItem("name1", "webstore1");
    })

})