from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()

"""class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), unique=True, nullable=False)


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }"""

class User(db.Model):
    __tablename__='user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), unique=True, nullable=False)
    rut = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    prevision_id = db.Column(db.Integer, db.ForeignKey('prevision.id'), nullable=False)

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
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), unique=True, nullable=False)
    rut = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    speciality_id = db.Column(db.Integer, db.ForeignKey('speciality.id'), nullable=False)

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
    


       
class Calendario(db.Model):
    __tablename__='calendario'
    id = db.Column(db.Integer, primary_key=True)
    centro_id = db.Column(db.Integer, db.ForeignKey('centro.id'), nullable=False)
    año = db.Column(db.String(120), unique=True, nullable=False)
    mes = db.Column(db.String(120), nullable=False)
    dia = db.Column(db.String(120), nullable=False)
    hora_atencion_inicio = db.Column(db.String(120), nullable=False)
    hora_atencion_fin = db.Column(db.String(120), nullable=False)
    disponible = db.Column(db.Boolean(), unique=False, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "centro_id": self.centro_id,
            "año": self.año,
            "mes": self.mes,
            "dia": self.dia,
            "hora_atencion_inicio": self.hora_atencion_inicio,
            "hora_atencion_fin": self.hora_atencion_fin,
            "disponible": self.disponible,
           
        }

class Cita(db.Model):
    __tablename__='cita'
    id = db.Column(db.Integer, primary_key=True)
    doctor_id = db.Column(db.Integer, db.ForeignKey('doctor.id'), nullable=False)
    especialidad_id = db.Column(db.Integer, db.ForeignKey('especialidad.id'), nullable=False)
    centro_id = db.Column(db.Integer, db.ForeignKey('centro.id'), nullable=False)
    calendario_id = db.Column(db.Integer, db.ForeignKey('calendario.id'), nullable=False)
    disponible = db.Column(db.Boolean(), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "doctor_id": self.doctor_id,
            "especialidad_id": self.especialidad_id,
            "centro_id": self.centro_id,
            "calendario_id": self.calendario_id,
            "disponible": self.disponible,
            "user_id": self.user_id,
           
        }

  