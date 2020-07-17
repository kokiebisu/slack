docker build -t kokiebisu/slack-client:latest -f ./client/Dockerfile ./client
docker build -t kokiebisu/slack-server:latest -f ./server/Dockerfile ./server

docker push kokiebisu/slack-client:latest
docker push kokiebisu/slack-server:latest

