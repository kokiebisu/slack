FROM node:alpine as builder
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:alpine
WORKDIR /app
COPY package.json ./
RUN npm install

COPY --from=builder /app/dist .

COPY ormconfig.js ./

COPY .env ./

EXPOSE 4000

CMD node ./src/server.js