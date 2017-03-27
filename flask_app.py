from flask import Flask, request, session, g, redirect, url_for, abort, \
    render_template, flash, current_app

app = Flask(__name__)
app.config.from_object(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/b', methods=['GET', 'POST'])
def tables():
    return render_template('card.html')



if __name__ == '__main__':
    app.run(debug=True)