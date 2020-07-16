FROM node:alpine as builder
WORKDIR /app
COPY ./package.json .
COPY . .
RUN yarn && yarn build

FROM nginx:1.17-alpine
WORKDIR /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build .
