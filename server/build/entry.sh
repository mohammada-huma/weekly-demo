#!/bin/sh

# get env SERVER_TYPE and default to server
SERVER_TYPE=${SERVER_TYPE:-server}

if [ "$SERVER_TYPE" = "server" ]; then
    python manage.py migrate
    python manage.py createcachetable
    gunicorn wsgi:application --bind 0.0.0.0:8000 --threads 4
elif [ "$SERVER_TYPE" = "worker" ]; then
    python manage.py celery --worker
elif [ "$SERVER_TYPE" = "beat" ]; then
    python manage.py celery --beat
else
    echo "Invalid server type: $SERVER_TYPE"
    exit 1
fi
