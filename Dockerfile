FROM node:19

COPY db/ db/
COPY fsutils/ fsutils/
COPY images/ images/
COPY message/ message/
COPY config.js config.js
COPY index.js index.js
COPY .env .env
COPY package.json package.json

RUN npm i
CMD ["npm", "run", "start"]