FROM node:alpine
WORKDIR /app
COPY /web/tsconfig.json .
COPY /web/package.json .
RUN yarn
COPY /web ./

RUN ["yarn", "start"]