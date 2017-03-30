from models import *


class InitDatabase:

    @staticmethod
    def init():
        # ConnectDatabase.get_conn().drop_tables([Boards, Cards], safe=True)
        ConnectDatabase.get_conn().create_tables([Boards, Cards], safe=True)