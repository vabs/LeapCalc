from flask import Flask, render_template
from flask.json import jsonify
import wolframalpha
from Wolfram import wolfram

app = Flask(__name__)
app_id = 'Q4JVAH-996QL3V9A8'


@app.route('/')
def hello_world():
    return render_template('Home.html')


@app.route('/how-to')
def train():
    numbers = range(1, 11)
    return render_template('how-to.html', numbers=numbers)


@app.route('/getwolframalpha/<query>')
def get_wolfram_alpha_result(query):
    print query
    w = wolfram('Q4JVAH-996QL3V9A8')
    res = w.search(query)
    print res
    return jsonify(res)


@app.route('/about')
def get_about():
    return render_template('doge.html')


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=80)
