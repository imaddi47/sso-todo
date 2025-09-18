FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .

EXPOSE $SERVER_PORT
ENTRYPOINT ["node", "/app/src/index.mjs"]
