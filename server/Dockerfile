FROM node:alpine as builder
WORKDIR /app
COPY package.json .
COPY tsconfig.json .
RUN yarn
COPY . .
RUN yarn build

FROM node:alpine
WORKDIR /usr/app
ENV NODE_ENV=production

COPY package.json .
RUN yarn
COPY --from=builder /app/dist .

EXPOSE 4000

CMD ["node", "./src/server.js"]
