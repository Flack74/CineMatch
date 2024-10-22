import os
from flask import Flask
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

mongo_uri = os.getenv('MONGO_URI')

client = MongoClient(mongo_uri)

db = client.flask_db
todos = db.todos

@app.route('/')
def index():

    all_todos = list(todos.find())
    return str(all_todos)

if __name__ == '__main__':
    app.run(debug=True)
