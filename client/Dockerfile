FROM node:alpine as builder
WORKDIR /app
COPY ./package.json .
COPY . .
RUN yarn && yarn build

FROM nginx:1.17-alpine
WORKDIR /var/www/localhost/htdocs
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build .