# stage 1 building the code
FROM node as builder
WORKDIR /usr/app
COPY package.json ./
RUN yarn 
COPY . .
RUN yarn build

# stage 2
FROM node
WORKDIR /usr/app
COPY package.json ./
RUN yarn --production

COPY --from=builder /usr/app/dist ./dist

COPY ormconfig.prod.json ./ormconfig.json
COPY ./prod.env .

EXPOSE 4000
CMD node dist/server.js