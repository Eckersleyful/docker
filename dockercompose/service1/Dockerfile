# syntax=docker/dockerfile:1

FROM node:14.13.0
WORKDIR /
ENV NODE_ENV=production
COPY ["package.json", "package-lock.json*"]
RUN npm install --production
COPY . .
EXPOSE 8001
CMD [ "node", "nodeservice.js"]