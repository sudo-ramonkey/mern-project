FROM node:current-alpine3.20

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 8000

CMD ["npm", "start"]