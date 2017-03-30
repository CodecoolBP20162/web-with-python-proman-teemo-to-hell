from peewee import *
from connect_database import ConnectDatabase


class BaseModel(Model):
    """A base model that will use our Postgresql database"""
    class Meta:
        database = ConnectDatabase.get_conn()


class Boards(BaseModel):
    title = CharField()


class Cards(BaseModel):
    content = CharField(null=True)
    status = CharField()
    position = IntegerField()
    board = ForeignKeyField(Boards)