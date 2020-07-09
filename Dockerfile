# stage 1
FROM node:alpine as builder
WORKDIR /app
COPY ./server/package.json .
COPY ./server/tsconfig.json .
RUN yarn 
COPY . .
RUN yarn build ./server

# stage 2
FROM nginx
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html