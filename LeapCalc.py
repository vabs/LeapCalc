from flask import Flask, render_template
from flask.json import jsonify
import wolframalpha
from Wolfram import wolfram

app = Flask(__name__)
app_id='Q4JVAH-996QL3V9A8'

@app.route('/')
def hello_world():
    return render_template('Home.html')


@app.route('/train')
def train():
    return render_template('Trainer.html')

@app.route('/getwolframalpha/<query>')
def get_wolfram_alpha_result(query):
    w = wolfram('Q4JVAH-996QL3V9A8')
    res=w.search(query)
    print res
    return jsonify(res)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=80)
