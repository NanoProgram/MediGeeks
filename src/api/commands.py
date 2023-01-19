
import click
from api.models import db, User, Prevision, Especialidad, Centro, Doctor

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
            user.id = x
            user.email = "email_prueba@" + str(x)
            user.name = "Nombre_prueba" + str(x)
            user.rut = "rut_prueba" + str(x)
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
            doctor.id = x
            doctor.email = "email_prueba@" + str(x)
            doctor.name = "Nombre_prueba" + str(x)
            doctor.rut = "rut_prueba" + str(x)
            doctor.password = "password_prueba" + str(x)
            doctor.especialidad_id = x
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

    @app.cli.command("insert-test-centro") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_data(count):
        print("Creando test centro")
        for x in range(1, int(count) + 1):
            centro = Centro()
            centro.id = x
            centro.name = "test_name" + str(x)
            centro.comuna = "test_comuna" + str(x)
            centro.direccion = "test_direccion" + str(x)
            centro.horario_inicio_atencion = "test_hora_inicio" + str(x)
            centro.horario_fin_atencion = "test_hora_fin" + str(x)
            db.session.add(centro)
            db.session.commit()
            print("Centro: ", centro.id, " created.")

        print("All test centro created")

        ### Insert the code to populate others tables if needed


    @app.cli.command("insert-test-especialidad") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_data(count):
        print("Creando test especialidad")
        for x in range(1, int(count) + 1):
            especialidad = Especialidad()
            especialidad.id = x
            especialidad.name = "tipo-especialidad-prueba" + str(x)
            db.session.add(especialidad)
            db.session.commit()
            print("Especialidad: ", especialidad.id, " created.")

        print("All test especialidad created")


    