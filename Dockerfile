# specify the node base image with your desired version node:<version>
FROM node:14



COPY . .

RUN yarn install

EXPOSE 3000

CMD ["npm", "start"]