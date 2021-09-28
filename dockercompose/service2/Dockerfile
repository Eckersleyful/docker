# syntax=docker/dockerfile:1

FROM node:14.13.0
WORKDIR /
ENV NODE_ENV=production
COPY ["package.json", "package-lock.json*", "/"]
RUN npm install --production
EXPOSE 3001
COPY . .
CMD [ "node", "nodeservice2.js"]