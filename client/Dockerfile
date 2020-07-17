FROM nginx:stable-alpine as builder
WORKDIR /app
COPY ./package.json .
COPY . .
RUN yarn && yarn build

FROM nginx:stable-alpine
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]