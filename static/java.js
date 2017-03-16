/**
 * Created by bezi on 2017.03.13..
 */

$(document).ready(function () {

    localStorage.boardStorage = {};
    function Board(name) {
        this.name = name;
    }

    //this function clears the textfield (after pressing the button)
    function clearTextfield(){
     document.getElementById('textform').value = "";
    }



    // for (var key in localStorage) {
    //     var card = "<li class='card'>" +
    //         "<div class='title-bar'>" +
    //         "<div class='card-title'>" + localStorage.getItem("name1") + "</div>" +
    //         "</div>" +
    //         "</li>";
    //     document.getElementById("grid-wrapper").innerHTML = card;
    // }

    $("#save-button").click(function () {
        // test phase
        var target = $("#grid-wrapper");
        var card_id = target.children().length;
        var title = $('#textform').val();

        var card_object = {};
        card_object.title = title;
        card_object.id = card_id;
        card_object.description = "";


        var newcard = "<li class='card'>" +
        "<a href='/b' id='0'>" +
        "<div class='title-bar'>" +
        "<div class='card-title'>" + card_object.title + "</div>" +
        "</div>" +
        "</a>" +
        "</li>";


        // end of test phase

        target.append(newcard);
        var card_name = "card"+card_id;
        localStorage.setItem(card_name, JSON.stringify(card_object));

        // console.log(JSON.parse(localStorage.getItem(card_name)));
        // ezzel lehet megkapni egy kártya objektumot (még nemtom hova fog kerülni)


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



