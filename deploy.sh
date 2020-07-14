docker build -t kokiebisu/slack-client:latest -t kokiebisu/slack-client:$SHA -f ./client/Dockerfile ./client
docker build -t kokiebisu/slack-server:latest -t kokiebisu/slack-server:$SHA -f ./server/Dockerfile ./server

docker push kokiebisu/slack-client:latest
docker push kokiebisu/slack-server:latest

docker push kokiebisu/slack-client:$SHA
docker push kokiebisu/slack-server:$SHA

kubectl apply -f kubernetes

kubectl set image deployments/client-deployment client=kokiebisu/slack-client:$SHA
kubectl set image deployments/server-deployment server=kokiebisu/slack-server:$SHA
