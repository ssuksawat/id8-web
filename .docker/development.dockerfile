FROM node:latest

WORKDIR /var/www/id8-web

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
