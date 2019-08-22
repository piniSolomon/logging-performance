FROM node:10.15.3-stretch-slim

WORKDIR /app

COPY ./out /app
COPY package.json /app

RUN npm install
CMD node index.js
