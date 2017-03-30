from peewee import *


class ConnectDatabase:

    db = None

    @staticmethod
    def get_connect_string():
        try:
            with open("connect_string.txt", "r") as db_file:
                return db_file.readline().strip()
        except:
            print("Can't get connect string.")

    @classmethod
    def get_conn(cls):
        if cls.db is None:
            cls.db = PostgresqlDatabase("proman")
        return cls.db