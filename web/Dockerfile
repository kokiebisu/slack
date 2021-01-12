FROM node:alpine as builder
WORKDIR /app/web
COPY /web/tsconfig.json .
COPY /web/package.json .
RUN yarn
COPY /web ./
RUN yarn build

FROM node:alpine as production
WORKDIR /app
COPY --from=builder /app/web/build ./build
COPY --from=builder /app/web/public ./public
COPY --from=builder /app/web/package.json .
RUN yarn --production
EXPOSE 3000
CMD ["yarn", "start"]