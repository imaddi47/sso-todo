FROM node:22-alpine

WORKDIR /app
ARG SERVER_PORT
ENV SERVER_PORT=${SERVER_PORT:-3001}

COPY package.json package-lock.json ./
RUN npm ci
COPY . .

EXPOSE $SERVER_PORT
ENTRYPOINT ["node", "/app/src/index.mjs"]
