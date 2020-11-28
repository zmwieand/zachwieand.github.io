FROM node:15.3.0-alpine3.10

WORKDIR /app
COPY package*.json /app/
RUN npm install

CMD ["npm start"]
