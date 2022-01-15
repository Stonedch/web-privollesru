FROM python:3.10-alpine

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /usr/src/app

COPY ./Pipfile ./Pipfile.lock ./backend/

RUN apk update && apk add postgresql-dev gcc python3-dev musl-dev && pip install psycopg2

RUN pip install --upgrade pip
RUN pip install pipenv gunicorn

RUN cd ./backend/ && pipenv install --system --deploy --ignore-pipfile

COPY ./docker/ ./docker/
COPY ./ ./backend/
