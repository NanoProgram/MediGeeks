from flask_sqlalchemy import SQLAlchemy
import uuid



db = SQLAlchemy()

def random_uuid():
    return str(uuid.uuid4())

class User(db.Model):
    __tablename__='user'
    id = db.Column(db.String(100), primary_key=True, default=random_uuid)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    rut = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(260), unique=False, nullable=False)
    prevision_id = db.Column(db.Integer, db.ForeignKey('prevision.id'), nullable=False)
    verified = db.Column(db.Boolean(), default=False, nullable=False)
   
    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "rut": self.rut,
            "prevision_id": self.prevision_id,
           
        }

class Prevision(db.Model):
    __tablename__='prevision'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
           
        }

class Speciality(db.Model):
    __tablename__ ='speciality'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
           
        }

class Doctor(db.Model):
    __tablename__ = 'doctor'
    id = db.Column(db.String(100), primary_key=True, default=random_uuid)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    rut = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(260), unique=False, nullable=False)
    speciality_id = db.Column(db.Integer, db.ForeignKey('speciality.id'), nullable=False)
    verified = db.Column(db.Boolean(), default=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "rut": self.rut,
            "speciality_id": self.speciality_id,
           
        }
  

class Center(db.Model):
    __tablename__='center'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    commune = db.Column(db.String(120), nullable=False)
    direction = db.Column(db.String(120), nullable=False)
    start_of_service_hours = db.Column(db.String(120), nullable=False)
    end_of_service_hours = db.Column(db.String(120), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "commune": self.commune,
            "direction": self.direction,
            "start_of_service_hours": self.start_of_service_hours,
            "end_of_service_hours": self.end_of_service_hours,
           
        }
    


       
class Calendar(db.Model):
    __tablename__='calendar'
    id = db.Column(db.Integer, primary_key=True)
    center_id = db.Column(db.Integer, db.ForeignKey('center.id'), nullable=False)
    year = db.Column(db.String(120), nullable=False)
    month = db.Column(db.String(120), nullable=False)
    day = db.Column(db.String(120), nullable=False)
    appointment_start_time = db.Column(db.String(120), nullable=False)
    appointment_end_time = db.Column(db.String(120), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "center_id": self.center_id,
            "year": self.year,
            "month": self.month,
            "day": self.day,
            "appointment_start_time": self.appointment_start_time,
            "appointment_end_time": self.appointment_end_time,
           
        }

class Appointment(db.Model):
    __tablename__='appointment'
    id = db.Column(db.Integer, primary_key=True)
    doctor_id = db.Column(db.String(260), db.ForeignKey('doctor.id'), nullable=False)
    speciality_id = db.Column(db.Integer, db.ForeignKey('speciality.id'), nullable=False)
    center_id = db.Column(db.Integer, db.ForeignKey('center.id'), nullable=False)
    calendar_id = db.Column(db.Integer, db.ForeignKey('calendar.id'), nullable=False)
    available = db.Column(db.Boolean(), unique=False, nullable=False)
    user_id = db.Column(db.String(260), db.ForeignKey('user.id'), nullable=True)

    def serialize(self):
        return {
            "id": self.id,
            "doctor_id": self.doctor_id,
            "speciality_id": self.speciality_id,
            "center_id": self.center_id,
            "calendar_id": self.calendar_id,
            "available": self.available,
            "user_id": self.user_id,
           
        }

  