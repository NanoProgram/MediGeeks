
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
        valores = [{'id': 2, 'name': 'Banmedica'}, {'id': 3, 'name': 'Cruz Blanca'}, {'id': 4, 'name': 'Masvida'},{'id': 5, 'name': 'Colmena'}]
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
        valores = [{'id': 1, 'name': 'Pediatria'}, {'id': 2, 'name': 'Medicina General'}, {'id': 3, 'name': 'Oftalmologia'},{'id': 4, 'name': 'Psiquiatria'},{'id': 5, 'name': 'Dentista'}]
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
        valores = [{'id': 1, 'name': 'VidaMas', 'commune':'Providencia', 'direction':'Barcelona 2116'}, 
                    {'id': 2, 'name': 'Red Salud', 'commune':'Maipu', 'direction':'Alberto Llona 1770'}]
        for valor in valores:
            center = Center()
            center.id = valor['id']
            center.name = valor['name']
            center.commune = valor['commune']
            center.direction = valor['direction']
            center.start_of_service_hours = "09:00"
            center.end_of_service_hours = "18:00"
            db.session.add(center)
            db.session.commit()
            print("Center: ", center.id, " created.")
        print("All test center created")

    @app.cli.command("insert-doctor") # name of our command
    def insert_test_data():
        print("Creando test doctor")
        valores = [{'id': '1', 'email':'juan@gmail.com', 'name': 'Juan Toro', 'rut':'15.369.258-5', 'speciality_id':1}, 
                    {'id': '2', 'email':'roberto@gmail.com', 'name': 'Roberto Toro', 'rut':'15.363.258-5', 'speciality_id':1},
                    {'id': '3', 'email':'carlos@gmail.com', 'name': 'Carlos Toro', 'rut':'15.369.458-5', 'speciality_id':2},
                    {'id': '4', 'email':'Nicolas@gmail.com', 'name': 'Nicolas Toro', 'rut':'15.367.258-5', 'speciality_id':2},]
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
        valores = [{'id': 13, 'appointment_start_time':'13.00', 'appointment_end_time': '14.00', 'center_id':1, },
         {'id': 14, 'appointment_start_time':'14.00', 'appointment_end_time': '15.00', 'center_id':1, },
         {'id': 15, 'appointment_start_time':'09.00', 'appointment_end_time': '10.00', 'center_id':2, },
         {'id': 17, 'appointment_start_time':'11.00', 'appointment_end_time': '12.00', 'center_id':2, },
         {'id': 18, 'appointment_start_time':'13.00', 'appointment_end_time': '14.00', 'center_id':2, },
         {'id': 19, 'appointment_start_time':'14.00', 'appointment_end_time': '15.00', 'center_id':2, },
         {'id': 20, 'appointment_start_time':'15.00', 'appointment_end_time': '16.00', 'center_id':2, },
         {'id': 21, 'appointment_start_time':'16.00', 'appointment_end_time': '17.00', 'center_id':2, }]
        """[{'id': 1, 'appointment_start_time':'15.00', 'appointment_end_time': '16.00', 'center_id':1, },
         {'id': 2, 'appointment_start_time':'12.00', 'appointment_end_time': '13.00', 'center_id':1, },
         {'id': 3, 'appointment_start_time':'11.00', 'appointment_end_time': '12.00', 'center_id':1, },
         {'id': 4, 'appointment_start_time':'17.00', 'appointment_end_time': '18.00', 'center_id':1, },
         {'id': 5, 'appointment_start_time':'15.00', 'appointment_end_time': '16.00', 'center_id':2, },
         {'id': 6, 'appointment_start_time':'14.00', 'appointment_end_time': '15.00', 'center_id':2, },
         {'id': 7, 'appointment_start_time':'11.00', 'appointment_end_time': '12.00', 'center_id':2, },
         {'id': 8, 'appointment_start_time':'09.00', 'appointment_end_time': '10.00', 'center_id':2, }]"""
        for valor in valores:
            calendar = Calendar()
            calendar.id = valor['id']
            calendar.year = "2023"
            calendar.month = "1"
            calendar.day = "30"
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
        valores = [
                    {'id': 17, 'doctor_id':'4', 'speciality_id': 2, 'center_id':2,'calendar_id':17, },
                    {'id': 18, 'doctor_id':'4', 'speciality_id': 2, 'center_id':2,'calendar_id':18, },
                    {'id': 19, 'doctor_id':'4', 'speciality_id': 2, 'center_id':2,'calendar_id':19, },
                    {'id': 20, 'doctor_id':'4', 'speciality_id': 2, 'center_id':2,'calendar_id':20, },
                    {'id': 21, 'doctor_id':'4', 'speciality_id': 2, 'center_id':2,'calendar_id':21, },]
        for valor in valores:
            appointment = Appointment()
            appointment.id = valor['id']
            appointment.available = True
            appointment.doctor_id = valor['doctor_id']
            appointment.speciality_id = valor['speciality_id']
            appointment.center_id = valor['center_id']
            appointment.calendar_id = valor['calendar_id']
            db.session.add(appointment)
            db.session.commit()
            print("Appointment: ", appointment.id, " created.")

        print("All test appointment created")