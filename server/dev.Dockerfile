FROM node
WORKDIR /app
COPY package.json .
COPY ormconfig.ts .
RUN yarn
COPY . .
EXPOSE 4000
CMD yarn dev
