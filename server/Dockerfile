FROM node:alpine as builder
WORKDIR /app
COPY package.json .
COPY tsconfig.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:alpine
WORKDIR /usr/app
ENV NODE_ENV=production

COPY package.json .
RUN npm install --prod
COPY --from=builder /app/dist .

EXPOSE 4000

CMD ["node", "./src/server.js"]
