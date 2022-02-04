#!/bin/sh

until cd /usr/src/app/web_privolles/
do
    echo "Waiting for server volume..."
done

until python manage.py migrate
do
    echo "Waiting for db to be ready..."
    sleep 3
done

python manage.py collectstatic --noinput

gunicorn web_privolles.wsgi \
    --bind 0.0.0.0:80 \
    --workers 1 \
    --threads 1 \
    --log-level debug \
    --log-file=/usr/src/app/docker/logs/gunicorn.log
