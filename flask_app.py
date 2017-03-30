from flask import Flask, request, session, g, redirect, url_for, abort, \
    render_template, flash, current_app, jsonify
from init_database import InitDatabase
from models import *

app = Flask(__name__)
app.config.from_object(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')


@app.route('/add_board', methods=['POST'])
def add_board():
    new_board_title = request.form['title']
    new_board = Boards.create(title=new_board_title)
    response = {"id": new_board.id, "title": new_board_title}
    return jsonify(response)

@app.route('/get_boards', methods=['GET'])
def get_boards():
    boards = Boards.select()
    for b in boards:
        print(b.title)
    board_dict = []
    for b in boards:
        board_dict.append({"title": b.title, "id": b.id})
        print(board_dict)
    return jsonify(board_dict)


@app.route('/add_card', methods=['POST'])
def add_card():
    content = request.form['content']
    status = request.form['status']
    board_id = int(request.form['board'])
    print(board_id)
    position = Cards.select().where(Cards.status == "new").count() + 1
    new_card = Cards.create(content=content, status=status, board=board_id, position=position)
    response = {"id": new_card.id}
    return jsonify(response)

if __name__ == '__main__':
    InitDatabase.init()
    app.run(debug=True)
