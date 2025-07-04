FROM node:20 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i

FROM node:alpine

COPY . .

EXPOSE 3000

CMD [ "node", "dist/API.js"]


