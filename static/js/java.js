/**
 * Created by bezi on 2017.03.13..
 */
$.getScript("static/js/data_manager.js", function(){
});


function clearTextfield() {
    document.getElementById('textform').value = "";
}

function createBoardObject(title, description=false) {
    var board_object = {};
    var target = $("#grid-wrapper");
    var board_id = target.children().length;

    board_object.title = title;
    board_object.id = board_id;
    board_object.description = description;

    var board_name = "board" + board_id;
    var board_content = JSON.stringify(board_object);
    Data_manager.set_data(board_name, board_content);
    showBoard(title);
}

function showBoard(title, description='') {

    var target = $("#grid-wrapper");
    var newboard = "<li class='board'>" +
        "<div class='container-board'>"
        + description +
        "</div><a href='/b' id='0'>" +
        "<div class='title-bar'>" +
        "<div class='board-title'>" + title + "</div>" +
        "</div>" +
        "</a>" +
        "</li>";

    target.append(newboard);
}


// console.log(JSON.parse(localStorage.getItem(board_name)).title);
// ezzel lehet megkapni egy kártya objektumot (még nemtom hova fog kerülni)


$(document).ready(function () {

    // localStorage.boardStorage = {};
    // function Board(name) {
    //     this.name = name;
    // }

    //this function clears the textfield (after pressing the button)


    for (var key in localStorage) {
        // keys store the title names
        var local_key = JSON.parse(Data_manager.get_data(key));
        console.log(key);
        var title = local_key.title;
        showBoard(title);
    }

    $("#save-button").click(function () {
        var title = $('#textform').val();
        if ($('#textform').val().length > 0){
            createBoardObject(title);
            clearTextfield();

            //closes the window
            setTimeout(function () {
                $('.panel').slideToggle(600);
            }, 800);
        }
        else {
            alert("Please give a title name!");
        }

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


// title nélkül ne generáljon
// data manager befejezése
