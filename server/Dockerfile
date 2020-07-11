FROM node:alpine as builder
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
RUN yarn build

FROM node:alpine
WORKDIR /app
COPY --from=builder /app/dist .
COPY --from=builder /app/ormconfig.js .
RUN ls -a
CMD ["node src/server"]
