from flask import Flask, request
from gpt import generate_search_query

app = Flask(__name__)

@app.route('/generate', methods=['POST'])
def generate():
    prompt = request.form['prompt']
    query = generate_search_query(prompt)
    return query

if __name__ == '__main__':
    app.run()