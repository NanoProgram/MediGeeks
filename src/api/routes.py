"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Prevision, Speciality, Center, Doctor
from api.utils import generate_sitemap, APIException
import re

api = Blueprint('api', __name__)


#API USER GET
@api.route('/mediGeeks/users', methods=['GET'])
def get_users_table():
    user = User.query.all()
    user = list(map(lambda p:p.serialize(),user))
    return jsonify(user), 200 

#API USER GET/ID
@api.route('/mediGeeks/users/<int:id>', methods=['GET'])
def get_users_table_id(id):
    user = User.query.filter_by(id=id).first()
    if user:
        return jsonify(user.serialize()), 200
    else:
        return "Usuario no existe", 404


#API users POST
@api.route('/mediGeeks/users', methods=['POST'])
def add_new_user():
    request_body = request.get_json()
    new_user = User(**request_body)
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.serialize()), 201

#API DOCTOR GET
@api.route('/mediGeeks/doctors', methods=['GET'])
def get_doctor_table():
    doctor = Doctor.query.all()
    doctor = list(map(lambda p:p.serialize(),doctor))
    return jsonify(doctor), 200

#API CENTRO GET
@api.route('/mediGeeks/centers', methods=['GET'])
def get_center_table():
    center = Center.query.all()
    center = list(map(lambda p:p.serialize(),center))
    return jsonify(center), 200 

#API PREVISION GET
@api.route('/mediGeeks/prevision', methods=['GET'])
def get_prevision():
    prevision = Prevision.query.all()
    prevision = list(map(lambda p:p.serialize(),prevision))
    return jsonify(prevision), 200 

#API speciality GET
@api.route('/mediGeeks/speciality', methods=['GET'])
def get_speciality():
    speciality = Speciality.query.all()
    speciality = list(map(lambda p:p.serialize(),speciality))
    return jsonify(speciality), 200 


#API USER PUT/ID
@api.route('/mediGeeks/users/<user_id>', methods=['PUT'])
def update_user_id(user_id):
    
    data = request.json 
    for user in usersTable: 
        if user["ID"] == user_id:
            user = data
            return jsonify(user), 200 

    return "Usuario no existe", 404


@api.route('/mediGeeks/doctors/<int:id>', methods=['GET'])
def get_doctor_table_id(id):
    doctor = Doctor.query.filter_by(id=id).first()
    if doctor:
        return jsonify(doctor.serialize()), 200
    else:
        return "Doctor no existe", 404

@api.route('/mediGeeks/doctors', methods=['POST'])
def add_new_doctor():
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
        new_doctor = Doctor(**request_body)
        db.session.add(new_doctor)
        db.session.commit()
        return jsonify(new_doctor.serialize()), 201

#API CENTRO GET
@api.route('/mediGeeks/centers', methods=['GET'])
def get_center_table():
    center = Center.query.all()
    center = list(map(lambda p:p.serialize(),center))
    return jsonify(center), 200 

#API PREVISION GET
@api.route('/mediGeeks/previsions', methods=['GET'])
def get_prevision():
    prevision = Prevision.query.all()
    prevision = list(map(lambda p:p.serialize(),prevision))
    return jsonify(prevision), 200 

#API speciality GET
@api.route('/mediGeeks/specialitys', methods=['GET'])
def get_speciality():
    speciality = Speciality.query.all()
    speciality = list(map(lambda p:p.serialize(),speciality))
    return jsonify(speciality), 200 






