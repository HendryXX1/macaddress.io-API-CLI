FROM node:16.13
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm -g install npm@8.1.0
RUN npm install
COPY . .
RUN npm run build
