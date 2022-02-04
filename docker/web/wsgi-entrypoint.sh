#!/bin/sh

until cd /srv/www/
do
    echo "Waiting for server volume..."
done

until python manage.py migrate
do
    echo "Waiting for db to be ready..."
    sleep 3
done

python manage.py collectstatic --noinput

gunicorn privollesru.wsgi \
    --bind 0.0.0.0:80 \
    --workers 1 \
    --threads 1 \
    --log-level debug \
    --log-file=/srv/www/docker/logs/gunicorn.log
