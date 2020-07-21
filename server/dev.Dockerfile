FROM node:alpine
WORKDIR /app
COPY package.json .
COPY ormconfig.ts .
RUN yarn
COPY . .
CMD yarn dev
