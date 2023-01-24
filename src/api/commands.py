
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
            calendar.year = "año" + str(x)
            calendar.month = "mes" + str(x)
            calendar.day = "dia" + str(x)
            calendar.appointment_start_time = "Apertura" + str(x)
            calendar.appointment_end_time = "FIN" + str(x)
            calendar.available = True
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
            appointment.doctor_id = "Doctor" + str(x)
            appointment.speciality_id = x
            appointment.center_id = x
            appointment.calendar_id = x
            appointment.user_id = "Paciente" + str(x)
            db.session.add(appointment)
            db.session.commit()
            print("Appointment: ", appointment.id, " created.")

        print("All test appointment created")



    