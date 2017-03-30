/**
 * Created by bezi on 2017.03.13..
 */


function clearTextfield() {
    document.getElementById('textform').value = "";
}

function clearLocalStorage() {
    localStorage.clear();
}


function createBoardObject(title) {
    var board_object = {};
    var target = $("#board-area");
    var board_id = target.children().length;
    // localstorage leguccsó elemének[localStorage.length-1] a key-e +1

    board_object.title = title;

    var board_name = "board" + board_id;
    var board_content = JSON.stringify(board_object);
    Data_manager.set_data(board_name, board_content);
    showBoard(title, board_name);
}

function showBoard(title, button_data) {
    var button = button_data;
    var target = $("#board-area");

    var $card = $('<div/>', {'id': 'post-its'}).append($('<div/>', {'id': 'post-it-container'}).append($('<div/>', {'id': 'post-it-card'}, {'class': 'shadow'}).append($('<div/>', {'class': 'front face'}).append($('<div/>', {'class': 'strategy'}).text(title)
        )).append($('<div/>', {'class': 'back face center'}).append($('<div/>', {
            'text': 'Enter card',
            'class': 'board-body',
            'data-toggle': 'modal',
            'data-target': '#board-modal',
            'title': title,
            'data-id': button
        })).append($('<span/>', {'class': 'glyphicon glyphicon-trash btn', 'id': 'delete-board', 'data-button':title})))
        )
        );
    target.append($card);

}

function createCard() {
    var card = "<div class='card'><textarea contenteditable='true'></textarea></div>";
    $("#status-new").append(card);
}

function save_board() {
    var title = $('#textform').val();
    if (title.length > 0) {
        createBoardObject(title);
        clearTextfield();
    }
    else {
        alert("Please add a name to your card!");
    }
}


$(document).ready(function () {

    for (var key in localStorage) {
        // keys store the title names
        var local_key = JSON.parse(Data_manager.get_data(key));
        var title = local_key.title;
        // gives the key (board number) as button-data
        showBoard(title, key);
    }

    $("#save-button").click(function () {
        save_board();
    });


    document.querySelector('.row').addEventListener('click', function (event) {
        if (event.target.className === 'board-body') {
            // gives the key of the board element
            var board_key = event.target.getAttribute('data-id');
            var board_title = JSON.parse(Data_manager.get_data(board_key)).title;
            $('#titleName').text(board_title);
        }
    });

    document.querySelector('.row').addEventListener('click', function (event) {
        // console.log(event.target.id);
        if (event.target.id === ('delete-board')) {
            // gives the key of the board element
            console.log($(event.target).attr('data-button'));
            // $('#titleName').text(board_title);
        }
    });


    $(document).on("click", "#new-card", function () {
        createCard();
    });

    $("#status-new, #status-in-progress, #status-review, #status-done").sortable({
        connectWith: ".status-class"
    }).disableSelection();


    $('#textform').keydown(function (event) {
        var keypressed = event.keyCode || event.which;
        if (keypressed == 13) {
            save_board();
        }
    });
});