from models import db
from flask_migrate import Migrate
from flask import Flask, request, url_for, redirect, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, logout_user, current_user


app = Flask(__name__)

# make the connection to the DB through SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///beauty.db'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Enter a secret key
app.config["SECRET_KEY"] = "Azula"

# create our migration using our db
migrate = Migrate(app, db)

# initialize the flask app
db.init_app(app)

login_manager = LoginManager(app)
login_manager.login_view = 'login' 


