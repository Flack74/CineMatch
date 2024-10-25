import os
from flask import Flask, request, jsonify, redirect, url_for
from pymongo import MongoClient
from dotenv import load_dotenv
from flask_bcrypt import Bcrypt
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user

load_dotenv()

app = Flask(__name__)

# MongoDB setup
mongo_uri = os.getenv('MONGO_URI')
client = MongoClient(mongo_uri)
db = client.flask_db
todos = db.todos
users = db.users  # Create a new collection for users

# Flask-Login setup
app.config['SECRET_KEY'] = 'your_secret_key'
login_manager = LoginManager(app)
login_manager.login_view = 'login'  # Redirect here for unauthorized users
bcrypt = Bcrypt(app)


# User class
class User(UserMixin):
    def __init__(self, username, password, role='user'):
        self.username = username
        self.password = password
        self.role = role

    @staticmethod
    def get(username):
        user_data = users.find_one({"username": username})
        if user_data:
            return User(user_data['username'], user_data['password'], user_data.get('role', 'user'))
        return None


@login_manager.user_loader
def load_user(username):
    return User.get(username)


@app.route('/')
@login_required
def index():
    all_todos = list(todos.find())
    return str(all_todos)


@app.route('/register', methods=['POST'])
def register():
    username = request.json.get('username')
    password = request.json.get('password')

    # Check if the user already exists
    if users.find_one({"username": username}):
        return jsonify({'message': 'User already exists!'}), 409

    # Hash the password
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    # Store user in MongoDB
    users.insert_one({
        'username': username,
        'password': hashed_password,
        'role': 'user'  # Default role
    })

    return jsonify({'message': 'User registered successfully!'}), 201


@app.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')

    user = User.get(username)
    if user and bcrypt.check_password_hash(user.password, password):
        login_user(user)
        return jsonify({'message': 'Login successful!'}), 200
    return jsonify({'message': 'Invalid username or password!'}), 401


@app.route('/logout')
@login_required
def logout():
    logout_user()
    return jsonify({'message': 'Logged out successfully!'}), 200


if __name__ == '__main__':
    app.run(debug=True)
