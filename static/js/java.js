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
    var target = $(".row");
    var board_id = target.children().length;
    // localstorage leguccsó elemének[localStorage.length-1] a key-e +1

    board_object.title = title;

    var board_name = "board" + board_id;
    var board_content = JSON.stringify(board_object);
    Data_manager.set_data(board_name, board_content);
    showBoard(title, board_name);
}

function showBoard(title,button_data) {
    var button = button_data;
    var target = $(".row");

    var $card = $('<div/>', {'id': 'post-its'}).append($('<div/>', {'id': 'post-it-container'}).append($('<div/>', {'id': 'post-it-card'}, {'class': 'shadow'}).append($('<div/>', {'class': 'front face'}).append($('<div/>', {'class': 'strategy'}).text(title)
        )).append($('<div/>', {'class': 'back face center','data-toggle':'modal','data-target':'#myModal','data-button':button}).append($('<p/>',{'text':'Enter card'}))
        ))
    );
    target.append($card);
}



$(document).ready(function () {


    for (var key in localStorage) {
        // keys store the title names
        var local_key = JSON.parse(Data_manager.get_data(key));
        // console.log(key);
        var title = local_key.title;
        // gives the key (board number) as button-data
        showBoard(title, key);
    }


    $("#save-button").click(function () {
        var title = $('#textform').val();
        if ($('#textform').val().length > 0){
            createBoardObject(title);
            clearTextfield();


        }
        else {
            alert("Please give a title name!");
        }

    });

    $('.board-content.btn').click(function(){
      var data = $(this).attr('data-button');
      console.log(data);
    });



});


// title nélkül ne generáljon
// data manager befejezése
