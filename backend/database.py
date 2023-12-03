from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

#DOCKER
URL_DATABASE = 'mysql+pymysql://root:my-secret-pw@host.docker.internal:3306/test'
#LOCAL
# URL_DATABASE = 'mysql+pymysql://root:my-secret-pw@localhost:3306/test'

engine = create_engine(URL_DATABASE)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

Base.metadata.create_all(bind=engine)