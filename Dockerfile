FROM node:23-alpine

WORKDIR ~/hackathon/

COPY public/ .
COPY src/ .
COPY package.json .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]


