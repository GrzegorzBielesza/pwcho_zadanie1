# syntax = docker/dockerfile:1.3

FROM node:latest as node

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build --prod

FROM nginx:alpine

COPY --from=node /app/dist/fib-calc /usr/share/nginx/html