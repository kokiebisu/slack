FROM node:12
WORKDIR /app
COPY ./server/yarn.lock .
COPY ./server/package.json .
COPY ./server/ormconfig.js .
RUN yarn
EXPOSE 4000
CMD ts-node-dev --respawn src/server.ts
