FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install

RUN npm run build

RUN npm install -g serve

EXPOSE 4321

CMD ["serve", "-s", "dist", "-l", "4321"]
