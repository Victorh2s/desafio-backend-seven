FROM --platform=linux/amd64 node:22.14.0

WORKDIR /home/api

COPY package.json .

COPY package-lock.json .
COPY prisma ./prisma

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 3000
