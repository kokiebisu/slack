docker build -t kokiebisu/slack-client -f ./client/Dockerfile ./client
docker build -t kokiebisu/slack-server -f ./server/Dockerfile ./server

docker push kokiebisu/slack-client
docker push kokiebisu/slack-server

