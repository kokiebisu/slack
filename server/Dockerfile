FROM node:alpine as builder
WORKDIR /app
COPY package.json .
COPY ormconfig.js .
RUN yarn
COPY . .
RUN yarn build

FROM node:alpine
WORKDIR /app
COPY --from=builder /app/dist .
COPY --from=builder /app/ormconfig.js .
COPY --from=builder /app/config.js .
CMD ["node src/server"]
