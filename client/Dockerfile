FROM node:alpine as builder
WORKDIR /app
COPY ./package.json .
RUN yarn
COPY . .
RUN yarn build

FROM nginx
EXPOSE 3000
COPY --from=builder /app/build /app
