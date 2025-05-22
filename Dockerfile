FROM node:22.14.0

WORKDIR /home/api

COPY package.json .

COPY package-lock.json .
COPY prisma ./prisma

RUN npm install

COPY . .

RUN npm run build

RUN npx prisma generate

EXPOSE 3000
