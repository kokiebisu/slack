FROM node:12
WORKDIR /app
COPY ./yarn.lock .
COPY ./package.json .
COPY ./ormconfig.js .
RUN yarn
EXPOSE 4000
CMD ts-node-dev --respawn src/server.ts
