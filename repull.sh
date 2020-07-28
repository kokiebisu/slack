#!/bin/sh
docker-compose down --remove-orphans
docker-compose -f docker-compose.prod.yml pull
docker-compose -f docker-compose.prod.yml up -d
