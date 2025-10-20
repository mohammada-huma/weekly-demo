FROM node:22.12-alpine AS build

WORKDIR /app
ARG GITHUB_TOKEN

RUN apk add --no-cache git

COPY package*.json ./

RUN echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" > .npmrc && \
    echo "@huma-engineering:registry=https://npm.pkg.github.com" >> .npmrc

RUN npm ci
RUN npm install -g @angular/cli@latest

COPY . .

RUN npm run build:all && npm run build -- weekly-demo --configuration=production

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist/weekly-demo/browser /usr/share/nginx/html

RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]