#!/bin/sh
docker build -t kokiebisu/slack-client -f ./client/Dockerfile ./client
docker build -t kokiebisu/slack-server -f ./server/Dockerfile ./server
docker build -t kokiebisu/slack-proxy -f ./proxy/Dockerfile ./proxy

docker push kokiebisu/slack-client
docker push kokiebisu/slack-server
docker push kokiebisu/slack-proxy
