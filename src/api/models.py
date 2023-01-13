from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
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
        }

"""class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), unique=True, nullable=False)
    rut = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    #prevision_id = db.Column(db.Integer, ForeignKey('prevision.id'), nullable=False)

class Doctor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), unique=True, nullable=False)
    rut = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    #especialidad_id = db.Column(db.Integer, ForeignKey('especialidad.id'), nullable=False)

class Centro(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    comuna = db.Column(db.String(120), nullable=False)
    direccion = db.Column(db.String(120), nullable=False)
    horario_inicio_atencion = db.Column(db.String(120), nullable=False)
    horario_fin_atencion = db.Column(db.String(120), nullable=False)
    
class Especialidad(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)

class Prevision(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
       
class Calendario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    centro_id = db.Column(db.Integer, ForeignKey('centro.id'), nullable=False)
    año = db.Column(db.String(120), unique=True, nullable=False)
    mes = db.Column(db.String(120), nullable=False)
    dia = db.Column(db.String(120), nullable=False)
    hora_atencion_inicio = db.Column(db.String(120), nullable=False)
    hora_atencion_fin = db.Column(db.String(120), nullable=False)
    disponible = db.Column(db.Boolean(), unique=False, nullable=False)

class Cita(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    #doctor_id = db.Column(db.Integer, ForeignKey('doctor.id'), nullable=False)
    #especialidad_id = db.Column(db.Integer, ForeignKey('especialidad.id'), nullable=False)
    #centro_id = db.Column(db.Integer, ForeignKey('centro.id'), nullable=False)
    #calendario_id = db.Column(db.Integer, ForeignKey('calendario.id'), nullable=False)
    disponible = db.Column(db.Boolean(), unique=False, nullable=False)
    #user_id = db.Column(db.Integer, ForeignKey('user.id'), nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }"""