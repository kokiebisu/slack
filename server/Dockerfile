FROM node:alpine as builder
WORKDIR /app
COPY ./package.json .
RUN yarn
COPY . .
RUN yarn build

FROM node:alpine
WORKDIR /app
COPY package.json ./
RUN yarn

COPY --from=builder /app/dist .

COPY ormconfig.js ./

EXPOSE 4000

CMD node src/server.js