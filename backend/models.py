from sqlalchemy import Boolean, Integer, String, Column, Date, Float
from database import Base

class Data(Base):
    __tablename__ = 'data'

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    date = Column(String(10))
    name = Column(String(50))
    mail = Column(String(50))
    company = Column(String(50))
    branch = Column(String(1))
    role = Column(String(3))
    lang = Column(String(2))

    # A1 - A10
    A1 = Column(Integer)
    A2 = Column(Integer)
    A3 = Column(Integer)
    A4 = Column(Integer)
    A5 = Column(Integer)
    A6 = Column(Integer)
    A7 = Column(Integer)
    A8 = Column(Integer)
    A9 = Column(Integer)
    A10 = Column(Integer)

    # B1 - B10
    B1 = Column(Integer)
    B2 = Column(Integer)
    B3 = Column(Integer)
    B4 = Column(Integer)
    B5 = Column(Integer)
    B6 = Column(Integer)
    B7 = Column(Integer)
    B8 = Column(Integer)
    B9 = Column(Integer)
    B10 = Column(Integer)

    # C1 - C3
    C1 = Column(Integer)
    C2 = Column(Integer)
    C3 = Column(Integer)

    # D1 - D9
    D1 = Column(Integer)
    D2 = Column(Integer)
    D3 = Column(Integer)
    D4 = Column(Integer)
    D5 = Column(Integer)
    D6 = Column(Integer)
    D7 = Column(Integer)
    D8 = Column(Integer)
    D9 = Column(Integer)

    # E1 - E6
    E1 = Column(Integer)
    E2 = Column(Integer)
    E3 = Column(Integer)
    E4 = Column(Integer)
    E5 = Column(Integer)
    E6 = Column(Integer)

    # F1 - F3
    F1 = Column(Integer)
    F2 = Column(Integer)
    F3 = Column(Integer)

    # CHANGE, G1 - G3
    change = Column(String(1))
    G1 = Column(Integer)
    G2 = Column(Integer)
    G3 = Column(Integer)


class Average(Base):
    __tablename__ = 'data'
    date = Column(String(10))
    name = Column(String(50))
    mail = Column(String(50))
    company = Column(String(50))
    branch = Column(String(1))
    role = Column(String(3))
    lang = Column(String(2))

    AvgA = Column(Float)
    AvgB = Column(Float)
    AvgC = Column(Float)
    AvgD = Column(Float)
    AvgE = Column(Float)
    AvgF = Column(Float)