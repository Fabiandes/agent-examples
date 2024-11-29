FROM node:20-alpine AS base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i

COPY . .

FROM base AS production

ENV NODE_PATH=./build

RUN npm run compile

CMD ["node", "build/src/server.js"]