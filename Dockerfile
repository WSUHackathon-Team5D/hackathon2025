FROM node:23-alpine

WORKDIR ~/hackathon/

COPY hackathon/public/ .
COPY hackathon/src/ .
COPY hackathon/package.json .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]


