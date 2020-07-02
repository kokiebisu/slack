FROM node:12
WORKDIR /app
COPY yarn.lock .
COPY package.json .
COPY ormconfig.js .
RUN yarn
COPY dist .
EXPOSE 4000
CMD node server.js
