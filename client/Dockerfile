FROM alpine
EXPOSE 80
ADD nginx/default.conf /etc/nginx/conf.d/default.conf
COPY . /usr/share/nginx/html
RUN apk add nginx && \
    mkdir /run/nginx && \
    apk add nodejs && \
    apk add npm && \
    cd /usr/share/nginx/html && \
    rm -rf node_modules && \
    npm install && \
    npm run build;
CMD ["/bin/sh", "-c", "exec nginx -g 'daemon off;';"]
WORKDIR /usr/share/nginx/html
