ARG NODE_VERSION=18
FROM node:$NODE_VERSION as build
COPY ["package*.json", "./"]
RUN npm install --legacy-peer-deps
COPY . ./
ARG BACKEND_URL
RUN npm run build
CMD [ "node", "index.js" ]