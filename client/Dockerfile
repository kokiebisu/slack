FROM node:alpine as builder
WORKDIR /app
COPY ./package.json .
RUN yarn cache clean
COPY . .
RUN yarn && yarn build

FROM nginx:1.17-alpine
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
