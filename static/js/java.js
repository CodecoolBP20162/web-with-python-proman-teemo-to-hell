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

    board_object.title = title;

    var board_name = "board" + board_id;
    var board_content = JSON.stringify(board_object);
    Data_manager.set_data(board_name, board_content);
    showBoard(title);
}

function showBoard(title) {

    var target = $(".row");
    var newboard =  '<div class="post-its"'+'<div id="post-it-container">'+'<div id="post-it-card" class="shadow">'+'<div class="front face">'+'<div class="strategy">'+'<p style="margin-top:50px;font-size:25px;">'+ title + '</p>' +'</div>'+'</div>'+'<div class="back face center">' +'<div class="delete-modal">x</div>'+'<div style="margin-top:50px;font-size:23px;" class="board-content btn" data-toggle="modal" data-target="#myModal">Enter card</div>'+'</div>'+'</div>'+'</div>';
    target.append(newboard);
}



$(document).ready(function () {


    for (var key in localStorage) {
        // keys store the title names
        var local_key = JSON.parse(Data_manager.get_data(key));
        // console.log(key);
        var title = local_key.title;
        showBoard(title);
    }


    // $('.commentarea').keydown(function(event) {
    //     if (event.keyCode == 13) {
    //         this.form.submit();
    //         return false;
    //      }
    // });

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



});


// title nélkül ne generáljon
// data manager befejezése
