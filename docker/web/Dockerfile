FROM python:3.10-alpine

ENV PYTHONDONTWRITEBYTECODE 1 \
    PYTHONUNBUFFERED 1

WORKDIR /srv/www/

RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev zlib-dev jpeg-dev gcc musl-dev \
    && pip install psycopg2

RUN pip install --upgrade pip
RUN pip install pipenv gunicorn

COPY ./Pipfile ./Pipfile.lock ./

RUN pipenv install --system --deploy --ignore-pipfile

COPY ./ ./
