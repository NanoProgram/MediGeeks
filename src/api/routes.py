"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Prevision, Speciality, Center, Doctor
from api.utils import generate_sitemap, APIException

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
