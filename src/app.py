"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory, make_response
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, User
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
import jwt
from datetime import datetime, timedelta
from functools import wraps
from flask_jwt_extended import JWTManager, create_access_token, jwt_required
import uuid
from  werkzeug.security import generate_password_hash, check_password_hash

#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

jwt = JWTManager(app)

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
@jwt_required()
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

# ruta para iniciar sesión de usuario
@app.route('/login', methods =['POST'])
def login():
    # creates dictionary of form data
    auth = request.form

    if not auth or not auth.get('email') or not auth.get('password'):
        # devuelve 401 si falta algún correo electrónico o contraseña
        return make_response(
            'Could not verify',
            401,
            {'WWW-Authenticate' : 'Basic realm ="¡Se requiere iniciar sesión !!"'}
            )

    user = User.query\
        .filter_by(email = auth.get('email'))\
        .first()

    if not user:
        # devuelve 401 si el usuario no existe
        return make_response(
            'Could not verify',
            401,
            {'WWW-Authenticate' : 'Basic realm ="Usuario o contraseña incorrectos !!"'}
        )

    if check_password_hash(user.password, auth.get('password')):
        # genera el token JWT
        access_token = create_access_token(identity=user.id)
        return jsonify({ "token": access_token, "user_id": user.id })
    # devuelve 403 si la contraseña es incorrecta
    return make_response(
        'Could not verify',
        403,
        {'WWW-Authenticate' : 'Basic realm ="Usuario o contraseña incorrectos !!"'}
    )

#  ruta de registro
@app.route('/signup', methods =['POST'])
def signup():
    # crea un diccionario de los datos del formulario
    data = request.form

    # obtiene nombre, correo electrónico y contraseña
    email = data.get('email')
    password = data.get('password')

    # comprobando el usuario existente
    user = User.query\
        .filter_by(email = email)\
        .first()

    if not user:
        # objeto ORM de la base de datos
        user = User(
            id = str(uuid.uuid4()),
            email = email,
            password = generate_password_hash(password),
            is_active = True
        )
        # insertar usuario
        db.session.add(user)
        db.session.commit()

        return make_response('Registrado con éxito', 201)
    else:
        # devuelve 202 si el usuario ya existe
        return make_response('El usuario ya existe. Inicie sesión', 202)



# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
