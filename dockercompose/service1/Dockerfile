# syntax=docker/dockerfile:1

FROM node:14.13.0
WORKDIR /service1
ENV NODE_ENV=production
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
CMD [ "node", "nodeservice.js"]