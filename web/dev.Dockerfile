FROM node:alpine
WORKDIR /app
COPY /web/tsconfig.json .
COPY /web/package.json .
RUN yarn
COPY /web ./
EXPOSE 3000
CMD ["yarn", "start"]