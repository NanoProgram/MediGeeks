"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Prevision, Especialidad, Centro, Doctor
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

usersTable = [
        {
        "ID": "US-001",  "NAME": "Santino Cuevas", "RUT": "22.354.650-9", "ID PREVISION": "SD-001", "EMAIL": "santino.cuevas@gmail.com", "PASSWORD": "451cd6541w681f"
    },
    {
        "ID": "US-002",  "NAME": "Pablo Escovar", "RUT": "17.801.666-6", "ID PREVISION": "SD-002", "EMAIL": "pablo.escovar@gmail.com", "PASSWORD": "Dnfur651g81"
    }
    ]

doctorsTable = [
        {
        "ID": "MD-001",  "NAME": "Alberto Contreras", "RUT": "12.548.575-2", "ID ESPECIALIDAD": "SP-001", "EMAIL": "alberto.contreras@gmail.com", "PASSWORD": "zvb65168186"
    },
    {
        "ID": "MD-002",  "NAME": "Dolores Fuertes", "RUT": "11.522.222-0", "ID ESPECIALIDAD": "SP-002", "EMAIL": "dolores.fuertes@gmail.com", "PASSWORD": "fwewfe54684"
    }
    ]

#API USER GET
@api.route('/mediGeeks/users', methods=['GET'])
def get_users_table():
    user = User.query.all()
    user = list(map(lambda p:p.serialize(),user))
    return jsonify(user), 200 

#API DOCTOR GET
@api.route('/mediGeeks/doctors', methods=['GET'])
def get_doctor_table():
    doctor = Doctor.query.all()
    doctor = list(map(lambda p:p.serialize(),doctor))
    return jsonify(doctor), 200

#API CENTRO GET
@api.route('/mediGeeks/centro', methods=['GET'])
def get_centro_table():
    centro = Centro.query.all()
    centro = list(map(lambda p:p.serialize(),centro))
    return jsonify(centro), 200 

#API PREVISION GET
@api.route('/mediGeeks/prevision', methods=['GET'])
def get_prevision():
    prevision = Prevision.query.all()
    prevision = list(map(lambda p:p.serialize(),prevision))
    return jsonify(prevision), 200 

#API ESPECIALIDAD GET
@api.route('/mediGeeks/especialidad', methods=['GET'])
def get_especialidad():
    especialidad = Especialidad.query.all()
    especialidad = list(map(lambda p:p.serialize(),especialidad))
    return jsonify(especialidad), 200 

#API USER GET/ID
@api.route('/mediGeeks/users/<user_id>', methods=['GET'])
def users_table_id(user_id):
    
    print(user_id)
    for user in usersTable: 
        if user["ID"] == user_id:
           return jsonify(user), 200 

    return "Usuario no existe", 404

#API users POST
@api.route('/mediGeeks/users', methods=['POST'])
def add_new_user():
    request_body = request.json
    usersTable.append(request_body)  
    return jsonify(usersTable), 200

#API USER PUT/ID
@api.route('/mediGeeks/users/<user_id>', methods=['PUT'])
def update_user_id(user_id):
    
    data = request.json 
    for user in usersTable: 
        if user["ID"] == user_id:
            user = data
            return jsonify(user), 200 

    return "Usuario no existe", 404


#API doctor GET/ID
@api.route('/mediGeeks/doctors/<doctor_id>', methods=['GET'])
def doctors_table_id(doctor_id):

    print(doctor_id)
    for doctor in doctorsTable:
        if doctor["ID"] == doctor_id:
            return jsonify(doctor),200
    
    return "Doctor no existe", 200 

#API doctor POST
@api.route('/mediGeeks/doctors', methods=['POST'])
def add_new_doctor():
    request_body = request.json
    doctorsTable.append(request_body)  
    return jsonify(doctorsTable), 200

#API DOCTOR PUT/ID
@api.route('/mediGeeks/doctors/<doctor_id>', methods=['PUT'])
def update_doctor_id(doctor_id):
    
    data = request.json 
    for doctor in doctorsTable: 
        if doctor["ID"] == doctor_id:
            user = data
            return jsonify(doctor), 200 

    return "Usuario no existe", 404
