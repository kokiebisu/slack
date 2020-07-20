#!/bin/sh
docker-compose stop
docker-compose rm -f
docker-compose -f docker-compose.prod.yml pull
docker-compose -f docker-compose.prod.yml up -d
