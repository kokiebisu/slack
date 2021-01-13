#!/bin/sh
docker build -t kokiebisu/slack-web-prod -f ./web/Dockerfile .

docker push kokiebisu/slack-web-prod