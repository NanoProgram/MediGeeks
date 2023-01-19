"""empty message

Revision ID: 7a95064b2063
Revises: 
Create Date: 2023-01-18 22:27:57.594825

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7a95064b2063'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('centro',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('comuna', sa.String(length=120), nullable=False),
    sa.Column('direccion', sa.String(length=120), nullable=False),
    sa.Column('horario_inicio_atencion', sa.String(length=120), nullable=False),
    sa.Column('horario_fin_atencion', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('especialidad',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('prevision',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('calendario',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('centro_id', sa.Integer(), nullable=False),
    sa.Column('año', sa.String(length=120), nullable=False),
    sa.Column('mes', sa.String(length=120), nullable=False),
    sa.Column('dia', sa.String(length=120), nullable=False),
    sa.Column('hora_atencion_inicio', sa.String(length=120), nullable=False),
    sa.Column('hora_atencion_fin', sa.String(length=120), nullable=False),
    sa.Column('disponible', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['centro_id'], ['centro.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('año')
    )
    op.create_table('doctor',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('rut', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('especialidad_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['especialidad_id'], ['especialidad.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('name'),
    sa.UniqueConstraint('rut')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('rut', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('prevision_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['prevision_id'], ['prevision.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('name'),
    sa.UniqueConstraint('rut')
    )
    op.create_table('cita',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('doctor_id', sa.Integer(), nullable=False),
    sa.Column('especialidad_id', sa.Integer(), nullable=False),
    sa.Column('centro_id', sa.Integer(), nullable=False),
    sa.Column('calendario_id', sa.Integer(), nullable=False),
    sa.Column('disponible', sa.Boolean(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['calendario_id'], ['calendario.id'], ),
    sa.ForeignKeyConstraint(['centro_id'], ['centro.id'], ),
    sa.ForeignKeyConstraint(['doctor_id'], ['doctor.id'], ),
    sa.ForeignKeyConstraint(['especialidad_id'], ['especialidad.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('cita')
    op.drop_table('user')
    op.drop_table('doctor')
    op.drop_table('calendario')
    op.drop_table('prevision')
    op.drop_table('especialidad')
    op.drop_table('centro')
    # ### end Alembic commands ###
