
import click
from api.models import db, User, Prevision, Speciality, Center, Doctor, Calendar, Appointment

"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""
def setup_commands(app):
    
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-centro 5
    Note: 5 is the number of users to add
    """
    @app.cli.command("insert-test-user") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_data(count):
        print("Creando test user")
        for x in range(1, int(count) + 1):
            user = User()
            user.id = "Paciente" + str(x)
            user.email = "email@" + str(x)
            user.name = "Nombre_prueba" + str(x)
            user.rut = "rut" + str(x)
            user.password = "password_prueba" + str(x)
            user.prevision_id = x
            db.session.add(user)
            db.session.commit()
            print("User: ", user.id, " created.")

        print("All test user created")

    @app.cli.command("insert-test-doctor") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_data(count):
        print("Creando test doctor")
        for x in range(1, int(count) + 1):
            doctor = Doctor()
            doctor.id = "Doctor" + str(x)
            doctor.email = "email_doc@" + str(x)
            doctor.name = "Doc" + str(x)
            doctor.rut = "rut_prueba" + str(x)
            doctor.password = "password_prueba" + str(x)
            doctor.speciality_id = x
            db.session.add(doctor)
            db.session.commit()
            print("Doctor: ", doctor.id, " created.")

        print("All test doctor created")

    @app.cli.command("insert-test-prevision") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_data(count):
        print("Creando test prevision")
        for x in range(1, int(count) + 1):
            prevision = Prevision()
            prevision.id = x
            prevision.name = "test_prevision" + str(x)
            db.session.add(prevision)
            db.session.commit()
            print("Prevision: ", prevision.id, " created.")

        print("All test prevision created")

    @app.cli.command("insert-test-center") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_data(count):
        print("Creando test center")
        for x in range(1, int(count) + 1):
            center = Center()
            center.id = x
            center.name = "test_name" + str(x)
            center.commune = "test_comuna" + str(x)
            center.direction = "test_direccion" + str(x)
            center.start_of_service_hours = "test_hora_inicio" + str(x)
            center.end_of_service_hours = "test_hora_fin" + str(x)
            db.session.add(center)
            db.session.commit()
            print("Center: ", center.id, " created.")

        print("All test center created")

        ### Insert the code to populate others tables if needed


    @app.cli.command("insert-test-speciality") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_data(count):
        print("Creando test speciality")
        for x in range(1, int(count) + 1):
            speciality = Speciality()
            speciality.id = x
            speciality.name = "tipo-especialidad-prueba" + str(x)
            db.session.add(speciality)
            db.session.commit()
            print("Speciality: ", speciality.id, " created.")

        print("All test speciality created")

    @app.cli.command("insert-test-calendar") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_data(count):
        print("Creando test calendar")
        for x in range(1, int(count) + 1):
            calendar = Calendar()
            calendar.id = x
            calendar.year = "2023"
            calendar.month = "1"
            calendar.day = "26"
            calendar.appointment_start_time = "09:00"
            calendar.appointment_end_time = "10:00"
            calendar.center_id = x
            db.session.add(calendar)
            db.session.commit()
            print("Calendar: ", calendar.id, " created.")

        print("All test calendar created")

    @app.cli.command("insert-test-appointment") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_data(count):
        print("Creando test appointment")
        for x in range(1, int(count) + 1):
            appointment = Appointment()
            appointment.id = x
            appointment.available = True
            appointment.doctor_id = "Doctor" + str(x) # No Va
            appointment.speciality_id = x
            appointment.center_id = x
            appointment.calendar_id = x # aqui borrar
            db.session.add(appointment)
            db.session.commit()
            print("Appointment: ", appointment.id, " created.")

        print("All test appointment created")

            

    @app.cli.command("insert-prevision-2")
    def insert_test_data():
        print("Creando test prevision")
        valores = [{'id': 1, 'name': 'Fonasa'},{'id': 2, 'name': 'Banmedica'}, {'id': 3, 'name': 'Cruz Blanca'}, {'id': 4, 'name': 'Masvida'},{'id': 5, 'name': 'Colmena'}]
        for valor in valores:
            prevision = Prevision()
            prevision.id = valor['id']
            prevision.name = valor['name']
            db.session.add(prevision)
        db.session.commit()
        print("All test prevision created")

    @app.cli.command("insert-speciality-2")
    def insert_test_data():
        print("Creando test prevision")
        valores = [{'id': 1, 'name': 'Pediatria'}, {'id': 2, 'name': 'Medicina General'}, {'id': 3, 'name': 'Psicologia'},{'id': 4, 'name': 'Psiquiatria'},{'id': 5, 'name': 'Odontologia'}]
        for valor in valores:
            speciality = Speciality()
            speciality.id = valor['id']
            speciality.name = valor['name']
            db.session.add(speciality)
        db.session.commit()
        print("All test prevision created")

    @app.cli.command("insert-center") # name of our command
    def insert_test_data():
        print("Creando test center")
        valores = [#{'id': 1, 'name': 'VidaMas', 'commune':'Providencia', 'direction':'Barcelona 2116'}, 
                    #{'id': 2, 'name': 'MediCkine', 'commune':'Maipu', 'direction':'Alberto Llona 1770'},
                    #{'id': 3, 'name': 'San Victor', 'commune':'Peñaflor', 'direction':'San Martín 150'},
                    {'id': 1, 'name': 'MediCenter', 'commune':'Santiago', 'direction':'Huerfanos #799', 'lat':'-33.4387523', 'lng':'-70.6479961'},
                    {'id': 2, 'name': 'Centro Medico Bannen', 'commune':'Santiago', 'direction':'Valentín Letelier 1349', 'lat':'-33.4434033', 'lng':'-70.6550669'},
                    {'id': 3, 'name': 'Centro Médico y Dental Ñuñoa Salud', 'commune':'Ñuñoa', 'direction':'Av. Irarrázaval 2821', 'lat':'-33.4549378', 'lng':'-70.6016491'}]
        for valor in valores:
            center = Center()
            center.id = valor['id']
            center.name = valor['name']
            center.commune = valor['commune']
            center.direction = valor['direction']
            center.start_of_service_hours = "09:00"
            center.end_of_service_hours = "18:00"
            center.lat =valor['lat']
            center.lng =valor['lng']
            db.session.add(center)
            db.session.commit()
            print("Center: ", center.id, " created.")
        print("All test center created")

   
    @app.cli.command("insert-doctor") # name of our command
    def insert_test_data():
        print("Creando test doctor")
        valores = [{'id': '1', 'email':'juan@gmail.com', 'name': 'Juan Toro', 'rut':'15.369.258-5', 'speciality_id':1}, 
                    {'id': '2', 'email':'roberto@gmail.com', 'name': 'Roberto Canales', 'rut':'15.363.258-5', 'speciality_id':1},
                    {'id': '3', 'email':'carlos@gmail.com', 'name': 'Ramon Bravo', 'rut':'15.369.458-5', 'speciality_id':2},
                    {'id': '4', 'email':'Nicolas@gmail.com', 'name': 'Nicolas Oñate', 'rut':'15.367.258-5', 'speciality_id':2},
                    {'id': '5', 'email':'Diego@gmail.com', 'name': 'Diego Carrasco', 'rut':'11.364.678-5', 'speciality_id':3},
                    {'id': '6', 'email':'Mirko@gmail.com', 'name': 'Mirko Martinez', 'rut':'14.367.254-5', 'speciality_id':3},
                    {'id': '7', 'email':'Pablo@gmail.com', 'name': 'Pablo Duran', 'rut':'16.767.258-5', 'speciality_id':4},
                    {'id': '8', 'email':'Emilio@gmail.com', 'name': 'Emilio Martinez', 'rut':'12.367.258-5', 'speciality_id':4},
                    {'id': 'null', 'email':'null', 'name': 'null', 'rut':'null', 'speciality_id':2}]
        for valor in valores:
            doctor = Doctor()
            doctor.id = valor['id']
            doctor.email = valor['email']
            doctor.name = valor['name']
            doctor.rut = valor['rut']
            doctor.password = "clavesegura"
            doctor.speciality_id = valor['speciality_id']
            db.session.add(doctor)
            db.session.commit()
            print("Doctor: ", doctor.id, " created.")

        print("All test doctor created")

    @app.cli.command("insert-calendar") # name of our command
    def insert_test_data():
        print("Creando test calendar")
        valores = [{'id': 1, 'appointment_start_time':'09:00', 'appointment_end_time': '16.00', 'center_id':1, 'day': '10'},
         {'id': 2, 'appointment_start_time':'12.00', 'appointment_end_time': '13.00', 'center_id':1, 'day': '10'},
         {'id': 3, 'appointment_start_time':'11.00', 'appointment_end_time': '12.00', 'center_id':1, 'day': '10'},
         {'id': 4, 'appointment_start_time':'17.00', 'appointment_end_time': '18.00', 'center_id':1, 'day': '12'},
         {'id': 5, 'appointment_start_time':'15.00', 'appointment_end_time': '16.00', 'center_id':1, 'day': '12'},
         {'id': 6, 'appointment_start_time':'14.00', 'appointment_end_time': '15.00', 'center_id':1, 'day': '12'},
         {'id': 7, 'appointment_start_time':'11.00', 'appointment_end_time': '12.00', 'center_id':1, 'day': '13'},
         {'id': 8, 'appointment_start_time':'09.00', 'appointment_end_time': '10.00', 'center_id':1, 'day': '13'},
         {'id': 9, 'appointment_start_time':'13.00', 'appointment_end_time': '14.00', 'center_id':2, 'day': '14'},
         {'id': 10, 'appointment_start_time':'14.00', 'appointment_end_time': '15.00', 'center_id':2, 'day': '14'},
         {'id': 11, 'appointment_start_time':'09.00', 'appointment_end_time': '10.00', 'center_id':2, 'day': '14'},
         {'id': 12, 'appointment_start_time':'11.00', 'appointment_end_time': '12.00', 'center_id':2, 'day': '13'},
         {'id': 13, 'appointment_start_time':'13.00', 'appointment_end_time': '14.00', 'center_id':2, 'day': '13'},
         {'id': 14, 'appointment_start_time':'14.00', 'appointment_end_time': '15.00', 'center_id':2, 'day': '13'},
         {'id': 15, 'appointment_start_time':'15.00', 'appointment_end_time': '16.00', 'center_id':2, 'day': '15'},
         {'id': 16, 'appointment_start_time':'16.00', 'appointment_end_time': '17.00', 'center_id':2, 'day': '15'},
         {'id': 17, 'appointment_start_time':'16.00', 'appointment_end_time': '17.00', 'center_id':3, 'day': '10'},
         {'id': 18, 'appointment_start_time':'16.00', 'appointment_end_time': '17.00', 'center_id':3, 'day': '10'},
         {'id': 19, 'appointment_start_time':'16.00', 'appointment_end_time': '17.00', 'center_id':3, 'day': '10'},
         {'id': 20, 'appointment_start_time':'16.00', 'appointment_end_time': '17.00', 'center_id':3, 'day': '11'},
         {'id': 21, 'appointment_start_time':'16.00', 'appointment_end_time': '17.00', 'center_id':3, 'day': '11'},
         {'id': 22, 'appointment_start_time':'16.00', 'appointment_end_time': '17.00', 'center_id':3, 'day': '11'},
         {'id': 23, 'appointment_start_time':'16.00', 'appointment_end_time': '17.00', 'center_id':3, 'day': '12'},
         {'id': 24, 'appointment_start_time':'16.00', 'appointment_end_time': '17.00', 'center_id':3, 'day': '12'}
        ]
        for valor in valores:
            calendar = Calendar()
            calendar.id = valor['id']
            calendar.year = "2023"
            calendar.month = "Marzo"
            calendar.day = valor['day']
            calendar.appointment_start_time = valor['appointment_start_time']
            calendar.appointment_end_time = valor['appointment_end_time']
            calendar.center_id = valor['center_id']
            db.session.add(calendar)
            db.session.commit()
            print("Calendar: ", calendar.id, " created.")

        print("All test calendar created")

    @app.cli.command("insert-appointment") # name of our command
    def insert_test_data():
        print("Creando test appointment")
        valores = [{'id': 1, 'doctor_id':'1', 'speciality_id': 1, 'center_id':1,'calendar_id':1, },
                    {'id': 2, 'doctor_id':'1', 'speciality_id': 1, 'center_id':1,'calendar_id':2, },
                    {'id': 3, 'doctor_id':'2', 'speciality_id': 2, 'center_id':1,'calendar_id':3, },
                    {'id': 4, 'doctor_id':'2', 'speciality_id': 2, 'center_id':1,'calendar_id':4, },
                    {'id': 5, 'doctor_id':'3', 'speciality_id': 3, 'center_id':1,'calendar_id':5, },
                    {'id': 6, 'doctor_id':'3', 'speciality_id': 3, 'center_id':1,'calendar_id':6, },
                    {'id': 7, 'doctor_id':'4', 'speciality_id': 4, 'center_id':1,'calendar_id':7, },
                    {'id': 8, 'doctor_id':'4', 'speciality_id': 4, 'center_id':1,'calendar_id':8, },
                    {'id': 9, 'doctor_id':'5', 'speciality_id': 5, 'center_id':2,'calendar_id':9, },
                    {'id': 10, 'doctor_id':'5', 'speciality_id': 5, 'center_id':2,'calendar_id':10, },
                    {'id': 11, 'doctor_id':'6', 'speciality_id': 1, 'center_id':2,'calendar_id':11, },
                    {'id': 12, 'doctor_id':'6', 'speciality_id': 1, 'center_id':2,'calendar_id':12, },
                    {'id': 13, 'doctor_id':'7', 'speciality_id': 2, 'center_id':2,'calendar_id':13, },
                    {'id': 14, 'doctor_id':'7', 'speciality_id': 2, 'center_id':2,'calendar_id':14, },
                    {'id': 15, 'doctor_id':'8', 'speciality_id': 3, 'center_id':2,'calendar_id':15, },
                    {'id': 16, 'doctor_id':'8', 'speciality_id': 3, 'center_id':2,'calendar_id':16, },
                    {'id': 17, 'doctor_id':'1', 'speciality_id': 1, 'center_id':3,'calendar_id':17, },
                    {'id': 18, 'doctor_id':'1', 'speciality_id': 1, 'center_id':3,'calendar_id':18, },
                    {'id': 19, 'doctor_id':'2', 'speciality_id': 2, 'center_id':3,'calendar_id':19, },
                    {'id': 20, 'doctor_id':'2', 'speciality_id': 2, 'center_id':3,'calendar_id':20, },
                    {'id': 21, 'doctor_id':'3', 'speciality_id': 3, 'center_id':3,'calendar_id':21, },
                    {'id': 22, 'doctor_id':'3', 'speciality_id': 3, 'center_id':3,'calendar_id':22, },
                    {'id': 23, 'doctor_id':'4', 'speciality_id': 4, 'center_id':3,'calendar_id':23, },
                    {'id': 24, 'doctor_id':'4', 'speciality_id': 4, 'center_id':3,'calendar_id':24, },
                    ]
        for valor in valores:
            appointment = Appointment()
            appointment.id = valor['id']
            appointment.available = False
            appointment.doctor_id = valor['doctor_id']
            appointment.speciality_id = valor['speciality_id']
            appointment.center_id = valor['center_id']
            appointment.calendar_id = valor['calendar_id']
            db.session.add(appointment)
            db.session.commit()
            print("Appointment: ", appointment.id, " created.")

        print("All test appointment created")