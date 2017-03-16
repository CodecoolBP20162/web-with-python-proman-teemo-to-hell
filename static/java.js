/**
 * Created by bezi on 2017.03.13..
 */
function clearTextfield(){
     document.getElementById('textform').value = "";
    }

    function createObjectforCard(title, description=false) {
        var card_object = {};
        var target = $("#grid-wrapper");
        var card_id = target.children().length;

        card_object.title = title;
        card_object.id = card_id;
        card_object.description = description;

        var card_name = "card"+card_id;
        localStorage.setItem(card_name, JSON.stringify(card_object));
        createCard(title);

    }

    function createCard(title,description='') {

        var target = $("#grid-wrapper");
        var newcard = "<li class='card'>" +
        "<div class='container-card'>"
        + description +
        "</div><a href='/b' id='0'>" +
        "<div class='title-bar'>" +
        "<div class='card-title'>" + title + "</div>" +
        "</div>" +
        "</a>" +
        "</li>";

        target.append(newcard);}



        // console.log(JSON.parse(localStorage.getItem(card_name)).title);
        // ezzel lehet megkapni egy kártya objektumot (még nemtom hova fog kerülni)


$(document).ready(function () {

    // localStorage.boardStorage = {};
    // function Board(name) {
    //     this.name = name;
    // }

    //this function clears the textfield (after pressing the button)



    for (var key in localStorage) {
        // keys store the title names
        var local_key = JSON.parse(localStorage.getItem(key));
        var title = local_key.title;
        // var description = local_key.description;
        // if (description === "false") {
        createCard(title);
        // }
        // else {
        // createCard(title, description);
        // }

    }

    $("#save-button").click(function () {
        // test phase
        var title = $('#textform').val();
        createObjectforCard(title);
        clearTextfield();

        //closes the window
        setTimeout(function () {
            $('.panel').slideToggle(600);
        }, 800);
    });

    //toggles the form window
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


    });



