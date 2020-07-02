# stage 1
FROM node as builder
WORKDIR /root
COPY package.json ./
RUN yarn 
COPY . .
RUN yarn build

# stage 2
FROM node
WORKDIR /app
COPY package.json ./
RUN yarn --production

COPY --from=builder /root/dist ./dist

COPY ./ormconfig.prod.json ./ormconfig.json
COPY ./prod.env ./.env

EXPOSE 4000
CMD node dist/server