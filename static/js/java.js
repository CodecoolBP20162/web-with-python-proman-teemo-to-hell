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
    $.ajax({
        url: "/add_board",
        data: {title: title},
        type: "POST",
        success: function (response) {
            console.log("success: " + response.id)
            var board_id = response.id;
            showBoard(title, board_id)
        },
        error: function () {
            alert("Sorry, at the moment we can't create your card :(")
        }
    });
}

function showBoard(title, board_id) {
    var target = $("#board-area");
    var $card = $('<div/>', {'id': 'post-its'})
        .append($('<div/>', {'id': 'post-it-container'})
            .append($('<div/>', {'id': 'post-it-card'}, {'class': 'shadow'})
                .append($('<div/>', {'class': 'front face'})
                    .append($('<div/>', {'class': 'strategy'}).text(title)))
                .append($('<span/>', {
                        'class': 'back face center',
                        'data-toggle': 'modal',
                        'data-target': '#board-modal',
                        'title': title,
                        'data-board': board_id,
                        'data-board-xy': board_id
                    })
                        .append($('<p/>', {'text': 'Enter card'}))
                ))
        );
    target.append($card);
}

function createCard(card_id) {
    var $card = $('<div/>', {
        'class': 'card',
        'data-id': 'card_id'
    }).append($('<textarea/>', {'contenteditable': 'true'}));
    // var $text = $('<textarea/>',{'contenteditable':'true'});
    $("#status-new").append($card);
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
    $.ajax({
        url: "/get_boards",
        type: "GET",
        success: function (response) {
            for (var idx in response) {
                var board = response[idx];
                showBoard(board.title, board.id);
            }
        },
        error: function () {
            alert("Sorry, can not generate your cards :(")
        }

    });

    $("#save-button").click(function () {

        save_board();
    });


    document.querySelector('body').addEventListener('click', function (event) {
        if (event.target.className === 'back face center') {
            // gives the key of the board element
            var board_key = event.target.getAttribute('data-board');
            var title = event.target.getAttribute('title');
            $('#titleName').text(title);
            $('#modal-container').data("data-board", board_key);
        }
    });

    $(document).on("click", "#new-card", function () {
        console.log("csekk: " + $("#modal-container").data("data-board"));
        $.ajax({
            url: "/add_card",
            data: {
                content: null,
                status: "new",
                board: $("#modal-container").data("data-board")
            },
            type: "POST",
            success: function (response) {
                createCard(response.id)
            },
            error: function () {
                alert("Sorry, at the moment we can't create your card :(")
            }

        });
    });

    $("#status-new, #status-in-progress, #status-review, #status-done").sortable({
        connectWith: ".status-class"

        /*stop: function(event, ui) {
         ui.item.index();
         }*/
    }).disableSelection();


    $('#textform').keydown(function (event) {
        var keypressed = event.keyCode || event.which;
        if (keypressed == 13) {
            save_board();
        }
    });
});