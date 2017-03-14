$(document).ready(function () {
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

    $("#save-button").click(function () {
        $("#grid-wrapper").append(newcard);
        localStorage.setItem("name1", "webstore1");
    })

    $('.pull-me').click(function () {
        $('.panel').slideToggle(200);
    });


    var loading = function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.target.classList.add('loading');
        e.target.setAttribute('disabled', 'disabled');
        setTimeout(function () {
            e.target.classList.remove('loading');
            e.target.removeAttribute('disabled');
        }, 500);
    };

    var btns = document.querySelectorAll('button');
    for (var i = btns.length - 1; i >= 0; i--) {
        btns[i].addEventListener('click', loading);
    }
    ;

})