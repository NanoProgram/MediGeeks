"""empty message

<<<<<<<< HEAD:migrations/versions/3df32acfc8e7_.py
Revision ID: 3df32acfc8e7
Revises: 
Create Date: 2023-01-25 19:47:43.325381
========
Revision ID: faa4c8d417e0
Revises: 
Create Date: 2023-01-25 18:32:57.050599
>>>>>>>> 37457dc (fetch funcionando hasta horas):migrations/versions/faa4c8d417e0_.py

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
<<<<<<<< HEAD:migrations/versions/3df32acfc8e7_.py
revision = '3df32acfc8e7'
========
revision = 'faa4c8d417e0'
>>>>>>>> 37457dc (fetch funcionando hasta horas):migrations/versions/faa4c8d417e0_.py
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('center',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('commune', sa.String(length=120), nullable=False),
    sa.Column('direction', sa.String(length=120), nullable=False),
    sa.Column('start_of_service_hours', sa.String(length=120), nullable=False),
    sa.Column('end_of_service_hours', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('prevision',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('speciality',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('calendar',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('center_id', sa.Integer(), nullable=False),
    sa.Column('year', sa.String(length=120), nullable=False),
    sa.Column('month', sa.String(length=120), nullable=False),
    sa.Column('day', sa.String(length=120), nullable=False),
    sa.Column('appointment_start_time', sa.String(length=120), nullable=False),
    sa.Column('appointment_end_time', sa.String(length=120), nullable=False),
    sa.ForeignKeyConstraint(['center_id'], ['center.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('doctor',
    sa.Column('id', sa.String(length=100), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('rut', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=260), nullable=False),
    sa.Column('speciality_id', sa.Integer(), nullable=False),
    sa.Column('verified', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['speciality_id'], ['speciality.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('rut')
    )
    op.create_table('user',
    sa.Column('id', sa.String(length=100), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('rut', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=260), nullable=False),
    sa.Column('prevision_id', sa.Integer(), nullable=False),
    sa.Column('verified', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['prevision_id'], ['prevision.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('rut')
    )
    op.create_table('appointment',
    sa.Column('id', sa.Integer(), nullable=False),
<<<<<<<< HEAD:migrations/versions/3df32acfc8e7_.py
    sa.Column('doctor_id', sa.String(length=260), nullable=False),
    sa.Column('speciality_id', sa.Integer(), nullable=False),
    sa.Column('center_id', sa.Integer(), nullable=False),
    sa.Column('calendar_id', sa.Integer(), nullable=False),
    sa.Column('available', sa.Boolean(), nullable=False),
    sa.Column('user_id', sa.String(length=260), nullable=False),
========
    sa.Column('doctor_id', sa.String(length=100), nullable=True),
    sa.Column('speciality_id', sa.Integer(), nullable=True),
    sa.Column('center_id', sa.Integer(), nullable=False),
    sa.Column('calendar_id', sa.Integer(), nullable=False),
    sa.Column('available', sa.Boolean(), nullable=False),
    sa.Column('user_id', sa.String(length=100), nullable=True),
>>>>>>>> 37457dc (fetch funcionando hasta horas):migrations/versions/faa4c8d417e0_.py
    sa.ForeignKeyConstraint(['calendar_id'], ['calendar.id'], ),
    sa.ForeignKeyConstraint(['center_id'], ['center.id'], ),
    sa.ForeignKeyConstraint(['doctor_id'], ['doctor.id'], ),
    sa.ForeignKeyConstraint(['speciality_id'], ['speciality.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('appointment')
    op.drop_table('user')
    op.drop_table('doctor')
    op.drop_table('calendar')
    op.drop_table('speciality')
    op.drop_table('prevision')
    op.drop_table('center')
    # ### end Alembic commands ###