FROM node:alpine
WORKDIR /app
COPY package.json .
COPY ormconfig.js .
RUN yarn
COPY . .
CMD ["yarn", "dev"]
