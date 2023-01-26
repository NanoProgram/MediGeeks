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


#  ruta de registro
"""@app.route('/signup', methods =['POST'])
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
        return make_response('El usuario ya existe. Inicie sesión', 202)"""

"""@api.route('/mediGeeks/users', methods=['POST'])
def create_user():
    request_body = request.get_json()
    name = request_body.get("name")
    email = request_body.get("email")
    rut = request_body.get("rut")
    password = request_body.get("password")
    errors = {}
    if not name or not re.match(r"^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+(?: [a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+)*$", name):
        errors["name"] = "Name should only contain letters, spaces and some accented characters"
    if not rut or not re.match(r"\b[0-9|.]{1,10}\-[K|k|0-9]", rut):
        errors["rut"] = "Rut no es valido"
    if not email or not re.match(r"^(([^<>()[\],;:\s@']+(\.[^<>()[\],;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$", email):
        errors["email"] = "Invalid email address"
    if not password or not re.match(r"^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$", password):
        errors["password"] = "Contraseña debe contener al menos 6 caracteres, Una mayuscula, Una Minuscula, Un Numero y Un Caracter Especial"
    if errors:
        return jsonify(errors), 400
    else:
        # Check if user already exists
        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            return make_response('El usuario ya existe. Inicie sesión', 202)
        else:
            # Create new user and add to database
            new_user = User(**request_body)
            new_user.password = generate_password_hash(password)
            db.session.add(new_user)
            db.session.commit()
            return jsonify(new_user.serialize()), 201"""



# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
