from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('Home.html')


@app.route('/train')
def train():
    return render_template('Trainer.html')

if __name__ == '__main__':
    app.run()
