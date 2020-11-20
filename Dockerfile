FROM node:15.2.1-alpine3.10

WORKDIR /app
COPY package*.json /app/
RUN npm install

CMD ["npm start"]
